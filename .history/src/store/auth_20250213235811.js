import { jwtDecode } from "jwt-decode";
import axiosInstance from "./setLoading";
export default {
  namespaced: true,
  state() {
    return {
      userInfo: {},
      signupInfo: {},
    };
  },
  mutations: {
    setUser(state, token) {
      localStorage.setItem("token", JSON.stringify(token));
      state.userInfo = token;
    },
    addRecentUser(_, userEmail) {
      let recentUsers = JSON.parse(localStorage.getItem("recentUsers")) || [];
      const isExist = recentUsers.some((email) => email === userEmail);
      if (!isExist) {
        recentUsers.push(userEmail);
        if (recentUsers.length > 5) {
          recentUsers.shift();
        }
        localStorage.setItem("recentUsers", JSON.stringify(recentUsers));
      }
    },
    setSignup(state, payload) {
      state.signupInfo = payload;
    },
  },
  getters: {
    isAuthenticated(state) {
      return Object.keys(state.userInfo).length > 0;
    },
    getRecentUsers() {
      return JSON.parse(localStorage.getItem("recentUsers")) || [];
    },
    getLoading(state) {
      return state.isLoading;
    },
    getSignup(state) {
      return state.signupInfo;
    },
  },
  actions: {
    pushSignupInfo(context, payload) {
      try {
        context.commit("setSignup", payload);

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    logOut(context) {
      try {
        localStorage.removeItem("userInfo");
        context.commit("setUser", {});
        return true;
      } catch (error) {
        console.log("Failed to log out: ", error);
        return false;
      }
    },
    async LoginAuthentication(context, payload) {
      const { email, password, isSave } = payload;
      try {
        // Gửi request lên server để xác thực thông tin đăng nhập
        const response = await axiosInstance.post(
          `http://localhost:3000/users/log`,
          {
            email,
            password,
          }
        );
        const { status, token } = response.data;
        // Nếu status code trả về là 200 thì lưu token vào localStorage và set thời gian hết hạn cho token
        if (status == "success") {
          const decoded = jwtDecode(token);
          const expiration = decoded.exp * 1000;
          const now = Date.now();
          const timeUntilExpiration = expiration - now;
          setTimeout(() => {
            context.commit("logOut");
          }, timeUntilExpiration);
          // Lưu token vào localStorage và set user
          context.commit("setUser", token);
          if (isSave) {
            context.commit("addRecentUser", decoded.email);
          }
          return true;
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async signUpAction(_, payload) {
      try {
        const { email, password, info, type } = payload;
        const response = await axiosInstance.post(
          `http://localhost:3000/users/reg`,
          {
            email,
            password,
            info,
            type,
          }
        );
        const { status } = response.data;
        if (status == "success") {
          return true;
        }
      } catch (error) {
        return error.response.data.message;
      }
    },
    async sendEmail(_, payload) {
      try {
        const response = await axiosInstance.post(
          `http://localhost:3000/email/send-verification`,
          {
            email: payload.email,
            message: payload.message,
          }
        );
        if (response.status == 200) {
          return true;
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async changePassword(_, payload) {
      try {
        const response = await axiosInstance.post(
          `http://localhost:3000/users/changepass`,
          {
            email: payload.email,
            newPassword: payload.newPassword,
          }
        );
        if (response.status == 200) {
          return true;
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async verifyAction(_, payload) {
      try {
        const response = await axiosInstance.get(
          `http://localhost:3000/email/verify?token=${payload.token}`
        );
        const { message, status } = response.data;

        return {
          message,
          status,
        };
      } catch (error) {
        return error.response.data;
      }
    },
    autoLogin(context) {
      try {
        const token = JSON.parse(localStorage.getItem("token"));
        if (!token) return false;
        if (Object.keys(token).length == 0) return false;

        const userInfo = jwtDecode(token);
        // Kiểm tra thời gian hết hạn của token
        const expiration = userInfo.exp * 1000;
        const now = Date.now();
        const timeUntilExpiration = expiration - now;
        if (timeUntilExpiration > 0) {
          // Nếu token chưa hết hạn thì set lại thời gian hết hạn
          setTimeout(() => {
            context.commit("logOut");
          }, timeUntilExpiration);
          context.commit("setUser", token);
          return true;
        }
        // Nếu token đã hết hạn thì xóa token và thông tin user
        localStorage.removeItem("userInfo");
        return false;
      } catch (error) {
        console.log("Failed to auto login: ", error);
        localStorage.removeItem("userInfo");
        return false;
      }
    },
    async getInfo(_, emails) {
      try {
        if (!emails) return;
        const results = [];
        if (typeof emails == "string") {
          emails = [emails];
        }
        for (const email of emails) {
          const response = await axiosInstance.post(
            `http://localhost:3000/users/info`,
            {
              email,
            }
          );
          const { status, avatar, info } = response.data;

          if (status == "success") {
            results.push({
              avatar,
              info,
              email,
            });
          }
        }
        if (results.length == 1) {
          return results[0];
        }
        return results;
      } catch (error) {
        console.log("failed for get info" + error);
        return false;
      }
    },
  },
};

<template>
  <div class="relative">
    <input
      :type="isHidePassword ? 'password' : 'text'"
      class="pw-box"
      placeholder="Password"
      v-model="password"
    />
    <i
      @click="togglePasswordVisibility"
      :class="[isHidePassword ? 'fa fa-eye-slash' : 'fa fa-eye']"
      v-show="isShowEyes"
      id="toggleEyeIcon"
      class="absolute top-1/2 transform -translate-y-1/2 right-0 p-2 cursor-pointer"
    ></i>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";

// Định nghĩa props nhận giá trị từ parent (component cha)
const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  isShowEyes: {
    type: Boolean,
    default: true,
  },
});

// Trạng thái của mật khẩu
const password = ref(props.value); // Đồng bộ giá trị mật khẩu với value từ props
const isHidePassword = ref(true);

// Hàm chuyển đổi ẩn/hiện mật khẩu
const togglePasswordVisibility = () => {
  isHidePassword.value = !isHidePassword.value;
};

// Định nghĩa emits để gửi giá trị về cho parent
const emit = defineEmits();

// Theo dõi sự thay đổi của password và emit lại sự kiện khi có sự thay đổi
watch(password, (newValue) => {
  emit("update:value", newValue); // Cập nhật giá trị cho parent
});
</script>

<style scoped>
.pw-box {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
}

i {
  cursor: pointer;
  transition: color 0.3s;
}

i:hover {
  color: #007bff;
}
</style>

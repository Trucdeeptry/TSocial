<template>
  <loading-page v-if="isLoadingUser"></loading-page>
  <section v-else>
    <header_nav></header_nav>
    <div class="flex justify-center h-screen">
      <left_menu> </left_menu>
      <div class="w-full lg:w-2/3 xl:w-2/5 pt-32 lg:pt-16 px-2">
        <post_form keyOfPost="postsHome" class="!mt-24"></post_form>
        <story class="!mt-6 !mb-6"></story>
        <post class="post" :isOverlay="true" :postsProp="store.getters['post/getPosts']('postsHome')"></post>
      </div>
      <right_menu></right_menu>
    </div>
  </section>
</template>

<script setup>
import header_nav from "../components/home/header_nav.vue";
import left_menu from "../components/home/left_menu.vue";
import right_menu from "../components/home/right_menu.vue";
import post_form from "../components/post/post_form.vue";
import story from "../components/home/story.vue";
import loadingPage from "./loadingPage.vue";
import { useStore } from "vuex";

import post from "../components/post/post.vue";
import { ref, inject, onMounted } from "vue";
const isLoadingUser = ref(true)
const store = useStore();

onMounted(async () => {
  const user = inject("user");
  isLoadingUser.value = true
  const posts = ref([]);
  posts.value = await store.dispatch("post/getPosts", user.value.user_id);
  store.commit("post/setPosts", {
    posts: posts.value,
    key: "postsHome"
  });
  isLoadingUser.value = false
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #efefef;
}

#post {
  margin-top: 60px;
  margin-left: -540px;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1876f2;
  padding: 5px 5%;
  position: sticky;
  top: 0;
  z-index: 1;
}

.logo {
  width: 160px;
  margin-right: 45px;
}

.nav_left,
.nav_right {
  display: flex;
  align-items: center;
}

.nav_left ul li {
  list-style: none;
  display: inline-block;
}

.nav_left ul li img {
  width: 28px;
  margin: 0 15px;
}

.nav_user_icon img {
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
}

.nav_user_icon {
  margin-left: 30px;
}

.search_box {
  background: #efefef;
  width: 350px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.search_box img {
  width: 18px;
}

.search_box input {
  width: 100%;
  background-color: transparent;
  padding: 7px 10px;
  outline: none;
  border: none;
}

.online_icon {
  position: relative;
}

.online_icon::after {
  content: " ";
  width: 7px;
  height: 7px;
  background-color: #41db51;
  border-radius: 50%;
  border: 2px solid #fff;
  position: absolute;
  top: 0;
  right: 0;
}

.container {
  display: flex;
  justify-content: space-between;
  padding: 13px 5%;
  background-color: #efefef;
}

.left_sidebar {
  flex-basis: 25%;
  position: sticky;
  top: 90px;
  align-self: flex-start;
}

.right_sidebar {
  background-color: #fff;
  flex-basis: 25%;
  padding: 20px;
  height: 89vh;
  border-radius: 4px;
  color: #626262;
  position: sticky;
  top: 70px;
  align-self: flex-start;
}

.main_content {
  flex-basis: 47%;
}

.important_link a,
.shortcut_links a {
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  color: #626262;
  width: fit-content;
}

.important_link a img {
  width: 25px;
  margin-right: 15px;
}

.important_link a:last-child {
  color: #1876f2;
}

.important_link {
  border-bottom: 1px solid #ccc;
}

.shortcut_links a img {
  width: 40px;
  border-radius: 4px;
  margin-right: 15px;
}

.shortcut_links p {
  margin: 25px 0;
  color: #626262;
  font-weight: 500;
}

.sider_bar_title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.right_sidebar h4 {
  font-weight: 600;
  font-size: 16px;
}

.sider_bar_title a {
  text-decoration: none;
  color: #1876f2;
  font-size: 12px;
}

.event {
  display: flex;
  font-size: 14px;
  margin-bottom: 20px;
}

.event .Left_event {
  border-radius: 10px;
  height: 65px;
  width: 65px;
  margin-right: 15px;
  padding-top: 10px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.event .Left_event span {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #fff;
  background-color: #1876f2;
  font-size: 10px;
  padding: 4px 0;
}

.event .Right_event p {
  font-size: 12px;
}

.event .Right_event a {
  font-size: 12px;
  text-decoration: none;
  color: #1876f2;
}

.advirsment_side_bar {
  width: 100%;
  margin-bottom: 20px;
  border-radius: 4px;
}

.online_list {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.online_list .online_icon img {
  width: 40px;
  border-radius: 50%;
}

.online_list .online_icon {
  width: 40px;
  border-radius: 50%;
  margin-right: 15px;
}

.online_list .online_icon::after {
  top: unset;
  bottom: 5px;
}

.story_gallery {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.story {
  flex-basis: 18%;
  padding-top: 32%;
  position: relative;
  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5)),
    url(/img/home/status-1.png);
  background-position: center;
  background-size: cover;
  border-radius: 10px;
}

.story img {
  position: absolute;
  width: 45px;
  border-radius: 50%;
  top: 0;
  left: 0;
  border: 5px solid #1876f2;
}

.story p {
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 14px;
}

.story2 {
  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5)),
    url(/img/home/status-2.png);
}

.story3 {
  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5)),
    url(/img/home/status-3.png);
}

.story4 {
  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5)),
    url(/img/home/status-4.png);
}

.story5 {
  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5)),
    url(/img/home/status-5.png);
}

.story1 img {
  top: unset;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
  border: 0;
  width: 35px;
}

.post_container {
  width: 100%;
  background-color: #fff;
  border-radius: 6px;
  padding: 20px;
  color: #626262;
}

.user_profile {
  display: flex;
  align-items: center;
}

.user_profile img {
  width: 45px;
  border-radius: 50%;
  margin-right: 10px;
}

.user_profile p {
  margin-bottom: -5px;
  font-weight: 500;
  color: #626262;
}

.user_profile small {
  font-size: 12px;
}

.post_input_container {
  padding-left: 55px;
  padding-top: 20px;
}

.post_input_container input {
  width: 100%;
  border: 0;
  border-bottom: 1px solid #ccc;
  background-color: transparent;
  outline: none;
  margin-bottom: -330000000px;
  resize: none;
}

.add_post_link {
  display: flex;
  margin-top: -20px;
}

.add_post_link a {
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #626262;
  margin-right: 30px;
  font-size: 13px;
}

.add_post_link a img {
  width: 20px;
  margin-right: 10px;
}

.post_container {
  width: 100%;
  background-color: #fff;
  border-radius: 6px;
  padding: 20px;
  color: #626262;
  margin: 20px 0;
}

.user_profile span {
  font-size: 13px;
  color: #9a9a9a;
}

.post_text {
  color: #9a9a9a;
  font-size: 15px;
  margin: 15px 0;
}

.post_text span {
  color: #626262;
  font-weight: 500;
}

.post_text a {
  color: #1876f2;
  text-decoration: none;
}

.post_img {
  width: 100%;
  border-radius: 4px;
  margin-bottom: 5px;
}

.post_row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post_row .activity_icon div img {
  width: 18px;
  margin-right: 10px;
}

.post_row .activity_icon div {
  display: inline-flex;
  align-items: center;
  margin-right: 30px;
}

.post_profile_icon {
  display: flex;
  align-items: center;
}

.post_profile_icon img {
  width: 20px;
  border-radius: 50%;
  margin-right: 5px;
}

.post_row a {
  color: #9a9a9a;
}

.our_btn {
  display: block;
  margin: auto;
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid #626262;
  background: transparent;
  border-radius: 4px;
}

footer {
  text-align: center;
  color: #9a9a9a;
  padding: 40px 0 40px;
  font-size: 16px;
}

.setting_menu {
  position: absolute;
  width: 90%;
  max-width: 350px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  top: 108%;
  right: 5%;
  max-height: 0;
  transition: max-height 1s;
  border-radius: 4px;
}

.setting_menu_height {
  max-height: 450px;
}

.user_profile a {
  font-size: 12px;
  color: #1876f2;
  text-decoration: none;
}

.settings_menu_inner {
  padding: 20px;
}

.setting_menu hr {
  border: 0;
  height: 1px;
  background-color: #9a9a9a;
  margin: 15px 0;
}

.setting_link {
  display: flex;
  align-items: center;
  margin: 15px 0;
}

.setting_link .setting_icon {
  width: 38px;
  margin-right: 10px;
  border-radius: 50%;
}

.setting_link a {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: #626262;
}

#dark_btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #ccc;
  width: 45px;
  border-radius: 15px;
  padding: 2px 3px;
  cursor: pointer;
  display: flex;
  transition: padding-left 0.3s, background-color 0.5s;
}

#dark_btn span {
  width: 18px;
  height: 18px;
  background-color: #fff;
  border-radius: 50%;
  display: inline-block;
}

.dark_btn_on {
  margin-left: 23px;
  background-color: #000;
}

/* todo: profile page  */
.profile_container {
  padding: 20px 15%;
  color: #626262;
}

.cover {
  width: 100%;
  border-radius: 6px;
  margin-bottom: 14px;
}

.profile_detail {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.profile_row {
  display: flex;
  align-items: flex-start;
}

.pd_image {
  width: 100px;
  margin-right: 20px;
  border-radius: 6px;
}

.profile_row div h3 {
  font-size: 25px;
  font-weight: 600;
}

.profile_row div p {
  font-size: 13px;
}

.profile_row div img {
  border-radius: 50%;
  width: 25px;
  margin-top: 12px;
}

.proflie_detail_right button {
  background-color: #1876f2;
  border: 0;
  outline: 0;
  padding: 6px 10px;
  display: inline-block;
  align-items: center;
  color: #fff;
  border-radius: 3px;
  margin-left: 10px;
  cursor: pointer;
}

.proflie_detail_right img {
  height: 15px;
  margin-right: 10px;
}

.proflie_detail_right button:first-child {
  background-color: #e4e6eb;
  color: #000;
}

.proflie_detail_right {
  text-align: right;
}

.proflie_detail_right a {
  background-color: #e4e6eb;
  border-radius: 3px;
  padding: 12px;
  display: inline-flex;
  margin-top: 30px;
  height: 20px;
}

.proflie_detail_right a img {
  width: 20px;
  margin-top: -2px;
  margin-left: 10px;
  height: 5px;
}

.profile_info {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 20px;
}

.info_col {
  flex-basis: 33%;
}

.post_col {
  flex-basis: 65%;
  margin-top: -20px;
}

.profile_intro {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
}

.profile_intro h3 {
  font-weight: 600;
}

.intro_text {
  text-align: center;
  margin: 10px 0;
  font-size: 15px;
}

.intro_text img {
  width: 15px;
  margin-bottom: -3px;
}

.profile_intro hr {
  border: 0;
  height: 1px;
  background-color: #ccc;
  margin: 24px;
}

.profile_intro ul li {
  list-style-type: none;
  font-size: 15px;
  margin: 15px 0;
  display: flex;
  align-items: center;
}

.profile_intro ul li img {
  width: 26px;
  margin-right: 10px;
}

.title_box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title_box a {
  text-decoration: none;
  color: #1876f2;
  font-size: 14px;
}

.photo_box {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 10px;
  margin-top: 15px;
}

.photo_box div img {
  width: 100%;
  cursor: pointer;
}

.profile_intro p {
  font-size: 14px;
}

.freinds_box {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 10px;
  margin-top: 15px;
}

.freinds_box div img {
  width: 100%;
  cursor: pointer;
  padding-bottom: 20px;
}

.freinds_box div {
  position: relative;
}

.freinds_box p {
  position: absolute;
  bottom: 0;
  left: 0;
}

/* todo:  🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 Its Media  Query TIme 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥  */
@media (max-width: 900px) {
  .right_sidebar {
    display: none;
  }

  .left_sidebar {
    display: none;
  }

  nav {
    flex-wrap: wrap;
  }

  .search_box {
    display: none;
  }

  .logo {
    width: 110px;
    margin-right: 20px;
  }

  .nav_left ul li img {
    width: 20px;
    margin: 0 8px;
  }

  .nav_user_icon img {
    width: 30px;
  }

  .nav_user_icon {
    margin-left: 0;
  }

  .add_post_link {
    flex-wrap: wrap;
  }

  .main_content {
    flex-basis: 100%;
  }

  .story img {
    width: 30px;
    border-width: 3px;
    bottom: 30px;
  }

  .story p {
    font-size: 10px;
  }

  .add_post_link a {
    font-size: 11px;
    margin-right: 12px;
  }

  .add_post_link a img {
    width: 16px;
    margin-right: 5px;
  }

  .post_input_container {
    padding-left: 0;
  }
}

/* todo:  🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 Its Media  Query TIme 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥  */
@media (max-width: 900px) {
  .profile_container {
    padding: 20px 5%;
  }

  .profile_detail {
    flex-wrap: wrap;
  }

  .proflie_detail_right {
    text-align: left;
    margin-top: 15px;
  }

  .proflie_detail_right button {
    margin-left: 0;
    margin-right: 10px;
  }

  .profile_info {
    flex-wrap: wrap;
  }

  .info_col {
    flex-basis: 100%;
  }

  .post_col {
    flex-basis: 100%;
  }
}

#button_value {
  padding: 10px 30px;
  margin-bottom: -440px;
  margin-left: 430px;
}

#post {
  background-color: #1876f2;
  color: #fff;
  margin-left: 1px;
  width: 400px;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  margin-top: -7px;
}
</style>

<template>
  <div
    class="w-1/5 pt-16 h-full hidden xl:block px-4 fixed top-0 right-0 scroll-container"
  >
    <div class="h-full">
      <div class="flex justify-between items-center px-4 pt-4">
        <span class="font-semibold text-gray-500 text-lg dark:text-dark-txt"
          >Firend requests</span
        >
        <span
          class="text-blue-500 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third p-2 rounded-md"
          >See All</span
        >
      </div>
      <div class="p-2">
        <a
          href="#"
          class="flex items-center space-x-2 p-2 hover:bg-gray-200 dark:hover:bg-dark-third rounded-lg transition-all"
        >
          <img
            src="/img/home/avt.jpg"
            alt="Profile picture"
            class="w-16 h-16 rounded-full"
          />
          <div class="flex-1 h-full">
            <div class="dark:text-dark-txt">
              <span class="font-semibold">Sakura Hinata</span>
              <span class="float-right">6d</span>
            </div>
            <div class="flex space-x-2 mt-2">
              <div
                class="bg-blue-500 cursor-pointer p-2 text-center font-semibold text-white rounded-lg"
              >
                Confirm
              </div>
              <div
                class="bg-gray-300 cursor-pointer p-2 text-center font-semibold text-black rounded-lg"
              >
                Delete
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="border-b border-gray-200 dark:border-dark-third mt-6"></div>
      <!-- CONTACTS -->
      <div
        class="flex justify-between items-center px-4 pt-4 text-gray-500 dark:text-dark-txt"
      >
        <span class="font-semibold text-lg">Contacts</span>
        <div class="flex space-x-1">
          <div
            class="w-8 h-8 grid place-items-center text-xl hover:bg-gray-200 dark:hover:bg-dark-third rounded-full cursor-pointer"
          >
            <i class="bx bx-search-alt-2"></i>
          </div>
          <div
            class="w-8 h-8 grid place-items-center text-xl hover:bg-gray-200 dark:hover:bg-dark-third rounded-full cursor-pointer"
          >
            <i class="bx bx-dots-horizontal-rounded"></i>
          </div>
        </div>
      </div>
      <ul class="p-2">
        <li>
          <div
            class="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer"
          >
            <div class="relative">
              <img
                src="/img/home/avt-3.jpg"
                alt="Friends profile picture"
                class="rounded-full"
              />
              <span
                class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"
              ></span>
            </div>
            <div>
              <span class="font-semibold">Chin Chin</span>
            </div>
          </div>
        </li>
        <li>
          <div
            class="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer"
          >
            <div class="relative">
              <img
                src="/img/home/avt-2.jpg"
                alt="Friends profile picture"
                class="rounded-full"
              />
              <span
                class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"
              ></span>
            </div>
            <div>
              <span class="font-semibold">Tuat TA</span>
            </div>
          </div>
        </li>
        <li>
          <div
            class="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer"
          >
            <div class="relative">
              <img
                src="/img/home/avt-4.jpg"
                alt="Friends profile picture"
                class="rounded-full"
              />
              <span
                class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"
              ></span>
            </div>
            <div>
              <span class="font-semibold">John Doe</span>
            </div>
          </div>
        </li>
        <li>
          <div
            class="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer"
          >
            <div class="relative">
              <img
                src="/img/home/avt-5.jpg"
                alt="Friends profile picture"
                class="rounded-full"
              />
              <span
                class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"
              ></span>
            </div>
            <div>
              <span class="font-semibold">Ivan Lorem</span>
            </div>
          </div>
        </li>
        <li>
          <div
            class="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer"
          >
            <div class="relative">
              <img
                src="/img/home/avt-6.png"
                alt="Friends profile picture"
                class="rounded-full"
              />
              <span
                class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"
              ></span>
            </div>
            <div>
              <span class="font-semibold">Shiba san</span>
            </div>
          </div>
        </li>
        <li>
          <div
            class="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer"
          >
            <div class="relative">
              <img
                src="/img/home/avt-4.jpg"
                alt="Friends profile picture"
                class="rounded-full"
              />
              <span
                class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"
              ></span>
            </div>
            <div>
              <span class="font-semibold">John Doe</span>
            </div>
          </div>
        </li>
        <li>
          <div
            class="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer"
          >
            <div class="relative">
              <img
                src="/img/home/avt-5.jpg"
                alt="Friends profile picture"
                class="rounded-full"
              />
              <span
                class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"
              ></span>
            </div>
            <div>
              <span class="font-semibold">Ivan Lorem</span>
            </div>
          </div>
        </li>
        <li>
          <div
            class="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer"
          >
            <div class="relative">
              <img
                src="/img/home/avt-6.png"
                alt="Friends profile picture"
                class="rounded-full"
              />
              <span
                class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"
              ></span>
            </div>
            <div>
              <span class="font-semibold">Shiba san</span>
            </div>
          </div>
        </li>
        <li>
          <div
            class="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer"
          >
            <div class="relative">
              <img
                src="/img/home/avt-4.jpg"
                alt="Friends profile picture"
                class="rounded-full"
              />
              <span
                class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"
              ></span>
            </div>
            <div>
              <span class="font-semibold">John Doe</span>
            </div>
          </div>
        </li>
        <li>
          <div
            class="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer"
          >
            <div class="relative">
              <img
                src="/img/home/avt-5.jpg"
                alt="Friends profile picture"
                class="rounded-full"
              />
              <span
                class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"
              ></span>
            </div>
            <div>
              <span class="font-semibold">Ivan Lorem</span>
            </div>
          </div>
        </li>
        <li>
          <div
            class="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer"
          >
            <div class="relative">
              <img
                src="/img/home/avt-6.png"
                alt="Friends profile picture"
                class="rounded-full"
              />
              <span
                class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"
              ></span>
            </div>
            <div>
              <span class="font-semibold">Shiba san</span>
            </div>
          </div>
        </li>
        <li>
          <div
            class="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer"
          >
            <div class="relative">
              <img
                src="/img/home/avt-4.jpg"
                alt="Friends profile picture"
                class="rounded-full"
              />
              <span
                class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"
              ></span>
            </div>
            <div>
              <span class="font-semibold">John Doe</span>
            </div>
          </div>
        </li>
        <li>
          <div
            class="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer"
          >
            <div class="relative">
              <img
                src="/img/home/avt-5.jpg"
                alt="Friends profile picture"
                class="rounded-full"
              />
              <span
                class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"
              ></span>
            </div>
            <div>
              <span class="font-semibold">Ivan Lorem</span>
            </div>
          </div>
        </li>
      </ul>
      <!-- END CONTACTS -->
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { onMounted, provide, ref } from "vue";
// load friend
const isFriendSuccess = ref(false);
const friends = ref(null);
  // get friends
  friends.value = await store.dispatch("home/getFriends", info.email)
  isFriendSuccess.value = true
</script>

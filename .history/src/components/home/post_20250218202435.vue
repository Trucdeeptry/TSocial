<template>
  <div
    class="shadow bg-white dark:bg-dark-second dark:text-primary-txt mt-4 rounded-lg"
  >
    <!-- POST AUTHOR -->
    <div class="flex items-center justify-between px-4 py-2">
      <div class="flex space-x-2 items-center">
        <div class="relative">
          <a href="#">
            <img
              src="/img/home/avt-2.jpg"
              alt="Profile picture"
              class="w-8 h-8 rounded-full" />
            <span
              class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"
            ></span
          ></a>
        </div>
        <div>
          <div class="font-semibold">
            <a href="#" class="hover:!underline">John Doe</a>
          </div>
          <span class="text-sm text-gray-500">38m</span>
        </div>
      </div>
      <div
        class="w-8 h-8 grid place-items-center text-xl text-gray-500 hover:bg-gray-200 dark:text-dark-txt dark:hover:bg-dark-third rounded-full cursor-pointer"
      >
        <i class="bx bx-dots-horizontal-rounded"></i>
      </div>
    </div>
    <!-- END POST AUTHOR -->

    <!-- POST CONTENT -->
    <div class="text-justify px-4 py-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, autem
      earum cum ullam odio, molestias maxime aperiam in id aspernatur vel
      ratione odit molestiae minus ipsa obcaecati quia! Doloribus, illum.
    </div>
    <!-- END POST CONTENT -->

    <!-- POST IMAGE -->
    <div class="py-2">
      <img src="/img/home/post.png" alt="Post image" />
    </div>
    <!-- END POST IMAGE -->

    <!-- POST REACT -->
    <div class="px-4 py-2">
      <div class="flex items-center justify-between">
        <div class="flex flex-row-reverse items-center">
          <span class="ml-2 text-gray-500 dark:text-dark-txt">999</span>
          <span
            class="rounded-full grid place-items-center text-2xl -ml-1 text-red-800"
          >
            <i class="bx bxs-angry"></i>
          </span>
          <span
            class="rounded-full grid place-items-center text-2xl -ml-1 text-red-500"
          >
            <i class="bx bxs-heart-circle"></i>
          </span>
          <span
            class="rounded-full grid place-items-center text-2xl -ml-1 text-yellow-500"
          >
            <i class="bx bx-happy-alt"></i>
          </span>
        </div>
        <div class="text-gray-500 dark:text-dark-txt">
          <span>90 comments</span>
          <span>66 Shares</span>
        </div>
      </div>
    </div>
    <!-- END POST REACT -->

    <!-- POST ACTION -->
    <div class="py-2 px-4">
      <div
        class="border border-gray-200 dark:border-dark-third border-l-0 border-r-0 py-1"
      >
        <div class="flex space-x-2">
          <div
            class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt"
          >
            <i class="bx bx-like"></i>
            <span class="text-sm font-semibold">Like</span>
          </div>
          <div
            class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt"
          >
            <i class="bx bx-comment"></i>
            <span class="text-sm font-semibold">Comment</span>
          </div>
          <div
            class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt"
          >
            <i class="bx bx-share bx-flip-horizontal"></i>
            <span class="text-sm font-semibold">Share</span>
          </div>
        </div>
      </div>
    </div>
    <!-- END POST ACTION -->

    <!-- LIST COMMENT -->
    <div class="py-2 px-4">
      <!-- COMMENT -->
      <div class="flex space-x-2">
        <img
          src="/img/home/avt-5.jpg"
          alt="Profile picture"
          class="w-9 h-9 rounded-full"
        />
        <div>
          <div class="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
            <span class="font-semibold block">John Doe</span>
            <span
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.</span
            >
          </div>
          <div class="p-2 text-xs text-gray-500 dark:text-dark-txt">
            <span class="font-semibold cursor-pointer">Like</span>
            <span>.</span>
            <span class="font-semibold cursor-pointer">Reply</span>
            <span>.</span>
            10m
          </div>
          <!-- COMMENT -->
          <div class="flex space-x-2">
            <img
              src="/img/home/avt-7.jpg"
              alt="Profile picture"
              class="w-9 h-9 rounded-full"
            />
            <div>
              <div
                class="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm"
              >
                <span class="font-semibold block">John Doe</span>
                <span
                  >Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.</span
                >
              </div>
              <div class="p-2 text-xs text-gray-500 dark:text-dark-txt">
                <span class="font-semibold cursor-pointer">Like</span>
                <span>.</span>
                <span class="font-semibold cursor-pointer">Reply</span>
                <span>.</span>
                10m
              </div>
            </div>
          </div>
          <!-- END COMMENT -->
        </div>
      </div>
      <!-- END COMMENT -->
      <!-- COMMENT -->
      <div class="flex space-x-2">
        <img
          src="/img/home/avt-5.jpg"
          alt="Profile picture"
          class="w-9 h-9 rounded-full"
        />
        <div>
          <div class="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
            <span class="font-semibold block">John Doe</span>
            <span
              >Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
              voluptate ipsa animi corrupti unde, voluptatibus expedita
              suscipit, itaque, laudantium accusantium aspernatur officia
              repellendus nihil mollitia soluta distinctio praesentium nulla
              eos?</span
            >
          </div>
          <div class="p-2 text-xs text-gray-500 dark:text-dark-txt">
            <span class="font-semibold cursor-pointer">Like</span>
            <span>.</span>
            <span class="font-semibold cursor-pointer">Reply</span>
            <span>.</span>
            10m
          </div>
          <!-- COMMENT -->
          <div class="flex space-x-2">
            <img
              src="/img/home/avt-7.jpg"
              alt="Profile picture"
              class="w-9 h-9 rounded-full"
            />
            <div>
              <div
                class="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm"
              >
                <span class="font-semibold block">John Doe</span>
                <span
                  >Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.</span
                >
              </div>
              <div class="p-2 text-xs text-gray-500 dark:text-dark-txt">
                <span class="font-semibold cursor-pointer">Like</span>
                <span>.</span>
                <span class="font-semibold cursor-pointer">Reply</span>
                <span>.</span>
                10m
              </div>
            </div>
          </div>
          <!-- END COMMENT -->
        </div>
      </div>
      <!-- END COMMENT -->
    </div>
    <!-- END LIST COMMENT -->

    <!-- COMMENT FORM -->
    <div class="py-2 px-4">
      <div class="flex space-x-2">
        <img
          src="/img/home/tuat.jpg"
          alt="Profile picture"
          class="w-9 h-9 rounded-full"
        />
        <div
          class="flex-1 flex bg-gray-100 dark:bg-dark-third rounded-full items-center justify-between px-3"
        >
          <input
            type="text"
            placeholder="Write a comment..."
            class="outline-none bg-transparent flex-1"
          />
          <div class="flex space-x-0 items-center justify-center">
            <span
              class="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl"
              ><i class="bx bx-smile"></i
            ></span>
            <span
              class="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl"
              ><i class="bx bx-camera"></i
            ></span>
            <span
              class="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl"
              ><i class="bx bxs-file-gif"></i
            ></span>
            <span
              class="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl"
              ><i class="bx bx-happy-heart-eyes"></i
            ></span>
          </div>
        </div>
      </div>
    </div>
    <!-- END COMMENT FORM -->
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps(["posts"]);
</script>

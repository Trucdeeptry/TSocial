<template>
    <div class="header bg-white shadow-lg w-full p-4">
      <img
        class="w-36"
        src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
        alt=""
      />
    </div>
    <div class="content bg-[#e9ebee] py-32">
      <div class="card shadow-md rounded-lg bg-white m-auto w-[33rem]">
        <h1 class="p-6 border-b-2 text-xl font-bold">{{ title }}</h1>
        <slot #body></slot>
        <div class="content_footer p-6 flex justify-between items-center">
          <a href="#" class="text-md text-blue-500 hover:underline"
            >Didn't get a code?</a
          >
          <div class="button-group text-md flex items-center gap-3">
            <button
              type="button"
              class="p-2 hover:opacity-80 px-5 font-bold rounded-lg bg-gray-300"
              @click="$router.push('/login')"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
 import { defineProps } from 'vue';
 const props = defineProps(['title'])
</script>
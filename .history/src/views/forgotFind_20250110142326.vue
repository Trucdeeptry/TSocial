<template>
  <card title="Find Your Account">
    <template #body>
      <div>
        <p>
          Please enter your email address or mobile number to search for your
          account.
        </p>
        <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
    </template>

    <template #footer>
      <div class="flex justify-end gap-3 items-center">
        <baseButton
          tailwind="bg-gray-200 text-black"
          push="/login"
          content="Cancel"
        ></baseButton>
        <baseButton
          tailwind="bg-blue-500 text-white"
          content="Search"
        ></baseButton>
      </div>
    </template>
  </card>
</template>

<script setup>
import baseButton from "../components/base_button.vue";
import card from "../components/card.vue";
</script>

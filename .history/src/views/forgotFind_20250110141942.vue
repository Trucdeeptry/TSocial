<template>
  <card title="Find Your Account">
    <template #body>
      <div>
        <p>
          Please enter your email address or mobile number to search for your
          account.
        </p>
        <input type="email" />
      </div>
    </template>

    <template #footer>
        <baseButton
              tailwind="bg-blue-500 text-white"
              push="/login"
              content="Back to login"
            ></baseButton>
         </template>
  </card>
</template>

<script setup>
import baseButton from "../components/base_button.vue";
import card from "../components/card.vue";
</script>

<template>
  <card></card>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex/types/index.js";
import card from "../components/card.vue";
const router = useRouter();
const store = useStore();
async function callVerifyAction(email, token) {
  try {
    const actionMessage = await store.dispatch("auth/verifyAction", {
      email,
      token,
    });
    return actionMessage;
  } catch (error) {
    console.log(error);
  }
}
const message = ref('')
onBeforeMount(() => {
    mess
})
</script>

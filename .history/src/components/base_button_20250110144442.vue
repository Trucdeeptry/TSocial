<template>
  <button
    type="button"
    class="p-2 hover:opacity-80 px-5 font-bold rounded-lg"
    :class="{ [tailwind]: true }"
    @click="$router.push(push)"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from "vue";
defineProps(["push", "tailwind"]);
function hanldePush(){
    if(push)
}
</script>

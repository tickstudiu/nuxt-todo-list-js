<template>
  <button class="w-full rounded p-2 bg-black" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
}
</script>

<template>
  <button
    :class="[
      'w-full rounded p-2',
      {'bg-black': !disabled},
      {'bg-gray-500': disabled}
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

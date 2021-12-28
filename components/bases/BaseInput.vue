<template>
  <label :for="name">
    <span v-if="label" class="block">{{ label }}</span>
    <input
      :value="value" class="w-full appearance-none focus:outline-none border-b-2 focus:border-black py-1 px-2"
      :type="type" :name="name" :placeholder="name"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  name: 'BaseInput',

  props: {
    label: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    }
  },

  computed: {
    name() {
      return this.label?.toLowerCase() ?? null;
    },
  },
}
</script>

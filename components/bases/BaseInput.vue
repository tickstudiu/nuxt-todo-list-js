<template>
  <label :for="name">
    {{ label }}
    <input
      :value="value" class="w-full appearance-none focus:outline-none border-b-2 focus:border-black py-1 px-2"
      type="text" :name="name" @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  name: 'BaseInput',

  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },

  computed: {
    name() {
      return this.label.toLowerCase();
    },
  },
}
</script>

<template>
  <div>{{ profile }}</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProfilePage',

  computed: {
    ...mapState('me', {
      profile: 'profile',
    }),
  },
}
</script>

<template>
  <nav>
      <ul
        class="flex justify-start gap-4 lg:gap-6 items-center px-2 lg:px-4 py-4 bg-black"
      >
        <li class="text-white">
          <nuxt-link :to="{ name: ROUTE_NAME.INDEX }" class="uppercase">home</nuxt-link>
        </li>
        <li class="text-white">
          <nuxt-link :to="{ name: ROUTE_NAME.TODO }" class="uppercase">todo</nuxt-link>
        </li>
        <li v-if="!isLoggedIn" class="text-white">
          <nuxt-link :to="{ name: ROUTE_NAME.REGISTER }" class="uppercase">register</nuxt-link>
        </li>
        <li v-if="!isLoggedIn" class="text-white">
          <nuxt-link :to="{ name: ROUTE_NAME.LOGIN }" class="uppercase">login</nuxt-link>
        </li>
        <li v-if="isLoggedIn" class="text-white">
          <span class="uppercase">logout</span>
        </li>
      </ul>
    </nav>
</template>

<script>
import { mapState } from 'vuex'
import ROUTE_NAME from '@/enums/routeName'

export default {
  name: 'MenuItemList',

  data() {
    return {
      ROUTE_NAME,
    }
  },

  computed: {
    ...mapState('auth', {
      isLoggedIn: 'isLoggedIn',
    }),
  },
}
</script>

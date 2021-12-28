<template>
  <div>
    <nav>
      <ul
        class="flex justify-start gap-4 lg:gap-6 items-center px-2 lg:px-4 py-4 bg-black"
      >
        <li class="text-white">
          <nuxt-link :to="{ name: ROUTE_NAME.INDEX }">home</nuxt-link>
        </li>
        <li class="text-white">
          <nuxt-link :to="{ name: ROUTE_NAME.TODO }">todo</nuxt-link>
        </li>
      </ul>
    </nav>
    <main class="p-2 lg:p-4">
      <nuxt />
    </main>
  </div>
</template>

<script>
import ROUTE_NAME from '@/enums/routeName'

export default {
  name: 'LayoutDefault',

  data() {
    return {
      ROUTE_NAME,
    }
  },
}
</script>

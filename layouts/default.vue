<template>
  <div>
    <MenuItemList />
    <main class="p-2 lg:p-4">
      <nuxt />
    </main>
  </div>
</template>

<script>
import MenuItemList from '@/components/MenuItemList.vue'

export default {
  name: 'LayoutDefault',

  components: {
    MenuItemList,
  }
}
</script>

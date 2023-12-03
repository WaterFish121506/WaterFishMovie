<template>
  <template v-for="itemGroup in items">
    <el-menu-item v-for="(route, index) in itemGroup" :key="index" :index="index">
      <home theme="outline" size="24" fill="#333" />
      <span>{{ route.name }}</span>
    </el-menu-item>
  </template>
  <el-row></el-row>
</template>

<script setup lang="ts">
import { Home } from '@icon-park/vue-next'
import { NavigationRoute } from './NavgationRoutes'

interface Props {
  items: Array<Array<NavigationRoute>>
}

const { items } = defineProps<Props>()
items.forEach
</script>

<style lang="scss" scoped></style>

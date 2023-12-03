import { Ref } from 'vue'

export interface NavigationRoute {
  name: string
  displayName?: string
  icon?: string
  children?: Array<NavigationRoute>
  expanded: Ref<boolean>
}

export default [
  [
    {
      name: 'home',
    },
  ],
  [
    {
      name: 'movie',
    },
    {
      name: 'tv',
    },
    {
      name: 'variety',
    },
    {
      name: 'animation',
    },
    {
      name: 'documentary',
    },
  ],
  [
    {
      name: 'update',
    },
    {
      name: 'hot',
    },
  ],
] as Array<Array<NavigationRoute>>

<script setup lang="ts">
import { BeakerIcon, HomeIcon, DocumentTextIcon } from '@heroicons/vue/24/solid'
import type { Component } from 'vue'

interface Menu {
  title: string
  icon: Component
  url: string
  subMenuList?: Array<{ title: string; icon?: Component; url: string }>
}

const isCollapse = ref<boolean>(false)
const iconColor = ref<string>('black')
const iconSize = ref<number>(18)
const menuList = ref<Array<Menu>>([
  {
    title: 'HOME',
    icon: HomeIcon,
    url: '/',
  },
  {
    title: 'RESUME',
    icon: DocumentTextIcon,
    url: '/resume',
  },
  {
    title: 'SKILL',
    icon: BeakerIcon,
    url: '/skill',
    subMenuList: [{ title: 'File', url: '/skill/file' }],
  },
  {
    title: 'EXPERIMENT',
    url: '/exper',
    icon: BeakerIcon,
  },
])
</script>

<template>
  <div class="h-full w-64 p-4">
    <div class="h-full rounded-lg border border-gray-100 bg-white shadow-md">
      <ul class="p-6 text-sm">
        <li
          class="py-2"
          v-for="(menu, index) in menuList"
          :key="index"
          @click="$router.push(menu.url)"
        >
          <div class="flex cursor-pointer items-center gap-2 p-2">
            <component :is="menu.icon" class="size-4 text-slate-700" />
            {{ menu.title }}
          </div>

          <!-- sub menu -->
          <ul v-if="menu.subMenuList && menu.subMenuList.length > 0">
            <li
              class="cursor-pointer rounded-md p-1 hover:bg-gray-100"
              v-for="(subMenu, index) in menu.subMenuList"
              :key="index"
              @click="$router.push(subMenu.url)"
            >
              <div class="ml-7">
                {{ subMenu.title }}
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

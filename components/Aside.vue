<script setup lang="ts">
import { BeakerIcon, HomeModernIcon } from '@heroicons/vue/24/outline'
import type { Component } from 'vue'

interface Menu {
  title: string
  icon: Component
  url: string
  subMenuList: Array<{ title: string; icon?: Component; url: string }>
}

const isCollapse = ref<boolean>(false)
const iconColor = ref<string>('black')
const iconSize = ref<number>(18)
const menuList = ref<Array<Menu>>([
  {
    title: '홈',
    icon: HomeModernIcon,
    url: '/',
    subMenuList: [],
  },
  {
    title: '정보게시판',
    icon: BeakerIcon,
    url: '/',
    subMenuList: [
      { title: '문의 게시판', url: '/boards/inquiry' },
      { title: '공지사항 게시판', url: '/boards/notice' },
      { title: '민원 게시판', url: '/boards/complain' },
      {
        title: '개인정보 이력 게시판',
        url: '/boards/personal-history',
      },
    ],
  },
  {
    title: '부가서비스',
    icon: BeakerIcon,
    url: '/',
    subMenuList: [
      { title: 'Xp 통화매니저', url: '/' },
      { title: 'Xp 보이스', url: '/' },
      { title: '장기수선계획', url: '/' },
      { title: 'NEW아파트뱅크', url: '/' },
    ],
  },

  {
    title: '실험실',
    url: '/exper',
    icon: BeakerIcon,
    subMenuList: [
      { title: 'XpERP', icon: BeakerIcon, url: '/' },
      { title: '장기수선계획', icon: BeakerIcon, url: '/' },
      { title: 'Xp 전자결재', icon: BeakerIcon, url: '/' },
      { title: '관리자 사이트', icon: BeakerIcon, url: '/' },
    ],
  },
])
</script>

<template>
  <div class="h-full w-72 p-4">
    <div class="h-full rounded-lg border border-gray-100 bg-white shadow-md">
      <ul class="p-6">
        <li
          v-for="(menu, index) in menuList"
          :key="index"
          @click="$router.push(menu.url)"
        >
          <div class="flex cursor-pointer items-center gap-2 p-2">
            <component :is="menu.icon" class="h-4 w-4" />
            {{ menu.title }}
          </div>

          <!-- sub menu -->
          <ul v-if="menu.subMenuList.length > 0" class="text-sm">
            <li
              class="cursor-pointer rounded-md p-1 hover:bg-gray-100"
              v-for="(subMenu, index) in menu.subMenuList"
              :key="index"
              @click="$router.push(subMenu.url)"
            >
              <div class="ml-8">
                {{ subMenu.title }}
              </div>
            </li>
          </ul>
          <hr v-if="index !== menuList.length - 1" class="my-4" />
        </li>
      </ul>
    </div>
  </div>
</template>

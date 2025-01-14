<script setup lang="ts">
interface Menu {
  index: string
  title: string
  icon?: string
  url: string
  children: Array<{ index: string; title: string; icon?: string; url: string }>
}

const isCollapse = ref<boolean>(false)
const iconColor = ref<string>('black')
const iconSize = ref<number>(18)
const menu = ref<Array<Menu>>([
  {
    index: '1',
    title: '홈',
    icon: 'House',
    url: '/',
    children: [],
  },
  {
    index: '2',
    title: '정보게시판',
    icon: 'DataBoard',
    url: '/',
    children: [
      { index: '2-1', title: '문의 게시판', url: '/boards/inquiry' },
      { index: '2-2', title: '공지사항 게시판', url: '/boards/notice' },
      { index: '2-3', title: '민원 게시판', url: '/boards/complain' },
      {
        index: '2-4',
        title: '개인정보 이력 게시판',
        url: '/boards/personal-history',
      },
    ],
  },
  {
    index: '3',
    title: '부가서비스',
    icon: 'Service',
    url: '/',
    children: [
      { index: '3-1', title: 'Xp 통화매니저', url: '/' },
      { index: '3-2', title: 'Xp 보이스', url: '/' },
      { index: '3-3', title: '장기수선계획', url: '/' },
      { index: '3-4', title: 'NEW아파트뱅크', url: '/' },
    ],
  },

  {
    index: '4',
    title: '바로가기 메뉴',
    url: '/',
    icon: 'CopyDocument',
    children: [
      { index: '4-1', title: 'XpERP', icon: 'Location', url: '/' },
      { index: '4-2', title: '장기수선계획', icon: 'Location', url: '/' },
      { index: '4-3', title: 'Xp 전자결재', icon: 'Location', url: '/' },
      { index: '4-4', title: '관리자 사이트', icon: 'UserFilled', url: '/' },
    ],
  },
])
</script>

<template>
  <div>gg</div>
</template>

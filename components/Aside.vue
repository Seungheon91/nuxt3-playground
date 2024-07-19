<script setup lang="ts">
interface MenuItem {
  index: string
  title: string
  icon: string
  url: string
  children: Array<{ index: string; title: string; url: string }>
}

const isCollapse = ref<boolean>(false)
const iconColor = ref<string>('black')
const iconSize = ref<number>(18)
const menu = ref<Array<MenuItem>>([
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
    icon: 'Location',
    url: '/',
    children: [{ index: '2-1', title: '문의 게시판', url: '/' }],
  },
])

const getIconComponent = (icon: string) => {
  const iconComponent = resolveComponent(icon)
  return iconComponent
}
</script>

<template>
  <el-menu class="sidebar" :collapse="isCollapse">
    <div
      class="sidebar__icon"
      :class="isCollapse ? 'sidebar__icon--collapse' : 'sidebar__icon--expand'"
    >
      <el-icon
        v-if="!isCollapse"
        @click="isCollapse = true"
        color="black"
        :size="20"
      >
        <Fold />
      </el-icon>
      <el-icon v-else @click="isCollapse = false" color="black" :size="20">
        <Expand />
      </el-icon>
    </div>

    <template v-for="item in menu">
      <el-sub-menu v-if="item.children.length > 0" :index="item.index">
        <template #title>
          <el-icon :color="iconColor" :size="iconSize">
            <component :is="getIconComponent(item.icon)" />
          </el-icon>
          <span>{{ item.title }}</span>
        </template>

        <el-menu-item v-for="child in item.children" :index="child.index">
          {{ child.title }}
        </el-menu-item>
      </el-sub-menu>

      <el-menu-item v-else :index="item.index">
        <el-icon :color="iconColor" :size="iconSize">
          <component :is="getIconComponent(item.icon)" />
        </el-icon>
        <template #title>
          <span>{{ item.title }}</span>
        </template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

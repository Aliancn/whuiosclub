<template>
  <div :class="bgTextColor" >
    <div class="fixed top-0 left-0 w-full z-50">
      <HeaderView ref="headerRef" />
    </div>
    <MainView @open-search="openSearch" />
    <FooterView />
  </div>
</template>

<script>
import HeaderView from './HeaderView.vue'
import MainView from './MainView.vue'
import FooterView from './FooterView.vue'
import { ref } from 'vue'

export default {
  components: {
    HeaderView,
    MainView,
    FooterView
  },
  setup() {
    const headerRef = ref(null)

    const openSearch = () => {
      if (headerRef.value && headerRef.value.openSearch) {
        headerRef.value.openSearch()
      }
    }

    return {
      headerRef,
      openSearch
    }
  },
  computed: {
    bgTextColor() {
      return 'bg-background text-foreground w-full h-screen'
    }
  }
}
</script>

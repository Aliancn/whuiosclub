<template>
  <div :class="bgTextColor" >
    <div class="fixed top-0 left-0 w-full z-50">
      <HeaderView />
    </div>
    <MainView />
    <FooterView />
  </div>
</template>

<script>
import HeaderView from './HeaderView.vue'
import MainView from './MainView.vue'
import FooterView from './FooterView.vue'

export default {
  components: {
    HeaderView,
    MainView,
    FooterView
  },
  computed: {
    bgTextColor() {
      return 'bg-background text-foreground w-full h-screen'
    }
  }
}
</script>

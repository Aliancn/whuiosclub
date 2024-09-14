<!-- EventCard.vue -->
<template>
  <div class="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition">
    <img :src="imageSrc" :alt="title" class="w-full rounded-lg mb-4" />
    <h2 class="text-xl font-semibold text-primary">{{ title }}</h2>
    <p class="text-secondary">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String
  },
  computed: {
    imageSrc() {
      return `https://placehold.co/400x250?text=${this.title.replace(/\s/g, '+')}`
    }
  }
}
</script>

<template>
  <div class="home-carousel-item">
    <img
      :src="require('@/assets/images/intro/' + item_data.img)"
      alt="background"
      class="carousel_bg"
    />
    <div class="carousel_box">
      <h1 class="carousel_title">{{ item_data.title }}</h1>
      <h1 class="carousel_subtitle">{{ item_data.subtitle }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-carousel",
  props: {
    item_data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style  lang="scss">

</style>
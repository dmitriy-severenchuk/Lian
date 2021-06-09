<template>
  <div class="home-carousel-wrapper">
    <div
      class="home-carousel"
      :style="{ 'margin-left': '-' + 100 * currentSlideIndex + '%' }"
    >
      <HomeCarouselItem
        v-for="item in carousel_data"
        :key="item.id"
        :item_data="item"
      />
    </div>
    <button @click="prevSlide" class="carousel_prev carousel_btn">
      <i class="fas fa-chevron-left carousel_btn-item"></i>
    </button>
    <button @click="nextSlide" class="carousel_next carousel_btn">
      <i class="fas fa-chevron-right carousel_btn-item"></i>
    </button>
  </div>
</template>

<script>
import HomeCarouselItem from "./Home-Carousel-Item";

export default {
  name: "home-carousel",
  data() {
    return {
      currentSlideIndex: 0,
    };
  },
  props: {
    carousel_data: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    HomeCarouselItem,
  },
  methods: {
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
      }
    },
    nextSlide() {
      if (this.currentSlideIndex >= this.carousel_data.length - 1) {
        this.currentSlideIndex = 0;
      } else {
        this.currentSlideIndex++;
      }
    },
  },
};
</script>

<style  lang="scss">


</style>
<template>
  <div class="home">
    <div class="intro">
      <Header />
      <HomeCarousel :carousel_data="sliderItems" />
    </div>
    <div class="catalog">
      <div class="container">
        <div class="catalog_header" v-on-clickaway="awayCatalogMenu">
          <div class="catalog_header_menu_wrapper" @click="showCatalogMenu" >
            <div class="catalog_header_menu"></div>
          </div>
          <nav
            class="catalog_nav"
            :class="{ 'catalog_header_menu-visible': isCatalogMenuVisible }"
          >
            <a href="#" class="catalog_nav-link">all</a>
            <a href="#" class="catalog_nav-link">logo</a>
            <a href="#" class="catalog_nav-link">mobile app</a>
            <a href="#" class="catalog_nav-link">wordpress</a>
            <a href="#" class="catalog_nav-link">web design</a>
            <a href="#" class="catalog_nav-link">ui/ux</a>
            <a href="#" class="catalog_nav-link">branding</a>
          </nav>
        </div>
        <div class="catalog_inner">
          <section class="catalog_section grid">
            <div class="catalog_item --first">
              <img
                src="../assets/images/grid/hover_cross.png"
                alt=""
                class="hover_cross"
              />
            </div>
            <div class="catalog_item --second">
              <img
                src="../assets/images/grid/hover_cross.png"
                alt=""
                class="hover_cross"
              />
            </div>
            <div class="catalog_item --third">
              <img
                src="../assets/images/grid/hover_cross.png"
                alt=""
                class="hover_cross"
              />
            </div>
            <div class="catalog_item --fourth">
              <img
                src="../assets/images/grid/hover_cross.png"
                alt=""
                class="hover_cross"
              />
            </div>
            <div class="catalog_item --fifth">
              <img
                src="../assets/images/grid/hover_cross.png"
                alt=""
                class="hover_cross"
              />
            </div>
            <div class="catalog_item --sixth">
              <img
                src="../assets/images/grid/hover_cross.png"
                alt=""
                class="hover_cross"
              />
            </div>
            <div class="catalog_item --seventh">
              <img
                src="../assets/images/grid/hover_cross.png"
                alt=""
                class="hover_cross"
              />
            </div>
            <div class="catalog_item --eighth">
              <img
                src="../assets/images/grid/hover_cross.png"
                alt=""
                class="hover_cross"
              />
            </div>
            <div class="catalog_item --ninth">
              <img
                src="../assets/images/grid/hover_cross.png"
                alt=""
                class="hover_cross"
              />
            </div>
            <div class="catalog_item --tenth">
              <img
                src="../assets/images/grid/hover_cross.png"
                alt=""
                class="hover_cross"
              />
            </div>
          </section>
          <a href="#" class="catalog_btn">load more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import HomeCarousel from "./Home-Carousel/Home-Carousel";
import { mixin as clickaway } from "vue-clickaway";

export default {
  mixins: [clickaway],
  data() {
    return {
      sliderItems: [
        {
          id: 1,
          title: "Lian Creative Agency",
          subtitle: "Minimal Freelance Portfolio",
          img: "bg1.jpg",
        },
        {
          id: 2,
          title: "Hello world!",
          subtitle: "I'm frontend developer!",
          img: "bg1.jpg",
        },
        { id: 3, title: "Dima", subtitle: "Severenchuk", img: "bg1.jpg" },
      ],
      isCatalogMenuVisible: false,
    };
  },
  methods: {
    showCatalogMenu() {
      this.isCatalogMenuVisible = !this.isCatalogMenuVisible;
    },
    awayCatalogMenu() {
      if (this.isCatalogMenuVisible == true) {
         this.showCatalogMenu()
      }
    },
  },
  components: {
    Header,
    HomeCarousel,
  },
};
</script>

<style lang="scss">
.catalog_header_menu-visible {
  display: flex;
}
</style>

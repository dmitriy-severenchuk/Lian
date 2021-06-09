<template>
  <header class="header" v-on-clickaway="awayHeaderNav">
    <div class="container">
      <div class="header_inner">
        <img
          src="../assets/images/intro/logo.png"
          alt="logo"
          class="header_logo"
        />
        <nav class="header_nav">
            <div
              class="header_nav_wrapper"
              :class="{ 'header_nav_wrapper-visible': isNavVisible }"
            >
              <router-link :to="{ name: 'home.main' }" class="header_nav-link"
                >home</router-link
              >
              <router-link :to="{ name: 'about.main' }" class="header_nav-link"
                >about</router-link
              >
              <router-link
                :to="{ name: 'portfolio.main' }"
                class="header_nav-link"
                >portfolio</router-link
              >
              <router-link :to="{ name: 'blog.main' }" class="header_nav-link"
                >blog</router-link
              >
              <router-link
                :to="{ name: 'contact.main' }"
                class="header_nav-link"
                >contact</router-link
              >
            </div>
          <a href="#" class="header_menu" @click="showNav"
            ><i class="fas fa-bars"></i
          ></a>
          <form
            class="search_box"
            id="searchBar"
            name="box"
            @click="showSearchBar"
            v-on-clickaway="away"
            :class="{ '--focus': focus }"
          >
            <label for="box"
              ><i class="fas fa-search search_box-icon"></i
            ></label>
            <input
              type="text"
              placeholder="search..."
              id="searchInput"
              class="search_box-bar"
              name="search"
              autocomplete="off"
              :class="{ '--value_border': focus }"
            />
          </form>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  mixins: [clickaway],
  data: function () {
    return {
      focus: false,
      isNavVisible: false,
    };
  },
  methods: {
    showSearchBar() {
      this.focus = true;
    },
    away() {
      let searchInput = document.querySelector("#searchInput");
      if (searchInput.value == "") {
        this.focus = false;
        let focus = this.focus;
        return focus;
      }
    },
    showNav() {
      this.isNavVisible = !this.isNavVisible;
    },
    awayHeaderNav() {
      if (this.isNavVisible == true) {
        this.showNav();
      }
    },
  },
};
</script>

<style lang="scss">
  .header_nav_wrapper-visible {
    display: flex;
  }
</style>
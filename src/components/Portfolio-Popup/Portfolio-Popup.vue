<template>
  <div class="portfolio_popup_wrapper" ref="portfolio_popup_wrapper">
    <div class="portfolio_popup">
      <div class="portfolio_popup_header">
        <span class="portfolio_popup_header-title">share!!!</span>
        <span>
          <i
            class="far fa-times-circle portfolio_popup_header-close"
            @click="closePopup"
          >
          </i
        ></span>
      </div>
      <div class="portfolio_popup_inner">
        <div class="portfolio_popup_content">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            class="portfolio_popup_content-item"
            ><i class="fab fa-facebook-f --social_popup"></i
          ></a>
          <a
            href="https://www.ixbt.com/news/2020/07/06/google-google-currents.html"
            target="_blank"
            class="portfolio_popup_content-item"
            ><i class="fab fa-google-plus-g --social_popup"></i
          ></a>
          <a
            href="https://twitter.com/?lang=ru"
            target="_blank"
            class="portfolio_popup_content-item"
            ><i class="fab fa-twitter --social_popup"></i
          ></a>
          <a
            href="https://www.linkedin.com/in/dmytro-severenchuk-4425511ba/"
            target="_blank"
            class="portfolio_popup_content-item"
            ><i class="fab fa-linkedin-in --social_popup"></i
          ></a>
          <a
            href="https://web.telegram.org/#/im"
            target="_blank"
            class="portfolio_popup_content-item"
            ><i class="fab fa-telegram-plane --social_popup"></i
          ></a>
          <a
            href="https://www.pinterest.com/"
            target="_blank"
            class="portfolio_popup_content-item"
            ><i class="fab fa-pinterest-p --social_popup"></i
          ></a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            class="portfolio_popup_content-item"
            ><i class="fab fa-instagram --social_popup"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closePopup() {
      this.$emit("closePopup");
    },
  },
  mounted() {
    let vm = this;
    let body = document.querySelector(body);
    document.addEventListener("click", function (item) {
      if (item.target === vm.$refs["portfolio_popup_wrapper"]) {
        vm.closePopup();
      }
    });
  },
};
</script>

<style lang='scss'>
</style>
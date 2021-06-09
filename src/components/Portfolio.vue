<template>
  <div class="portfolio_component">
    <PortfolioPopup 
    v-body-scroll-lock="isPopupVisible"
    v-if="isPopupVisible"
    @closePopup="closePopup"
    />
    <div class="portfolio_intro">
      <Header />
      <div class="container">
        <div class="portfolio_intro_inner">
          <div class="portfolio_intro_title">latest projects</div>
          <div class="portfolio_intro_subtitle">we deliver quality</div>
        </div>
      </div>
    </div>
    <div class="portfolio_nav">
      <div class="container">
        <div class="portfolio_nav_inner">
          <div class="portfolio_nav_box">
            <a href="#" class="portfolio_nav_box-item">
              <i class="fas fa-chevron-left --portfolio_left"></i>
              <span class="portfolio_nav_box-item-title">previous</span>
            </a>
            <a href="#" class="portfolio_nav_box-item">
              <span class="portfolio_nav_box-item-title">next</span>
              <i class="fas fa-chevron-right --portfolio_right"></i>
            </a>
          </div>
          <a href="#" class="portfolio_nav_box-item">
            <i class="fas fa-bars --portfolio_menu"></i>
            <span class="portfolio_nav_box-item-title">show all</span>
          </a>
        </div>
      </div>
    </div>
    <div class="portfolio">
      <div class="container">
        <div class="portfolio_inner">
          <div class="portfolio_main">
            <h1 class="portfolio_title">Pereira Creative Agency</h1>
            <div class="portfolio_subtitle">Branding Design</div>
            <div class="portfolio_box">
              <div class="portfolio_box_header">
                <div class="portfolio_box_header-date">February 28, 2015</div>
                <div class="portfolio_box_header-likes">
                  <i class="far fa-heart --like" id="like"></i>
                  <div class="portfolio_box_header-likes-text">324 likes</div>
                </div>
              </div>
              <p class="portfolio_box-text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit. Ut wisi enim ad
                minim veniam, quis nostrud exerci tation ullamcorper suscipit.
              </p>
              <div class="portfolio_box-bottom_title">role on project:</div>
              <div class="portfolio_box-bottom_text">
                Project Designer, Lead Designer, Markerting Head
              </div>
              <div class="portfolio_box-bottom_title">Tags:</div>
              <div class="portfolio_box-bottom_text">
                Mobile App, UI/UX design
              </div>
              <div class="portfolio_btn_wrapper" @click="showPopup">
                <button class="portfolio_btn">
                  <i class="fas fa-share-alt"></i>
                  <span class="portfolio_btn-title">share</span>
                </button>
              </div>
            </div>
          </div>
          <!--MAIN-->
          <section class="portfolio_grid">
            <div class="portfolio_item --first"></div>
            <div class="portfolio_item --second"></div>
            <div class="portfolio_item --third"></div>
            <div class="portfolio_item --fourth"></div>
            <div class="portfolio_item --fifth"></div>
          </section>
        </div>
        <!--inner-->
      </div>
    </div>
    <div class="works">
      <div class="container">
        <div class="works_inner">
          <div class="works_title">Related Works</div>
          <div class="works_subtitle">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </div>
          <div class="works_box">
            <img
              src="../assets/images/portfolio/works1.jpg"
              alt="chair"
              class="works_item"
            />
            <img
              src="../assets/images/portfolio/works2.jpg"
              alt="lamps"
              class="works_item"
            />
            <img
              src="../assets/images/portfolio/works3.jpg"
              alt="tables"
              class="works_item"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import PortfolioPopup from "./Portfolio-Popup/Portfolio-Popup";



export default {
  components: {
    Header,
    PortfolioPopup
  },
  data() {
    return {
      isPopupVisible: false
    };
  },
  methods: {
    showPopup(){
      this.isPopupVisible = true;
    },
    closePopup(){
      this.isPopupVisible = false;
    }
  },
};
</script>

<style lang="scss">

</style>
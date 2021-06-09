<template>
  <div class="about">
    <div class="about_intro">
      <Header />
      <div class="container">
        <div class="about_intro_inner">
          <h1 class="about_intro_title">About The Agency</h1>
          <div class="about_intro_subtitle">Welcome to Lian</div>
        </div>
      </div>
    </div>
    <div class="story">
      <div class="container">
        <div class="story_inner">
          <img
            src="../assets/images/about/story_picture.jpg"
            alt="picture"
            class="story_image"
          />
          <div class="story_main">
            <div class="story_main-title">Our Story</div>
            <p class="story_main-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit.
            </p>
            <p class="story_main-text">
              Nam liber tempor cum soluta nobis eleifend option congue nihil
              imperdiet doming id quod mazim placerat facer possim assum. Typi
              non habent claritatem insitam; est usus legentis in iis qui facit
              eorum claritatem.
            </p>
            <div class="story_main-title">our skills</div>
            <div class="story_skills">
              <div class="story_skills_item">
                <div class="story_skills_item-title">Photoshop</div>
                <div class="story_skills_item-bar --ps">
                  <div class="story_rectangle_wrapper">
                    <img
                      src="../assets/images/about/rectangle.png"
                      alt="rectangle"
                      class="story_skills_item-bar-rectangle --ps-rec"
                    />
                    <span class="story_skills_item-bar-percent --ps-per"
                      >90%</span
                    >
                  </div>
                </div>
              </div>
              <div class="story_skills_item">
                <div class="story_skills_item-title">Branding</div>
                <div class="story_skills_item-bar --br">
                  <img
                    src="../assets/images/about/rectangle.png"
                    alt="rectangle"
                    class="story_skills_item-bar-rectangle --br-rec"
                  />
                  <span class="story_skills_item-bar-percent --br-per"
                    >95%</span
                  >
                </div>
              </div>
              <div class="story_skills_item">
                <div class="story_skills_item-title">Photography</div>
                <div class="story_skills_item-bar --pgr">
                  <img
                    src="../assets/images/about/rectangle.png"
                    alt="rectangle"
                    class="story_skills_item-bar-rectangle --pgr-rec"
                  />
                  <span class="story_skills_item-bar-percent --pgr-per"
                    >50%</span
                  >
                </div>
              </div>
              <div class="story_skills_item">
                <div class="story_skills_item-title">Web Design</div>
                <div class="story_skills_item-bar --web">
                  <img
                    src="../assets/images/about/rectangle.png"
                    alt="rectangle"
                    class="story_skills_item-bar-rectangle --web-rec"
                  />
                  <span class="story_skills_item-bar-percent --web-per"
                    >85%</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="team">
      <div class="container">
        <div class="team_inner">
          <div class="team_title">Awesome Team</div>
          <div class="team_subtitle">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit.
          </div>
          <div class="team_box">
            <div class="team_item">
              <img
                src="../assets/images/about/team_pic1.jpg"
                alt=""
                class="team_item-picture"
              />
              <div class="team_item_wrapper">
                <div class="team_item-name">Lian Joy</div>
                <div class="team_item-post">CEO/Founder</div>
                <p class="team_item-text">
                  Lorem ipsum dolor sit amet, conse ctetuer adipi scing elit,
                  sed diam nonu mmy nibh euis mod tinci
                </p>
              </div>
            </div>
            <div class="team_item">
              <img
                src="../assets/images/about/team_pic2.jpg"
                alt=""
                class="team_item-picture"
              />
              <div class="team_item_wrapper">
                <div class="team_item-name">Albert Thanh</div>
                <div class="team_item-post">CEO/Founder</div>
                <p class="team_item-text">
                  Lorem ipsum dolor sit amet, conse ctetuer adipi scing elit,
                  sed diam nonu mmy nibh euis mod tinci
                </p>
              </div>
            </div>
            <div class="team_item">
              <img
                src="../assets/images/about/team_pic3.jpg"
                alt=""
                class="team_item-picture"
              />
              <div class="team_item_wrapper">
                <div class="team_item-name">Jenn Pereira</div>
                <div class="team_item-post">CEO/Founder</div>
                <p class="team_item-text">
                  Lorem ipsum dolor sit amet, conse ctetuer adipi scing elit,
                  sed diam nonu mmy nibh euis mod tinci
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
</style>
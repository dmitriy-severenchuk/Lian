<template>
  <div class="contact_component">
    <div class="contact_intro">
      <Header />
      <div class="container">
        <div class="contact_intro_inner">
          <h1 class="contact_intro_title">Get in touch</h1>
          <div class="contact_intro_subtitle">Contact us today</div>
        </div>
      </div>
    </div>
    <div class="contact">
      <div class="container">
        <div class="contact_inner">
          <div class="contact_main">
            <div class="contact_title">Office Info</div>
            <div class="contact_subtitle">
              People Behind the Success of our Company
            </div>
            <div class="contact_info_title">
              Office Hours:<span class="contact_info_text"
                >Mon-Friday 8am - 10pm</span
              >
            </div>
            <div class="contact_info_title">
              Address:<span class="contact_info_text"
                >Igbalangao, Bugasong, Antique</span
              >
            </div>
            <div class="contact_info_title --info-f">
              Tell:<span class="contact_info_number">123-456-7890</span>
            </div>
            <div class="contact_info_title --info-s">
              Fax:<span class="contact_info_number">123-456-7890</span>
            </div>
          </div>
          <div class="contact_form">
            <form method="POST" class="contact_form_inner">
              <div class="contact_form-head">
                <input
                  type="text"
                  class="contact_form-input_row"
                  name="name"
                  autocomplete="off"
                  placeholder="Name"
                  reguired
                />
                <input
                  type="text"
                  class="contact_form-input_row"
                  name="email"
                  autocomplete="off"
                  placeholder="Email"
                  reguired
                />
              </div>
              <textarea
                name="textarea"
                class="contact_form-textarea"
                rows="9"
                placeholder="Message"
              ></textarea>
            </form>
            <button class="contact_form-btn">SEND MESSAGE</button>
          </div>
        </div>
      </div>
    </div>
    <!--contact-->
    <div class="contact_strings">
      <div class="contact_strings-item"></div>
      <div class="contact_strings-item"></div>
      <div class="contact_strings-item"></div>
      <div class="contact_strings-item"></div>
      <div class="contact_strings-item"></div>
    </div>
    <div class="values">
      <div class="container">
        <div class="values_inner">
          <div class="values_title">Our Values</div>
          <div class="values_subtitle">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit.
          </div>
          <div class="values_box">
            <div class="values_item">
              <img
                src="../assets/images/contact/picture1.jpg"
                alt="man"
                class="values_item-picture"
              />
              <div class="values_item_wrapper">
                <div class="values_item-title">Who We Are</div>
                <div class="values_item-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam.
                </div>
              </div>
            </div>
            <div class="values_item">
              <img
                src="../assets/images/contact/picture2.jpg"
                alt="man"
                class="values_item-picture"
              />
              <div class="values_item_wrapper">
                <div class="values_item-title">Our Vision</div>
                <div class="values_item-text">
                  Typi non habent claritatem insitam; est usus legentis in iis
                  qui facit eorum claritatem. Investigationes demonstraverunt
                  lectores legere me.
                </div>
              </div>
            </div>
            <div class="values_item">
              <img
                src="../assets/images/contact/picture3.jpg"
                alt="man"
                class="values_item-picture"
              />
              <div class="values_item_wrapper">
                <div class="values_item-title">Our Mission</div>
                <div class="values_item-text">
                  Duis autem vel eum iriure dolor in hendrerit in vulputate
                  velit esse molestie consequat, vel illum dolore eu feugiat
                  nulla facilisis at vero eros et accumsan.
                </div>
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
<template>
  <div class="cta-container">
    <button class="cta bold" v-if="!isFormActive" @click="toggleForm()">Send Me Updates</button>

    <!-- MailChimp Signup Form -->
    <div id="mc_embed_signup" v-if="isFormActive">
      <form action="https://nobathroombreaks.us18.list-manage.com/subscribe/post?u=116b32a97bc4bd83a35b2ffcd&amp;id=e21fde9ee8" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
          <p class="form-title accent-primary bold">Subscribe to Mailing List</p>
          <p class="form-subtitle">All fields are required.</p>
          <div class="mc-field-group">
            <label for="mce-EMAIL">Email Address </label>
            <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" />
          </div>
          <div class="mc-field-group">
            <label for="mce-FNAME">First Name </label>
            <input type="text" value="" name="FNAME" class="required" id="mce-FNAME" />
          </div>
          <div class="mc-field-group">
            <label for="mce-LNAME">Last Name </label>
            <input type="text" value="" name="LNAME" class="required" id="mce-LNAME" />
          </div>
          <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display:none"></div>
            <div class="response" id="mce-success-response" style="display:none"></div>
          </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_116b32a97bc4bd83a35b2ffcd_e21fde9ee8" tabindex="-1" value="" /></div>
          <div class="clear button-row">
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button cta" @click="toggleForm()" />
            <button class="cta cancel" @click="toggleForm()" type="button">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFormActive: false
    }
  },
  methods: {
    toggleForm() {
      this.isFormActive = !this.isFormActive;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/vars";

.cta-container {
  text-align: center;
  margin-top: 2em;
  .cta {
    background-color: $color-theme-secondary;
    border: none;
    border-radius: 4px;
    box-shadow: 0 1px 4px 2px $color-light-gray, 0 1px 5px 1px $color-theme-secondary-light;
    color: $color-white;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    padding: 0.5em 1em;
    text-transform: uppercase;
    transition: all $transition-duration ease-out;
    &:hover {
      box-shadow: 0 2px 7px 3px $color-light-gray, 0 2px 8px 1px $color-theme-secondary-light;
      transform: translateY(-2px);
    }
  }

  #mc_embed_signup {
    margin: 0 auto;
    text-align: left;
    width: 100%;
    @media (min-width: $break-tablet) {
      width: 70%;
    }
    @media (min-width: $break-laptop) {
      width: 50%;
    }
    .mc-field-group {
      display: flex;
      align-items: center;
      margin-bottom: 0.5em;
      > * {
        flex: 0 0 40%;
      }
      input {
        border: 1px solid $color-white;
        border-radius: 4px;
        font-family: $font-default;
        padding: 0.5em;
        &:active, &:focus {
          border: 1px solid $color-theme-primary;
        }
      }
    }
    .button-row {
      display: flex;
      justify-content: flex-start;
      margin-top: 1em;
    }
    .form-title {
      margin-bottom: 0.25em;
    }
    .form-subtitle {
      margin-top: 0;
    }
    .cta {
      margin-right: 1em;
      padding: 0.25em 0.5em;
      text-transform: none;
      &.cancel {
        background-color: $color-dark-gray;
        box-shadow: 0 1px 4px 2px $color-light-gray;
        &:hover {
          box-shadow: 0 2px 7px 3px $color-light-gray;
        }
      }
    }
  }
}
</style>

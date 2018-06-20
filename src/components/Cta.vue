<template>
  <p class="cta-container">
    <button class="cta bold">Send Me Updates</button>
  </p>
</template>

<style lang="scss" scoped>
@import "../styles/vars";

.cta-container {
  margin-top: 3em;
  text-align: center;
  button.cta {
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
}
</style>

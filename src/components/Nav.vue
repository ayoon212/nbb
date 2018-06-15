<template>
  <div id="nav">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/">Media</router-link></li>
      <li><router-link to="/">Shows</router-link></li>
      <li><router-link to="/">Contact</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "../styles/vars";

#nav {
  position: absolute;
  right: $page-gutter*2;
  bottom: $page-gutter;

  ul {
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-size: 48px;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      padding: 5px 10px;
      a {
        color: $color-white;
        text-decoration: none;
        transition: color 0.25s ease-out;
        &:hover {
          cursor: pointer;
          color: $color-theme-primary;
        }
      }
    }
  }
}
</style>

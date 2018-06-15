<template>
  <div id="nav">
    <ul>
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Media</a></li>
      <li><a>Shows</a></li>
      <li><a>Contact</a></li>
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
    color: #fff;
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-size: 48px;
    list-style: none;
    margin: 0;
    padding: 0;

    a {
      text-decoration: none;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>

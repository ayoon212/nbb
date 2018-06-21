<template>
  <div class="record">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="rgba(91, 112, 110, 0.4)" />
      <circle cx="50" cy="50" r="1" fill="rgba(0,0,0, 0.4)" />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.record {
  display: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: initial;

  padding: 8% 1.5em;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  z-index: -1;

  > svg {
    width: 100%;
    max-height: 100%;
  }
}
</style>

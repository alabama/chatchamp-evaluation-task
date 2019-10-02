<template>
  <a class="chatchamp__bubble-btn" v-on="$listeners" v-bind="$attrs">
    <slot></slot>
  </a>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'ChatBubbleButton',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.chatchamp {
  &__bubble-btn {
    max-width: 60px;
    max-height: 60px;
    position: fixed;
    right: 18px;
    bottom: 18px;
    z-index: 1040;
    border-radius: 50%;
    padding: 10px 20px;
    width: 45px;
    height: 45px;
    cursor: pointer;
    transform-origin: center center;
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
    overflow: hidden;

    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
    &:hover {
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
    }
  }
}
</style>

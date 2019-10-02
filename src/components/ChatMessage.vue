<template>
  <div class="message" :class="{ my: pIsMyMessage }">
    <div>
      <div class="message__meta">
        <span class="message__meta-name">{{ pUsername }}</span> &nbsp;
        <span class="message__meta-time">{{ pDate }}</span>
      </div>
      <div class="message__content">
        {{ pMessageContent }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatMessage',
  props: {
    pDate: {
      type: String, // Would rather be a datetype, which can be checked with validators: https://vuejs.org/v2/guide/components-props.html#Prop-Validation
      required: true,
    },
    pUsername: {
      type: String,
      required: true,
    },
    pIsMyMessage: {
      type: Boolean,
      required: false,
      default: false,
    },
    pMessageContent: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
@import '../style/variables';

.message {
  display: flex;
  justify-content: flex-start;
  &.my {
    justify-content: flex-end;
  }

  &__meta {
    display: flex;
    margin-bottom: 15px;
    .my & {
      flex-direction: row-reverse;
    }
  }
  &__meta-time {
    color: lighten($gray, 8%);
    padding-left: 6px;
  }
  &__meta-name {
    font-weight: 500;
    padding: 0 7px;
  }

  &__content {
    color: white;
    padding: 18px 20px;
    line-height: 26px;
    font-size: 16px;
    border-radius: 7px;
    margin-bottom: 30px;
    max-width: 90%;
    position: relative;
    background: $blue;

    &:after {
      bottom: 100%;
      left: 10px;
      content: ' ';
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border: 10px solid transparent;
      border-bottom-color: $blue;
    }
    .my & {
      background: $green;
      &:after {
        border-bottom-color: $green;
        left: initial;
        right: 10px;
      }
    }
  }
}
</style>

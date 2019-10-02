<template>
  <div class="chat-panel__header">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" />

    <div class="chat-panel__about">
      <div class="chat-with">Chat with Admin</div>
      <div class="chat-num-messages">already 1 902 messages</div>
    </div>
    <a class="chat-panel__close" @click="$emit('close')"></a>
  </div>
</template>

<script>
export default {
  name: 'ChatHeader',
};
</script>

<style scoped lang="scss">
@import '../style/variables';

.chat-panel {
  &__header {
    display: flex;
    padding: 15px;
    border-bottom: 2px solid #fff;
  }
  &__about {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    margin-top: 6px;

    .chat-with {
      font-weight: bold;
      font-size: 16px;
    }

    .chat-num-messages {
      color: $gray;
    }
  }

  &__close {
    position: absolute;
    right: 15px;
    top: 15px;
    width: 20px;
    height: 20px;
    opacity: 0.3;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }

    &:before,
    &:after {
      position: absolute;
      left: 10px;
      content: ' ';
      height: 20px;
      width: 2px;
      background-color: $gray;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
}
</style>

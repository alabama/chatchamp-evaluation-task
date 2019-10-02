<template>
  <div class="chat-panel__container">
    <div class="chat-panel">
      <ChatHeader @close="$emit('close')"></ChatHeader>
      <ChatHistory></ChatHistory>
      <ChatInput></ChatInput>
    </div>
  </div>
</template>

<script>
import ChatHeader from './ChatHeader.vue';
import ChatHistory from './ChatHistory.vue';
import ChatInput from './ChatInput.vue';

export default {
  name: 'ChatPanel',
  components: { ChatHeader, ChatHistory, ChatInput },
};
</script>

<style scoped lang="scss">
@import '../style/variables';

*,
*:before,
*:after {
  box-sizing: border-box;
}

.chat-panel {
  width: 490px;
  background: #f2f5f8;
  color: #434651;
  border-radius: 5px;
  border: 1px solid rgba(#444753, 0.25);

  &__container {
    margin: 0 auto;
    position: fixed;
    right: 18px;
    bottom: 18px;
    z-index: 1040;
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
  }
}

.chat-panel {
  .chat-message {
    padding: 30px;

    textarea {
      width: 100%;
      border: none;
      padding: 10px 20px;
      font: 14px/22px 'Lato', Arial, sans-serif;
      margin-bottom: 10px;
      border-radius: 5px;
      resize: none;
    }

    .fa-file-o,
    .fa-file-image-o {
      font-size: 16px;
      color: gray;
      cursor: pointer;
    }

    button {
      color: $blue;
      font-size: 16px;
      text-transform: uppercase;
      border: none;
      cursor: pointer;
      font-weight: bold;
      background: #f2f5f8;

      &:hover {
        color: darken($blue, 7%);
      }
    }
  }
}
</style>

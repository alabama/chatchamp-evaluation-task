<template>
  <div id="chatchamp-wrapper">
    <ChatBubbleButton v-show="!isChatOpen" @click="handleChatToggle(true)">
      <img alt="Chatchamp Icon" src="./assets/chatchamp.png" />
    </ChatBubbleButton>
    <ChatPanel v-show="isChatOpen" @close="handleChatToggle(false)"></ChatPanel>
  </div>
</template>

<script>
import ChatPanel from './components/ChatPanel.vue';
import ChatBubbleButton from './components/ChatBubbleButton.vue';
import { EventBus, SUBMIT_MESSAGE_ADMIN } from './util/global-event-bus';

export default {
  name: 'app',
  components: {
    ChatBubbleButton,
    ChatPanel,
  },
  data() {
    return {
      isChatOpen: false,
    };
  },
  mounted() {
    EventBus.$on(SUBMIT_MESSAGE_ADMIN, this.openChat);
  },
  beforeDestroy() {
    EventBus.$off(SUBMIT_MESSAGE_ADMIN, this.openChat);
  },
  methods: {
    openChat() {
      if (!this.isChatOpen) {
        this.handleChatToggle(true);
      }
    },
    handleChatToggle(isOpen) {
      this.isChatOpen = isOpen;
    },
  },
};
</script>

<style lang="scss">
@import './style/helper';

#chatchamp-wrapper {
  font: 14px/20px 'Lato', Arial, sans-serif;
  z-index: 1000;
  position: fixed;
  right: 0;
  width: 0;

  overflow-y: auto;
  background-color: transparent;
  border-color: transparent;
  @include transition(all 0.5s ease);
}

img {
  max-width: 100%;
  height: auto;
}
</style>

<template>
  <div class="chat-panel__history" ref="chatPanelHistory">
    <ChatMessage
      v-for="chatHistoryEntry in cChatHistory"
      :key="
        Math.random()
          .toString(36)
          .substring(7)
      "
      :p-date="chatHistoryEntry.date"
      :p-is-my-message="chatHistoryEntry.myMessage"
      :p-username="chatHistoryEntry.username"
      :p-message-content="chatHistoryEntry.content"
    ></ChatMessage>
  </div>
</template>

<script>
import ChatMessage from './ChatMessage.vue';
import { EventBus, SUBMIT_MESSAGE_ADMIN, SUBMIT_MESSAGE_USER } from '../util/global-event-bus';

const dateNow = new Date();
const formatDate = function formatDate(date) {
  // with 'Today' it won't work properly if first time is 23:55 yesterday and next time is 00:01 today ... but it's just a demo :)
  return `${date.getHours()}:${date.getMinutes()}, Today`;
};
const chatHistoryData = [
  {
    date: formatDate(new Date(dateNow.setMinutes(dateNow.getMinutes() - 10))), // ... set returns a timestamp ... -> new Date :(
    myMessage: true,
    username: 'me',
    content: 'Hi Admin, how are you?',
  },
  {
    date: formatDate(new Date(dateNow.setMinutes(dateNow.getMinutes() - 6))),
    myMessage: false,
    username: 'admin',
    content: "I 'm fine, thanks! How are you?",
  },
  {
    date: formatDate(new Date(dateNow.setMinutes(dateNow.getMinutes() - 3))),
    myMessage: true,
    username: 'me',
    content: "I'll convert from a visitor to a lead now!!!",
  },
];

export default {
  name: 'ChatHistory',
  components: { ChatMessage },
  data() {
    return {
      chatHistory: chatHistoryData,
    };
  },
  computed: {
    cChatHistory() {
      // This would rather return data from the vuex store!
      return this.chatHistory;
    },
  },
  mounted() {
    EventBus.$on(SUBMIT_MESSAGE_ADMIN, this.addAdminMessage);
    EventBus.$on(SUBMIT_MESSAGE_USER, this.addUserMessage);
  },
  beforeDestroy() {
    EventBus.$off(SUBMIT_MESSAGE_ADMIN, this.addAdminMessage);
    EventBus.$off(SUBMIT_MESSAGE_USER, this.addUserMessage);
  },
  methods: {
    addAdminMessage(messageContent) {
      this.addMessage(new Date(), false, 'admin', messageContent);
    },
    addUserMessage(messageContent) {
      this.addMessage(new Date(), true, 'me', messageContent);
    },
    addMessage(date, myMessage, username, content) {
      this.chatHistory = [...this.chatHistory, { date: formatDate(date), myMessage, username, content }];
      this.$nextTick(() => {
        this.$refs.chatPanelHistory.scrollTop = this.$refs.chatPanelHistory.scrollHeight;
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import '../style/variables';

.chat-panel {
  &__history {
    padding: 30px 30px 20px;
    border-bottom: 2px solid white;
    overflow-y: scroll;
    height: 575px;
  }
}
</style>

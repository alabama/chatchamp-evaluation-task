/* This approach is only for the demo, you should rather use the vuex store */
import Vue from 'vue';

const EventBus = new Vue();
const SUBMIT_MESSAGE_ADMIN = 'submit-message-admin';
const SUBMIT_MESSAGE_USER = 'submit-message-user';

const chatchampBubble = {
  showMessage: function showMessage(messageContent) {
    EventBus.$emit(SUBMIT_MESSAGE_ADMIN, messageContent);
  },
};

(function attachGlobalShowMessage() {
  if (!window) {
    throw new Error('window does not exist');
  }
  window.chatchampBubble = chatchampBubble;
})();

export { EventBus, SUBMIT_MESSAGE_ADMIN, SUBMIT_MESSAGE_USER };

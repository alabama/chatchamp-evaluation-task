<template>
  <div class="chat-panel__input">
    <textarea v-model="value" placeholder="Type your message" rows="3" @keyup.enter="handleSubmit"></textarea>
    <div class="submit">
      <button @click="handleSubmit">Send</button>
    </div>
  </div>
</template>

<script>
import { EventBus, SUBMIT_MESSAGE_USER } from '../util/global-event-bus';

export default {
  name: 'ChatInput',
  data() {
    return {
      value: '',
    };
  },
  methods: {
    handleSubmit() {
      if (this.value && this.value.length > 0) {
        EventBus.$emit(SUBMIT_MESSAGE_USER, this.value);
        this.value = '';
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../style/variables';
@import '../style/helper';

.chat-panel {
  &__input {
    padding: 30px;

    textarea {
      width: 100%;
      border: none;
      padding: 10px 20px;
      font: 14px/22px 'Lato', Arial, sans-serif;
      margin-bottom: 10px;
      border-radius: 5px;
      resize: none;
      @include box-sizing(border-box);
    }

    .submit {
      display: flex;
      justify-content: flex-end;
    }

    button {
      color: $blue;
      font-size: 16px;
      text-transform: uppercase;
      border: none;
      cursor: pointer;
      font-weight: bold;
      background: transparent;
      padding: 10px;
      margin: -10px; // in combination with padding, there will be a bigger surface for click recognition

      &:active,
      &:focus {
        outline: none;
      }
      &:hover {
        color: darken($blue, 7%);
      }
    }
  }
}
</style>

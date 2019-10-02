import Vue from 'vue';
import App from './App.vue';
import createWrapper from './util/attach-to-body';
// eslint-disable-next-line no-unused-vars
import { EventBus } from './util/global-event-bus';

Vue.config.productionTip = false;
const wrapperElement = createWrapper();
new Vue({
  render: h => h(App),
}).$mount(wrapperElement);

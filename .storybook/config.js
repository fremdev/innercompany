import { configure } from '@storybook/vue';

import Vue from 'vue';

// Import your custom components.
import AppProfile from '../src/components/Profile.vue';

// Register custom components.
Vue.component('app-profile', AppProfile);

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories');
}

configure(loadStories, module);
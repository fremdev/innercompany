import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import AppProfile from '../components/Profile.vue';

const user = {
  name: 'Alexander Efremov',
  nickname: 'frem',
  position: 'JavaScript developer',
  link: 'https://www.youtube.com/channel/UCq7icE6jDzgp53GkPwZhTYg',
  photo: 'https://yt3.ggpht.com/-sDTMvM7DIDs/AAAAAAAAAAI/AAAAAAAAAAA/GIRd5Smj8v8/s88-c-k-no-mo-rj-c0xffffff/photo.jpg',
}

storiesOf('AppProfile', module)
  .add('story as a template', () => ({
    data() {
      return {
        user
      }
    },
    template: `<app-profile :user="user"></app-profile>`
  }))
  .add('story as a component', () => ({
    components: { AppProfile },
    data() {
      return {
        user
      }
    },
    template: `<app-profile :user="user"></app-profile>`
  }));
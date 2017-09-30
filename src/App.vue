<template>
  <div id="app">

    <!-- Don't do this in production - just for demo -->
    <div class="nav">
      <button type="button"
        @click="currentPage='news'"
        :class="{active: currentPage === 'news'}">News
      </button>
      <button type="button"
        @click="currentPage='users'"
        :class="{active: currentPage === 'users'}">Users
      </button>
      <button type="button"
        @click="currentPage='about'"
        :class="{active: currentPage === 'about'}">About
      </button>
    </div>

    <news v-if="currentPage === 'news'" />
    <users v-else-if="currentPage === 'users'" />
    <about v-else-if="currentPage === 'about'" />
  </div>
</template>

<script>
import News from '@/components/News';
import Users from '@/components/Users';
import About from '@/components/About';

export default {
  name: 'app',

  components: {
    News,
    Users,
    About,
  },

  data() {
    return {
      currentPage: 'news',
    };
  },
};
</script>

<style scoped>
  .active {
    background-color: #55c;
    color: #fff;
  }
</style>

<template>
  <div class="users">
    <div v-if="!users.length">There are no users :(</div>
    <profile v-if="users.length" :user='users[currentUser]' />
    <users-controls
      class="users-controls"
      :currentUser="currentUser"
      :total="users.length"
      @prevUser="currentUser-=1"
      @nextUser="currentUser+=1"
      @load="loadUsers"
      @unload="unloadUsers" />
  </div>
</template>

<script>
import Profile from '@/components/Profile';
import UsersControls from '@/components/UsersControls';
import users from '@/data/users';

export default {
  name: 'users',

  components: {
    Profile,
    UsersControls,
  },

  data() {
    return {
      users,
      currentUser: 0,
    };
  },

  methods: {
    loadUsers() {
      this.users = users;
    },

    unloadUsers() {
      this.users = [];
    },
  },
};
</script>

<style scoped>
.users {
  background-color: #fafafa;
  text-align: center;
  padding: 30px 0;
}
.users-controls {
  margin-top: 20px;
}
</style>

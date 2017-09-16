<template>
  <div class="users">
    <profile :user='users[currentUser]' />
    <users-controls
      class="users-controls"
      :currentUser="currentUser"
      :total="users.length"
      @prevUser="currentUser-=1"
      @nextUser="currentUser+=1"/>
  </div>
</template>

<script>
import Profile from './Profile';
import UsersControls from './UsersControls';
import users from '../data/users';

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

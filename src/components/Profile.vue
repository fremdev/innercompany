<template>
  <div class="profile">
    <img class="profile__photo" :src="user.photo">
    <div class="profile__info">
      <div class="nickname">
        <a :href="user.link" target="_blank">@{{ user.nickname }}</a>
      </div>
      <div>{{ user.name }}</div>
      <div>{{ user.position }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile',

  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.profile {
  max-width: 290px;
  display: flex;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}

.profile__photo {
  margin-right: 20px;
  width: 88px;
  height: 88px;
}

.profile__info {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.nickname {
  font-size: 20px;
}
</style>

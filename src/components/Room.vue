<template>
  <div class="room">
    <h4>{{ title }}</h4>
    <div :class="{ indicator: true, active: isLight}"></div>
  </div>
</template>

<script>
export default {
  name: 'rooms',
  props: {
    isLight: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
  .room {
    width: 100px;
    text-align: center;
  }

  .indicator {
    height: 20px;
    width: 20px;
    background-color: #ccc;
    border-radius: 50%;
    margin: 0 auto;
  }

  .active {
    background-color: #f9e814;
  }
</style>

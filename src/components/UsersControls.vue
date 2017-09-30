<template>
  <div class="users-controls">
    <button
      class="btn-control"
      @click="$emit('prevUser')"
      :disabled="currentUser === 0"
      >Prev
    </button>
    <button
      class="btn-control"
      @click="$emit('nextUser')"
      :disabled="currentUser === (total - 1)"
      >Next
    </button>
    <button
      class="btn-control"
      @click="$emit('load')"
      >Load
    </button>
    <button
      class="btn-control"
      @click="$emit('unload')"
      >Unload
    </button>
  </div>
</template>

<script>
export default {
  name: 'users-controls',

  props: {
    currentUser: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      require: true,
    },
  },
};
</script>

<style scoped>
.btn-control {
  width: 80px;
  padding: 10px;
  border: 1px solid #558;
  border-radius: 5px;
  background-color: #fff;
  color: #558;
  transition: background-color 0.5s;
}

.btn-control:hover, .btn-control:focus, .btn-control:active {
  background-color: #558;
  color: #fff;
}

.btn-control:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>

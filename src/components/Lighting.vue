<template>
  <div class="lighting">
    <div class="controls">
      <label>
        <input type="checkbox" v-model="entry">
        Вход
      </label>
      <label>
        <input type="checkbox" v-model="livingRoom">
        Гостиная
      </label>
      <label>
        <input type="checkbox" v-model="bedroom">
        Спальня
      </label>
      <label>
        <input type="checkbox" v-model="kitchen">
        Кухня
      </label>
    </div>

    <div class="rooms">
      <room title="Гостиная" :isLight="entry && livingRoom" />
      <room title="Спальня" :isLight="entry && bedroom" />
      <room title="Кухня" :isLight="entry && kitchen" />
    </div>
  </div>
</template>

<script>
import Room from '@/components/Room';

export default {
  name: 'lighting',

  components: {
    Room,
  },

  data() {
    return {
      livingRoom: false,
      bedroom: false,
      kitchen: false,
      entry: true,
    };
  },
};
</script>

<style scoped>
.lighting {
  background-color: #fafafa;
  padding: 20px;
}

.controls {
  display: flex;
  justify-content: center;
}

.rooms {
  display: flex;
  justify-content: center;
}

label {
  display: block;
  margin: 0 5px;
}
</style>

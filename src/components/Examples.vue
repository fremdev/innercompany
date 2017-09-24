<template>
  <div class="examples">
    <h3>Пример 1 - Освещение</h3>
    <lighting />
    <h3>Пример 2 - Пользователи</h3>
    <users />
  </div>
</template>

<script>
import Users from '@/components/Users';
import Lighting from '@/components/Lighting';

export default {
  name: 'examples',
  components: {
    Users,
    Lighting,
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
}
</style>

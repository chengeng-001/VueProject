<template>
  <div>
    navbar --- <button @click="handClick">123</button>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  setup (props, { emit }) {
    console.log(emit);

    const handClick = () => {
      emit('kerwinenevt')
    }

    return {
      handClick
    }
  }
}
</script>

<style scoped>

</style>

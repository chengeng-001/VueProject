<template>
  <div>
    childhooks --- {{mytitle}} -- {{mytext}}
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: ['mytitle'],
  setup (props) {
    console.log(props.mytitle + 'dasdasd')
    const mytext = ref(props.mytitle + 'dasdasd')

    return {
      mytext
    }
  }
}
</script>

<style scoped>

</style>

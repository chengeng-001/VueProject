<template>
  <div>
    {{ names }} --- {{ age }}
    <button @click="handChange">change</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: '04_ref',
  setup () {
    // 可以使用ref 传输数据
    const names = ref('kerwin')
    const age = ref(100)

    const handChange = () => {
      names.value = 'xiaoming'
      age.value = 20
    }

    return {
      names,
      age,
      handChange
    }
  }
}
</script>

<style scoped>

</style>

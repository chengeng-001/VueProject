<template>
  <div>
    computed --- {{ myname }} --- {{ computedname }}
    <button @click="handleChange">按钮</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: '02_conmputed',
  setup () {
    const myname = ref('xiaoming')
    const computedname = computed(() => myname.value.substr(0, 1).toUpperCase() +
      myname.value.substr(1).toLowerCase())

    const handleChange = () => {
      myname.value = 'kerwin'
    }
    return {
      myname,
      computedname,
      handleChange
    }
  }
}
</script>

<style scoped>

</style>

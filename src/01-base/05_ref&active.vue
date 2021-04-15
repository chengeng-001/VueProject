<template>
  <div>
    <button @click="handClick">-</button>
    {{ count }}
    <button @click="handreduce">+</button>
  </div>
  <Child></Child>
</template>

<script>
import { useCount } from '@/01-base/05_ref&active/useCount'
import Child from '@/01-base/05_ref&active/Child'

export default {
  name: '05_ref&active',
  components: {
    Child
  },
  setup () {
    const { count, handClick, handreduce } = useCount()

    return {
      count,
      handreduce,
      handClick
    }
  }
}
</script>

<style scoped>

</style>

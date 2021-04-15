<template>
  <div>
    123 ---- {{ count }}
  </div>
</template>

<script>
import { useCount } from '@/01-base/05_ref&active/useCount'

export default {
  name: 'Child',
  setup () {
    // 子组件的内容不会受到父组件的影响
    const { count } = useCount()
    return {
      count
    }
  }
}
</script>

<style scoped>

</style>

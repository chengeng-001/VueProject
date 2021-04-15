<template>
  <div>
    {{ myname }} --- {{ myzge }}
    <button @click="handChange">change</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import { useCount } from '@/01-base/05_ref&active/useCount'

export default {
  setup () {
    const { count } = useCount()

    // 可以使用ref 传输数据
    const state = reactive({
      myname: 'kerwin',
      myzge: 18,
      count
    })

    const handChange = () => {
      state.myname = 'xiaoming'
      state.myage = 20
    }

    return {
      // reactive转换ref 对象 可以直接使用对象名称数据
      ...toRefs(state),
      handChange
    }
  }
}
</script>

<style scoped>

</style>

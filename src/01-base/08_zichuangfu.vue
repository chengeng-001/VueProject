<template>
  <div>
    <navbar @kerwinenevt="handleChange"/>
<!--    <button @click="state.isShow = !state.isShow">parent-&#45;&#45;click</button>-->
    <sidebar v-if="state.isShow"/>
  </div>

</template>

<script>
import { reactive } from 'vue'
import navbar from '@/01-base/08_zichuangfu/navbar'
import sidebar from '@/01-base/08_zichuangfu/sidebar'

export default {
  // 中文
  name: 'zichuangfu',
  components: {
    navbar,
    sidebar
  },
  setup () {
    const state = reactive({
      isShow: false
    })

    const handleChange = () => {
      state.isShow = !state.isShow
    }

    return {
      state,
      handleChange
    }
  }
}
</script>

<style scoped>
 
</style>

<template>
  <div>
    {{ vue01 }}
    <div>
      {{ state.myname }} --- {{ state.myage }}
      <br>
      <button @click="bindClick">change</button>
    </div>
  </div>
  <!--  vue3 可以存在多个div-->
  <div>
    {{ state.Myage }}
  </div>
  <div>
    div3
  </div>
  <div>
    div4
  </div>
</template>

<script>
// 响应式对象
import { reactive } from 'vue'

export default {
  name: '01_base.vue',
  data () {
    return {
      vue01: 'test'
    }
  },
  // 更新 beforeCreate  && create  === setup
  setup () {
    // 不能像以前一样拿到vue 实例对象
    // console.log("dsada",this.vue01);

    const state = reactive({
      myname: 'kerwin',
      myage: 100
    })

    // 禁止使用该方式
    const Myage = reactive(18)
    // 能直接不用通过methods 导出方法进行使用
    const bindClick = () => {
      state.myage = 20
    }

    return {
      state,
      bindClick,
      Myage
    }
  }
}
</script>

<style scoped>

</style>

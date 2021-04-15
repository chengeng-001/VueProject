<template>
  <div>
    4564 {{myname}}
    <button @click="handClick">点击</button>
  </div>

</template>

<script>
import { onMounted, onBeforeMount, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured, ref } from 'vue'

export default {
  name: '01_lifycycle',
  setup () {
    console.log('1111')

    const myname = ref('kerwin')
    const handClick = () => {
      myname.value = 'xiaoming'
    }

    // 挂载之前
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })

    // 挂载
    onMounted(() => {
      console.log('onMounted')
    })

    // 更新之前
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })

    // 更新
    onUpdated(() => {
      console.log('onUpdated')
    })

    // 销毁之前
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })

    // 销毁
    onUnmounted(() => {
      console.log('onUnmounted')
    })

    // 错误处理
    onErrorCaptured((err, vm, info) => {
      console.log(err, vm, info)
    })

    return {
      myname,
      handClick
    }
  }

}
</script>

<style scoped>

</style>

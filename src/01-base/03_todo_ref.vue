<template>
  <div>
    <input ref="mytext" /> {{ state.mytext }}
    <button @click="handadd">add</button>
  </div>
  <div>
    <ul>
      <li v-for="(data,index) in state.datalist" :key="index">
        {{ data }} --
        <button @click="deletebtn(index)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  setup () {
    const state = reactive({
      mytext: '',
      datalist: ['111', '222', '333']
    })

    const mytext = ref('')
    // 有完全替代 methods 的操作
    const handadd = () => {
      // 拿到value 对象  在从对象中拿到内容
      console.log(mytext.value.value)
    }
    const deletebtn = (del_index) => {
      state.datalist.splice(del_index, 1)
    }

    return {
      state,
      handadd,
      deletebtn,
      mytext
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  outline: none;
}
</style>

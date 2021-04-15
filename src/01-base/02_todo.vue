<template>
  <div>
    <input type="text" ref="aaa"><br>
    <input v-model="state.mytext"/> {{ state.mytext }}
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
import { reactive } from 'vue'

export default {
  name: '02_todo',
  setup () {
    const state = reactive({
      mytext: '',
      datalist: ['111', '222', '333']
    })

    // 有完全替代 methods 的操作
    const handadd = () => {
      console.log(state.mytext)
      state.datalist.push(state.mytext)
      state.mytext = ''
    }
    const deletebtn = (del_index) => {
      state.datalist.splice(del_index, 1)
    }

    return {
      state,
      handadd,
      deletebtn
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  outline: none;
}
</style>

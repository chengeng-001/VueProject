<template>
  <div>
    <input type="text" v-model="mytext" >
    {{ state.myname }}
  </div>
  <ul>
    <li v-for="data in list" :key="data">
      {{ data }}
    </li>
  </ul>
</template>

<script>
import { onMounted, ref, computed, watch, reactive } from 'vue'

export default {
  setup() {
    const mytext = ref('');
    const list = ref([]);
    var cacheList = [];

    const state = reactive({
      myname: 'kerwin'
    });

    //vue3监听函数
    watch(mytext, () => {
      // console.log(mytext.value);
      state.myname = 'xiaoming';
      //只是做到页面上删除数据 但是无法对数据进行更改
      list.value = cacheList.filter(item => item.includes(mytext.value));

    });

    //reactive 函数监听方式必须按照该方式来执行
    watch(() => state.myname, () => {
      console.log('myname');
    });


    //异步方式不能接收const 定义的内容
    onMounted(() => {
      fetch("/test.json").then(res => res.json()).then(res => {
        list.value = res.list;
        cacheList = res.list;
      });
    });

    return {
      mytext,
      list,
      cacheList,
      state
    }
  }
}
</script>

<style scoped>

</style>

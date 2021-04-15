<template>
  <div>
    <input type="text" v-model="mytext">
  </div>
  <ul>
    <li v-for="data in computedtext" :key="data">
      {{data}}
    </li>
  </ul>
</template>

<script>
import  { onMounted,ref,computed } from 'vue'

export default {
  name: "03_chaxun",
  setup() {
    const mytext = ref('');
    const list = ref([]);

    //利用计算属性做到模糊查询
    //每次计算属性中的值改变计算属性就会启动
    const computedtext = computed(() => {
      let listnew = list.value.filter(item => item.includes(mytext.value));
      return listnew
    });

    onMounted(() => {
      fetch("/test.json").then(res => res.json()).
      then(res => {
        list.value = res.list;
      });
    });

    return {
      mytext,
      list,
      computedtext
    }
  }
}
</script>

<style scoped>

</style>

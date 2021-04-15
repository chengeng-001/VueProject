<template>
  <div>
    <ul>
      <li v-for="(data,index) in state.list" :key="index">
        {{ data.name }} <br>
        <img :src="data.poster" alt="" @click="handClick(index)">
      </li>
    </ul>
  </div>
</template>

<script>
import {onMounted, reactive ,getCurrentInstance } from 'vue'
import {useRouter} from  'vue-router'
import axios from 'axios'

export default {
  name: "Film",
  setup() {
    const state = reactive({
      list: []
    });

    const router = useRouter();

    onMounted(() => {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=220600&pageNum=1&pageSize=10&type=1&k=7098295',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1610259080523642412728321","bc":"220600"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        console.log(res.data);
        state.list = res.data.data.films;
      })
    });

    const { ctx } = getCurrentInstance();
    const  handClick = (id) =>{
      console.log(ctx);

      // ctx.$router.push(`/cinema/${id}`);

      router.push(`/cinema/${id}`);
    }


    return {
      state,
      handClick
    }
  }
}
</script>

<style lang="scss" scoped>
  ul {
    li {
      height: 400px;
    }
  }
</style>

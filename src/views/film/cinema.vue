<template>
  <div>
    cinema
  </div>
</template>

<script>
import {useRoute} from  'vue-router'
import {onMounted,onUnmounted}  from 'vue'
import {useStore} from 'vuex'
export default {
  name: "cinema",
  setup() {
    const route = useRoute();
    const store = useStore()
    onMounted(() => {
      console.log(route.params);
      //该内容必须要解构才能使用
      const {id} = route.params;
      console.log(id);

      store.commit('hide');
    });

    onUnmounted(() =>{
      store.commit('show');
    });
  }
}
</script>

<style scoped>

</style>

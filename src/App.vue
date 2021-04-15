<template>
  <div id="nav" v-show="$store.state.isShow">
<!--    1 ----- -->
<!--    hello vue3 <br>-->
<!--    {{ myName }}-->
<!--    <button @click="handleClick">按下</button>-->

    <!--    2    -->
    <ul>
      <router-link to="/film" >film</router-link>
      <router-link to="/center" >center</router-link>
      <router-link to="/cinema" >cinema</router-link>
    </ul>

  </div>
  <router-view/>
</template>

<script>
export default {
  // data () {
  //   return {
  //     myName: 'zhangsan'
  //   }
  // },
  // methods: {
  //   handleClick () {
  //     this.myName = '小明'
  //   }
  // }

  // 2


}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

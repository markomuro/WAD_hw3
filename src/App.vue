<template>
  <div id="app">
    <headercompo/>
    <!-- <div id="nav">
      <router-link to="/main">Main</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contactus">Contact</router-link>
    </div> -->
    <!-- <router-view /> -->
    <footercompo/>
  </div>
</template>

<script>
import headercompo from "@/components/Header.vue";
import footercompo from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    headercompo,
    footercompo
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display:flex;
  flex-direction:column;
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

#footer {
  padding: 15px;
  position:fixed;
  bottom: 0;
  align-self: center;


  background-color: rgb(232, 240, 240);

  a {
    font-weight: bold;
    color: #2c3e50;

  }
}
</style>

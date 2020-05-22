<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Start</router-link> |
      <router-link to="/pageTwo">Framework</router-link> |
      <router-link to="/pageThree">Pros</router-link> |
      <router-link to="/pageFour">Cons</router-link> |
      <router-link to="/pageFive">Design Considerations</router-link> |
      <router-link to="/pageSix">Challenges</router-link> |
      <router-link to="/pageSeven">Thank You</router-link>
    </div>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  mounted() {
    window.addEventListener("keypress", e => {
      console.log(String.fromCharCode(e.keyCode));
    });
  }
};
</script>

<style>
html {
  background-color: #efecec;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

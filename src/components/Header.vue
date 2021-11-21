<template>
  <div id="nav">
    <router-link to="/main">Main</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contactus">Contact</router-link>

    <nav>
      <div class="post-it">
        <img
          src="../assets/note.jpg"
          alt="some logo"
          style="width: 50px; height: 50px"
        />
      </div>

      <div class="search-container">
        <input type="text" /><button>Search</button>
      </div>
      <div class="clearlikes">
        <button v-on:click="ResetLikes">Clear <br> all <br>likes</button>
      </div>

      <div class="dropdown">
        <img
          class="dropbtn"
          src="../assets/picture2.png"
          alt="some logo"
          style="width: 50px; height: 50px"
        />
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "headercompo",
  methods: {
  ResetLikes() {
    this.$store.dispatch("ResetLikesAct")
}}};
</script>

<style scoped>
#navigation {
  position: sticky;
  top: 0;
  z-index: 100;
}

nav {
  display: flex;
}
nav div {
  height: 40px;
  padding: 15px;
}

.post-it img {
  height: 100%;
  size: 50px;
}

nav div.search-container {
  display: flex;
  flex-grow: 1;
  justify-content: center;
}

nav div.search-container > input {
  box-sizing: border-box;
  border-radius: 5px;
  height: 35px;
  width: 39%;
  margin: 0;
  padding: 2px;
  border: 1px solid #e0e0e0;
}

nav div.search-container > button {
  box-sizing: border-box;
  border-radius: 5px;
  height: 35px;
  width: 6%;
  margin: 0;
  padding: 5px;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  background-color: #42b983;
  color: white;
  font-weight: bolder;
}

nav div.search-container > input:hover {
  box-shadow: -0.03em 0 0.3em olive;
}

.dropdown {
  position: relative;
}
.dropbtn {
  border: none;
}
.clearlikes button {
  box-sizing: border-box;
  border-radius: 5px;
  height: 55px;
  width: 130%;
  margin: 0;
  padding: 5px;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  background-color: #42b983;
  color: white;
  font-weight: bolder;
}
</style>

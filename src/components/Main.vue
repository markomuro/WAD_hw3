<template>
  <div class="main">
    <nav>
      <div class="post-it">
        <img src="../assets/picture1.jpg" alt="some logo" />
      </div>

      <div class="search-container">
        <input type="text" /><button>Search</button>
      </div>

      <div class="dropdown">
        <img
          class="dropbtn"
          onclick="myFunction('myDropdown')"
          src="../assets/picture2.png"
          alt="some logo"
          style="width: 50px; height: 50px"
        />
      </div>
    </nav>
    <section class="general">
      <div class="leftside"></div>

      <div class="center">
        <postcompo></postcompo>
      </div>

      <div class="rightside"></div>
    </section>
  </div>
</template>


<script>
import postcompo from "@/components/Post.vue";

export default {
  name: "maincompo",
  components: { postcompo },
};
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

nav div img {
  height: 100%;
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
  background-color: #4157d3;
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
  cursor: pointer;
  border: none;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0px;
  padding: 5px;
  background-color: white;
  min-width: 160px;
  z-index: 1;
  font-size: 12px;
}

.dropdown-content p {
  color: black;
  text-decoration: none;
  display: block;
}

.general {
  display: flex;
}

.leftside {
  background-color: royalblue;
  width: 20%;
  height: auto;
}
.rightside {
  width: 20%;
  height: auto;
  background-color: royalblue;
}
.center {
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
 

<template>
  <div class="main">
    <div class="center">
      <postcompo></postcompo>
    </div>
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
.center {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
 

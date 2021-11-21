<template>
  <div class="center">
    <postcompo
      v-for="apost in posts"
      :key="apost.id"
      :body="apost.body"
      :author="apost.author"
      :image1="apost.image1"
      :image2="apost.image2"
      :time="apost.create_time"
      :counter="apost.counter"
      v-on:inc_counter="apost.counter++"
    >
    </postcompo>
  </div>
</template>

<script>
import postcompo from "@/components/Post.vue";

export default {
  name: "Post_info",
  components: { postcompo },

  computed: {
    posts() {
      return this.$store.state.posts;
    },

  },
  methods: {

  }
  
};
</script>
  <style scoped>
.center {
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
}
</style>


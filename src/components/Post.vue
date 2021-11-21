<template>
  <div class="post">
    <!--     <div
      v-for="apost in posts"
      :key="apost.id"
      :body="apost.body"
      :author="apost.author"
      :image1="apost.image1"
      :image2="apost.image2"
      :time="apost.create_time"
    > -->
    <section class="posts">
      <div class="facelogo">
        <p>{{ author }}</p>
        <p>{{ time }}</p>
      </div>
      <div class="content_picture"><img :src="image1" /></div>
      <div>
        <p>{{ body }}</p>
      </div>
      <div class="like">
        <img @click="counter++" :src="image2" />
        <p>{{ counter }}</p>
      </div>
    </section>
    <br />
  </div>
  <!-- </div> -->
</template>

<script>
// import { mapGetters, mapActions } from "vuex";

export default {
  name: "postcompo",
  /* data: function () {
    return {};
  }, */
  props: ["body", "author", "image1", "image2", "time", "counter"],
  /*methods: {
    countLikes() {
      this.counter++;
    },
  },
  
    ...mapActions(["fetchPosts"]),

  },
  computed: mapGetters(["posts"]),
  created() {
    this.fetchPosts();
  }, */
  /*computed: {
    posts(){
    return this.$store.state.posts
    }
  }
  */
};
</script>

<style scoped>
.post {
  padding-top: 50px;
  padding-bottom: 50px;
  width: 60%;
  justify-content: center;
  border-radius: 10px;
  margin: 20px;
}
.post div > p {
  margin-right: 5px;
  color: dimgrey;
  margin-left: 5px;
  font-size: large;
}

.facelogo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.facelogo img {
  height: 50px;
  margin-left: 5px;
}

.like {
  display: flex;
  justify-content: start;
  align-items: center;
}

.like img {
  height: 35px;
  margin-left: 5px;
  cursor: pointer;
}

.center section {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
}

.content_picture img {
  width: 100%;
}

div.content_picture + div p {
  color: black;
  font-size: large;
  font-style: italic;
}
</style>


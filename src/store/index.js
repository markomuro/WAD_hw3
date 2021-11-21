// https://www.youtube.com/watch?v=5lVQgZzLMHc&ab_channel=TraversyMedia

import Vue from "vue";
import Vuex from "vuex";
//import axios from 'axios';



Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    contactlist: [
      { id: 1, name: "Marko", email: "marko.muro@ut.ee", tel: "123456789", address: "Tartu" },
      { id: 2, name: "Aleksandra", email: "aleksandra.doroshenko@ut.ee", tel: "555-01234", address: "Tartu" },
      { id: 3, name: "Uku", email: "uku.zingel@ut.ee", tel: "123456789", address: "Tartu" }
    ],
    posts: [
      { id: 1, body: "If we cannot end now our differences, at least we can help make the world safe for diversity.", author: "John F. Kennedy", image1: "https://picsum.photos/1024/768", image2: "https://image.similarpng.com/very-thumbnail/2020/06/Like-button-blue-facebook-transparent-PNG.png", create_time: "Sep 19, 2021 13:56", counter: 0 },
      { id: 2, body: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.", author: "Antoine de Saint-Exupery", image1: "https://picsum.photos/1023/768", image2: "https://image.similarpng.com/very-thumbnail/2020/06/Like-button-blue-facebook-transparent-PNG.png", create_time: "Sep 20, 2021 13:01", counter: 0 },
      { id: 3, body: "Common sense is the collection of prejudices acquired by age eighteen.", author: "Albert Einstein", image1: "https://picsum.photos/1022/768", image2: "https://image.similarpng.com/very-thumbnail/2020/06/Like-button-blue-facebook-transparent-PNG.png", create_time: "Aug 20, 2021 15:01", counter: 0 },
      { id: 4, body: "Water, taken in moderation, cannot hurt anybody.", author: "Mark Twain", image1: "https://picsum.photos/1021/768", image2: "https://image.similarpng.com/very-thumbnail/2020/06/Like-button-blue-facebook-transparent-PNG.png", create_time: "Aug 12, 2021 11:23", counter: 0 },
      { id: 5, body: "What happens when the future has come and gone?", author: "Robert Half", image1: "https://picsum.photos/1024/767", image2: "https://image.similarpng.com/very-thumbnail/2020/06/Like-button-blue-facebook-transparent-PNG.png", create_time: "May 04, 2021 19:23", counter: 0 },
      { id: 6, body: "I have only one superstition. I touch all the bases when I hit a home run.", author: "Babe Ruth", image1: "https://picsum.photos/1024/766", image2: "https://image.similarpng.com/very-thumbnail/2020/06/Like-button-blue-facebook-transparent-PNG.png", create_time: "May 23, 2021 07:23", counter: 0 },
      { id: 7, body: "Make a decision, even if it's wrong.", author: "Jarvis Klem", image1: "https://picsum.photos/1024/769", image2: "https://image.similarpng.com/very-thumbnail/2020/06/Like-button-blue-facebook-transparent-PNG.png", create_time: "Oct 12, 2021 04:21", counter: 0 },
      { id: 8, body: "If you do not tell the truth about yourself you cannot tell it about other people.", author: "Virginia Woolf", image1: "https://picsum.photos/1024/765", image2: "https://image.similarpng.com/very-thumbnail/2020/06/Like-button-blue-facebook-transparent-PNG.png", create_time: "Oct 01, 2021 02:21", counter: 0 },
      { id: 9, body: "They can conquer who believe they can.", author: "Virgil", image1: "https://picsum.photos/1023/769", image2: "https://image.similarpng.com/very-thumbnail/2020/06/Like-button-blue-facebook-transparent-PNG.png", create_time: "Oct 29, 2021 11:17", counter: 0 },
      { id: 10, body: "The art of living easily as to money is to pitch your scale of living one degree below your means.", autho: "Sir Henry Taylor", image1: "https://picsum.photos/1023/767", image2: "https://image.similarpng.com/very-thumbnail/2020/06/Like-button-blue-facebook-transparent-PNG.png", create_time: "Jul 05, 2021 23:44", counter: 0 }

    ]
  },

  /*  actions: {
     async fetchPosts({ commit }) {
 
       const response = await axios.get('https://api.npoint.io/a63a2287e67bcbc5b7f0');
       // JSON responses are automatically parsed.
       commit('setPosts', response.data)
       console.log(response.data);
     },
 
 
   },
   mutations: {
     setPosts(state, posts) {
       state.posts = posts
     },
 
   },
   getters: {
     posts: state => {
       return state.posts;
     }
   } */
   actions:{
     ResetLikesAct: act => {
      setTimeout(function() {
        act.commit("ResetLikes")
        }, 1000)
        }
  },
  mutations:{
    ResetLikes: state => {
      state.posts.forEach(post => {
      post.counter -= 1;
      post.counter += 1;
      })
      }   
      }
});

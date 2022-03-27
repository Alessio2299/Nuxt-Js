import Vue from "vue";

import PostList from "@/components/PostList.vue"

import CreatePost from "@/components/NewPost/CreatePost.vue"

import PostPreview from "@/components/PostPreview.vue"

import NavSide from "@/components/Nav/NavSide.vue"


Vue.component('PostList', PostList);
Vue.component('CreatePost', CreatePost);
Vue.component('PostPreview', PostPreview);
Vue.component('NavSide', NavSide);



<template>
  <div class="post">
    <h1>post</h1>
      <nuxt-link to="/post/1">Post 1</nuxt-link>
      <nuxt-link to="/post/2">Post 2</nuxt-link>
      <nuxt-link to="/post/3">Post 3</nuxt-link>
    <div>
      <b-card-group class="container w-75" columns>
        <b-card
          title="Card title that wraps to a new line"
          img-src="https://placekitten.com/g/400/450"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text>
          <template #footer>
            <small class="text-muted">Footer Text</small>
            <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
          </template>
        </b-card>

        <b-card header="Quote">
          <blockquote class="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          </blockquote>
          <template #footer>
            <small class="text-muted">Footer Text</small>
          </template>
        </b-card>

        <b-card title="Title" img-src="https://placekitten.com/500/350" img-alt="Image" img-top>
          <b-card-text>
            This card has supporting text below as a natural lead-in to additional content.
          </b-card-text>
          <template #footer>
            <small class="text-muted">Footer Text</small>
            <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
          </template>
        </b-card>

        <b-card>
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          </blockquote>
          <template #footer>
            <small class="text-muted">Footer Text</small>
          </template>
        </b-card>

        <b-card>
          <b-card-title>Title</b-card-title>
          <b-card-text>
            This card has supporting text below as a natural lead-in to additional content.
          </b-card-text>
          <template #footer>
            <small class="text-muted">Footer Text</small>
            <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
          </template>
        </b-card>

        <b-card img-src="https://picsum.photos/400/400/?image=41" img-alt="Image" overlay>
          <template #footer>
            <small class="text-muted">Footer Text</small>
            <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
          </template>
        </b-card>

        <b-card img-src="https://picsum.photos/400/200/?image=41" img-alt="Image" img-top>
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This card has even longer content than the first.
          </b-card-text>
          <template #footer>
            <small class="text-muted">Footer Text</small>
          </template>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post'
}
</script>

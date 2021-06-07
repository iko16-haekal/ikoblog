<template>
  <span>
    <div class="jumbotron w-screen shadow" style="height: 75vh">
      <div
        class="navbar px-8 sm:px-36 w-screen h-14 flex justify-start items-center"
      >
        <h1 class="text-2xl font-bold text-white">IKOBLOG</h1>
      </div>
      <div
        class="flex px-8 sm:px-36 justify-center items-center"
        style="height: 75%"
      >
        <h1 class="text-5xl font-bold text-white text-center">
          welcome to my blog
        </h1>
      </div>
    </div>

    <div class="w-screen px-8 sm:px-36 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        <div v-if="!artikels">
          <h1>something went wrong</h1>
        </div>
        <div v-if="artikels">
          <div v-for="artikel in artikels" :key="artikel.id">
            <Card
              :title="artikel.judul"
              :sub="artikel.subkonten"
              :thumb="'http://localhost:1337' + artikel.thumbnail.url"
              :alt="artikel.judul"
              :slug="artikel.slug"
            />
          </div>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
import Card from "~/components/Card.vue";
import axios from "axios";
export default {
  components: { Card },

  async asyncData() {
    try {
      const artikels = await (await axios.get("http://localhost:1337/artikels"))
        .data;
      return {
        artikels,
      };
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.jumbotron {
  background: url("~/assets/images/blog-cover.jpg");
  object-fit: contain;
  background-attachment: fixed;
}
</style>

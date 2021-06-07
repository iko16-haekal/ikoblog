<template>
  <article class="border-gray-50 w-full px-6 md:px-28 lg:px-52 py-12">
    <div v-if="!data">
      <h3>somthing went wrong</h3>
    </div>
    <div v-else-if="data">
      <img src="~/assets/images/post-dummy.png" class="img" alt="" />

      <h1 class="mt-12 font-bold text-4xl md:text-5xl">{{ data.judul }}</h1>
      <br />
      <div class="pre-formatted" v-html="data.konten"></div>
    </div>
  </article>
</template>

<script>
import axios from "~/node_modules/axios";
export default {
  async asyncData({ params }) {
    try {
      const { data } = await axios.get(
        `http://localhost:1337/artikels?slug=${params.slug}`
      );
      return {
        data: data[0],
      };
    } catch (error) {
      console.log(error);
    }
  },
  head() {
    return {
      title: this.data.judul,
      meta: [
        {
          hid: `description`,
          name: "description",
          content: this.data.subkonten,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.pre-formatted {
  white-space: pre-wrap;
}
</style>

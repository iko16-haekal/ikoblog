<template>
  <nuxt-link :to="'/artikel/' + slug">
    <div class="bg-white w-auto">
      <div class="image">
        <img class="fit-cover" :src="thumb" :alt="alt" />
      </div>
      <div>
        <h1 class="text-xl font-bold py-2 antialiased">{{ title }}</h1>
        <p class="bg-white antialiased text-base text-gray-800">
          {{ sub }}
        </p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["title", "sub", "link", "thumb", "alt", "slug"],
};
</script>

<style>
</style>
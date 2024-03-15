<script setup>
import { useAsyncData } from '#imports'
import { ref } from 'vue'
const list = ref(null)
const url = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/Ysera';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '10da99b8c8msh61f495aa235ccb2p1da90cjsnda0f95bacd23',
    'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
  }
};

const { data, error } = await useAsyncData(() => {
  return $fetch(url, options)
})

if (data.value) {
  list.value = data.value
}

if (error.value?.response?.status === 404) {
  throw createError({ statusCode: 404 })
}
</script>

<template>
  <NuxtPwaManifest />

  <h1>{{ list[0].artist }}</h1>
  <img :src="list[0].img" :alt="list[0].artist">
</template>

<style lang="css">
body {
  border: 5px solid darkgray;
  background: lightgoldenrodyellow;
}

h1 {
  font-family: "Courier New";
  font-size: 30px;
  text-align: center;
  margin-bottom: 40px;
}

img {
  width: 300px;
  padding: 20px;
  display: block;
  border: 3px solid darkred;
  margin: 0 auto 50px;
  background: wheat;
}
</style>

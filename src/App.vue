<template>
  <div id="app">
    <header>
      <h1>Realtime Chat app</h1>
    </header>

    <router-view></router-view>
  </div>
</template>

<script>
import { auth } from "./firebase";
console.log(auth);

export default {
  name: "App",
  components: {},
};
</script>

<style></style>

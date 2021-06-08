<template lang="pug">
  main.main
    BasePreloader
    HomeClouds

    HomeInfo
</template>

<script>
import HomeClouds from "@/components/HomeClouds";
import HomeInfo from "@/components/HomeInfo";
import BasePreloader from "@/components/BasePreloader";
import Parallax from 'parallax-js';

export default {
  components: {
    BasePreloader,
    HomeInfo,
    HomeClouds
  },
  methods: {
    init() {
      let clouds = document.getElementById('clouds');
      if (clouds != null) {
        new Parallax(clouds);
      }
    }
  },
  mounted() {
    this.init()
    document.body.classList.remove('no-overflow');
  }
}
</script>

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

export default {
  components: {
    BasePreloader,
    HomeInfo,
    HomeClouds
  }
}
</script>

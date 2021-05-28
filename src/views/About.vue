<template lang="pug">
  main.main
    AboutText

</template>

<script>
import AboutText from "../components/AboutText";
export default {
  components: {AboutText},
  methods:{
    init(){
      document.body.classList.add('no-overflow')
    }
  },
  mounted() {
    this.init();
  }
}
</script>

<template>
<el-container >
<h1 style="color:white">亲爱的正楠,您今天运动了{{exercisingTime}}分钟</h1>
</el-container>
</template>

<script>
export default {
  name: "base",
  computed: {
    exercisingTime:{
      get(){
        return this.$store.state.exercisingTime

      }
    }
  }

}
</script>

<style scoped>

</style>
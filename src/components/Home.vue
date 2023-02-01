<template>

  <el-container id="container" style="height: 100vh;width: 100vw">
    <el-aside width="20%" style="padding:0;margin:0;
    background-color: rgba(0, 0, 0, 1);border-right: darkgray 10px;">
    <div style="background-color: #222222;float: right;width: 4px;height: 100%" ></div>
    </el-aside>
    <el-main style="padding: 0;
  margin:0;background-color:rgba(66, 62, 62, 1) ">
      <el-header height="25%" id="header" >
        正楠的健身记录器
        <div style="background-color: #222222;height: 5px" ></div>

      </el-header>
      <el-container>
        <router-view>

        </router-view>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>

export default {
  name: "Home",

}
</script>

<style scoped>
el-main{

}
html,
body,
.app_container,
el-container{
  padding: 0;
  margin: 0;
  height: 100vh;
}

#container{
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
  #header{


    background: rgba(0,0,0);

  padding:0px;
    margin: 0;

    line-height: 25vh;

    font-size: 72px;
    font-weight: 1000;
    letter-spacing: 2px;

    color: rgba(255, 0, 0, 0.51);
    text-align: center;
    vertical-align: top;

  }
</style>
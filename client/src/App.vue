<template>
  <div id="app">
    <v-app id="inspire">
      <Header></Header>
      <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
      <Footer></Footer>
    </v-app>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components:{
    Header,
    Footer
  },

}
</script>

<style lang="scss">

</style>

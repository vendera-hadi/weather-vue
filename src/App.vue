import 'bootstrap/dist/css/bootstrap.min.css';

<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/page/Header'
import Footer from './components/page/Footer'

export default {
  components: {
    Header,
    Footer
	}
}
</script>

<style lang="scss">
.mt-15{
  margin-top: 15px;
}
</style>

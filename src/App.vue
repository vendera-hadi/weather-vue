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
$margin-indexes: 15 30;
@each $current-index in $margin-indexes {
  $i: index($margin-indexes, $current-index);
  .mt-#{$current-index} {
      margin-top: #{$current-index}px;
  }
  .mb-#{$current-index} {
      margin-bottom: #{$current-index}px;
  }
}

.page-container{
  min-height: 480px;
}
</style>

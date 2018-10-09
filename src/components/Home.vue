<template>
  <div class="page-container container mt-15">
    <div class="row">
      <div class="col-sm-12">
        <searchbox v-bind:keyword="keyword"/>
        <div class="row text-center">
        <weather v-for="city in cities" v-bind:id="city.woeid" v-bind:index="0"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Weatherbox from './Weatherbox'
import Searchbox from './Searchbox'

export default {
  components: {
    'searchbox': Searchbox,
    'weather': Weatherbox
  },
  data: function () {
    return {
      keyword: "",
      cities: [
        { woeid: 2344116, name: 'Istanbul' },
        { woeid: 638242, name: 'Berlin' },
        { woeid: 44418, name: 'London' },
        { woeid: 565346, name: 'Helsinki' },
        { woeid: 560743, name: 'Dublin' },
        { woeid: 9807, name: 'Vancouver' }
      ]
    }
  }
}
</script>

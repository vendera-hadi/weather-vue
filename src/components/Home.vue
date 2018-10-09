<template>
  <div class="page-container container mt-15">
    <div class="row">
      <div class="col-sm-12">
        <searchbox />
        <div class="row text-center">
        <weather v-for="city in cities" v-bind:name="city.name" v-bind:index="0"/>
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
      cities: [
        { name: 'Istanbul' },
        { name: 'Berlin' },
        { name: 'London' },
        { name: 'Helsinki' },
        { name: 'Dublin' },
        { name: 'Vancouver' }
      ]
    }
  }
}
</script>

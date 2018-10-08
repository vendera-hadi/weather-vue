<template>
  <div class="container mt-15">
    <div class="row">
      <div class="col-sm-12">
        <div class="row text-center">
        <weather v-for="city in cities" v-bind:name="city.name" v-bind:index="0"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Weatherbox from './Weatherbox'

export default {
  components: {
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

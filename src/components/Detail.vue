<template>
  <div class="container mt-15">
    <div class="row">
      <div class="col-sm-12">
        <div class="row text-center">
          <h1>{{city.title}}</h1>
        </div>
        <div class="row text-center mt-15">
          <weather v-if="city" v-for="(item, index) in city.consolidated_weather" v-bind:name="city.title" v-bind:index="index" v-bind:isdetail="1"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Weatherbox from './Weatherbox'

export default {
  name: 'Detail',
  components: {
    'weather': Weatherbox
  },
  data: function () {
    return {
      id: this.$route.params.id,
      city: {}
    }
  },
  methods: {
    fetchCity() {
      let url = 'http://weatherapi.localhost/weather.php?command=location&woeid='+this.id
      this.axios.get(url).then((response) => {
        this.city = response.data
      })
    }
  },
  created: function () {
    this.fetchCity()
  }
}
</script>

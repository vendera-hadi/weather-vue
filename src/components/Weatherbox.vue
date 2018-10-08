<template>
  <div class="col-lg-3 col-md-6 mb-4">
    <div class="card">
      <p v-if="!city">Loading ...</p>
      <weather-desc v-if="city" v-bind:city="city" v-bind:index="index"/>
      <div class="card-footer" v-if="!isdetail">
        <router-link v-bind:to="'/weather/'+ city.woeid">
          <button class="btn btn-primary">View Detail</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Weatherdesc from './Weatherdesc'

export default {
  props: ['name','index','isdetail'],
  components: {
    'weather-desc': Weatherdesc
  },
  methods: {
      findCity() {
        // i use the shared weather.php file in my local server
        let url = 'http://weatherapi.localhost/weather.php?command=search&keyword='+this.name
        this.axios.get(url).then((response) => {
          this.data = response.data[0]
          this.fetchCity(this.data.woeid)
        })
      },
      fetchCity(city_id) {
        let url = 'http://weatherapi.localhost/weather.php?command=location&woeid='+city_id
        this.axios.get(url).then((response) => {
          this.city = response.data
        })
      }
  },
  data: function () {
    return {
      city: null,
      data: null
    }
  },
  created: function () {
    this.findCity()
  }
}
</script>

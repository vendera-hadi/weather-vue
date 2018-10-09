<template>
  <div class="col-lg-3 col-md-6 mb-4">
    <div class="card">
      <div class="wb-loading-container" v-if="!city">
        <p>Loading ...</p>
      </div>
      <weather-desc v-if="city" v-bind:city="city" v-bind:index="index"/>
      <div class="card-footer" v-if="!isdetail && city">
        <router-link v-if="city" v-bind:to="'/weather/'+ city.woeid">
          <button class="btn btn-primary">View Detail</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.wb-loading-container{
  width: 100%;
  min-height: 314px;

  p {
    padding-top: 50%;
  }
}
</style>

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

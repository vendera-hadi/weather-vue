<template>
  <div class="col-lg-3 col-md-6 mb-4">
    <div class="card">
      <div class="wb-loading-container" v-if="!city">
        <p>Loading ...</p>
      </div>
      <weather-desc v-if="city" v-bind:city="city" v-bind:index="index"/>
      <div class="card-footer" v-if="!isdetail && city">
        <router-link v-bind:to="'/weather/'+ id">
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
  props: ['id','index','isdetail'],
  components: {
    'weather-desc': Weatherdesc
  },
  methods: {
    fetchCity() {
      let url = 'http://weatherapi.localhost/weather.php?command=location&woeid='+this.id
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
    this.fetchCity()
  }
}
</script>

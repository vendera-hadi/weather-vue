<template>
  <div class="page-container container mt-15">
    <div class="row">
      <div class="col-sm-12">
        <div class="row text-center">
          <h1>Search Results:</h1>
        </div>
        <searchbox v-bind:keyword="keyword"/>
        <div v-if="cities" class="row text-center">
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
      keyword: this.$route.params.keyword,
      cities: {}
    }
  },
  methods: {
    findCity() {
      // i use the shared weather.php file in my local server
      let url = 'http://weatherapi.localhost/weather.php?command=search&keyword='+this.keyword
      this.axios.get(url).then((response) => {
        console.log(response.data, "FIND RESULTS");
        this.cities = response.data
      })
    }
  },
  watch: {
    $route (to, from){
      this.keyword = this.$route.params.keyword
      console.log(this.keyword, "CHG KEYWORD");
      this.cities = {}
      this.findCity()
    }
  },
  created: function() {
    console.log(this.keyword, "LOAD CREATED");
    this.findCity()
  }
}
</script>

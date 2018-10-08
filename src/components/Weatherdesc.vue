<template>
  <div>
    <h4 class="card-title mt-15">{{ city.title }}</h4>
    <div class="card-body">
      <img v-bind:src="iconTemperature" /><br><br>
      <p class="card-text">{{ this.todayWeather.applicable_date | moment("ddd, MMMM Do YYYY") }}</p>
      <h3>{{currentTemperature}} &deg;C</h3>
      <small>Min Temp: {{minTemperature}} &deg;C</small><br>
      <small>Max Temp: {{maxTemperature}} &deg;C</small>
    </div>
  </div>
</template>

<script>
export default {
  props: ['city','index'],
  data: function () {
    return {
      iconPath: 'https://www.metaweather.com/static/img/weather/png/64/'
    }
  },
  computed: {
    // get today's weather
    todayWeather: function () {
      return this.city.consolidated_weather[this.index]
    },
    currentTemperature: function() {
      return this.todayWeather.the_temp.toFixed(2)
    },
    minTemperature: function() {
      return this.todayWeather.min_temp.toFixed(2)
    },
    maxTemperature: function() {
      return this.todayWeather.max_temp.toFixed(2)
    },
    iconTemperature: function(){
      return this.iconPath + this.todayWeather.weather_state_abbr + ".png"
    }
  }
}
</script>

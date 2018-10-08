<template>
  <div>
    <h4 class="card-title mt-15">{{ city.title }}</h4>
    <div class="card-body">
      <img v-bind:src="iconTemperature" />
      <p class="card-text">{{currentTemperature}} &deg;C</p>
      <small>Min Temp: {{minTemperature}} &deg;C</small><br>
      <small>Max Temp: {{maxTemperature}} &deg;C</small>
    </div>
    <div class="card-footer">
      <a href="#" class="btn btn-primary">View Detail</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['city'],
  data: function () {
    return {
      iconPath: 'https://www.metaweather.com/static/img/weather/png/64/'
    }
  },
  computed: {
    // get today's weather
    todayWeather: function () {
      return this.city.consolidated_weather[0]
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

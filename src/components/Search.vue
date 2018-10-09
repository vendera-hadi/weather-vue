<template>
  <div class="page-container container mt-15">
    <div class="row">
      <div class="col-sm-12">
        <div class="row text-center">
          <h1>Search Result for : "{{keyword}}"</h1>
        </div>
        <div class="row text-center mt-15">
          <searchbox />
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
  }
}
</script>

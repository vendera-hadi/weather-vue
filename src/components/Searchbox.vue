<template>
  <div class="row text-center mb-30 mt-30">
    <div class="col-sm-12">
      <form class="navbar-form" role="search">
        <div class="input-group add-on">
          <input class="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text" v-model="text">
          <div class="input-group-btn">
            <router-link v-bind:to="'/search/'+ text">
              <button class="btn btn-default">Search</button>
            </router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ['keyword'],
  data: function () {
    return {
      text: this.keyword,
      cities: {}
    }
  }
}
</script>
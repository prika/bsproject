<template>
  <div id="notFoundPage" class="pageContainer container">
    <div class="row">
      <h1 class="pageTitle col-12 col-sm-6">404</h1>

      <div class="col-12 col-sm-6 alert404">
        <h1>Page not found</h1>
        <h3>Back to <router-link to="/"> Homepage</router-link></h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "notFoundPage"
}
</script>

<style lang="scss">
#notFoundPage {
  margin-top: 140px;
  padding-top: 10%;
  min-height: 50vh;

  .pageTitle{position: relative}
  .alert404 * { text-align: right}
}
</style>

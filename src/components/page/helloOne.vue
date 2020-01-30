<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span>{{$route.params.username}}</span>
  </div>
</template>
<script>
  /* eslint-disable */
  export default {
    name: 'hi',
    data () {
      return {
        msg: 'Hi, I am Hi1!'
      }
    }
  }
</script>
<style scoped>

</style>

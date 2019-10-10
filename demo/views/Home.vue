<template>
  <div class="home">
    <digit-flip :value="num" />
    <input type="number" v-model="num">
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  // components: {
  //   HelloWorld
  // },
  data () {
    return {
      num: 666666
    }
  }
}
</script>
<style>
.digit-roll-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

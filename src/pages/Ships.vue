<template>
  <q-page class="">
    <dHeader />
    <dShips />
  </q-page>

</template>

<style>
</style>

<script>
import dHeader from '../components/common/header'
import dShips from '../components/Home/dShips'
export default {
  name: 'HelloWorld',
  components: {
    dHeader,
    dShips,
  },
  data() {
    return {}
  },

}
</script>

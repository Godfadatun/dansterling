<template>
  <q-page class="">
    <!-- <Home/> -->
    <dHeader />
    <dShips />
    <dPlanets />
    <dCharacter />
  </q-page>

</template>

<style>
</style>

<script>
// import Home from '../components/HelloWorld'
import dShips from '../components/Home/dShips'
import dHeader from '../components/common/header'
import dPlanets from '../components/Home/dPlanets'
import dCharacter from '../components/Home/dCharacter'
export default {
  name: 'HelloWorld',
  components: {
    // Home,
    dShips,
    dHeader,
    dPlanets,
    dCharacter
  },
  data() {
    return {}
  },

}
</script>

<template>
  <q-page class="">
    <dHeader />
    <dCharacter />
  </q-page>

</template>

<style>
</style>

<script>
import dHeader from '../components/common/header'
import dCharacter from '../components/Home/dCharacter'
export default {
  name: 'HelloWorld',
  components: {
    dHeader,
    dCharacter,
  },
  data() {
    return {}
  },

}
</script>

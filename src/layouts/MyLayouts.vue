<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-transparent" style="margin-top: 20px" >
      <q-toolbar class="bg-transparent">
        <q-toolbar-title >
          <img class="q-ml-sm gt-sm" src="https://raw.githubusercontent.com/random-guys/swapi-frontend-developer-test/master/assets/logo.png" style="max-width: 100px">
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-page-container>
       <router-view style="margin-top: -52px" />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'LayoutDefault',
  components: {},
  data () {
    return {
      leftDrawerOpen: false
    }
  },

  mounted() {
    this.$store.dispatch("aisle_1/theShips");
    this.$store.dispatch("aisle_1/theCharacters");
    this.$store.dispatch("aisle_1/thePlanets");
  },
}
</script>

<style>
</style>

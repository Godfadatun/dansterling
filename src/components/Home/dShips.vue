<template>
  <div :class="$q.screen.gt.sm ? 'q-px-xl column flex-center': 'column flex-center'">
    <subHeader :title="'Popular Starships'"/>
    <div class="row justify-center">
      <starships class="col-md-4" v-for="(item, index) in (theroute == 'ships'? myships.results: myships.results.slice(0, 6))" :key="index" :info="item" :index='index' :url="url">
      </starships>
    </div>
    <div class="column flex-center q-py-md" v-if="(myships.results.length > 6 && theroute != 'ships')">
      <q-btn  outline size="sm" class="full-width" style="min-width: 30vw" color="primary" label="View More" :to="{name: 'ships'}" />
    </div>

  </div>
</template>

<style>
</style>

<script>
import starships from '../cards/starships'
import subHeader from '../common/subHeader'
export default {
  // name: 'HelloWorld',
  components:{
    starships, subHeader
  },
  data() {
    return {
      data: '',
      url: [
        'https://raw.githubusercontent.com/random-guys/swapi-frontend-developer-test/master/assets/starship-1.jpg',
        'https://raw.githubusercontent.com/random-guys/swapi-frontend-developer-test/master/assets/starship-2.jpg',
        'https://raw.githubusercontent.com/random-guys/swapi-frontend-developer-test/master/assets/starship-3.jpg',
        'https://raw.githubusercontent.com/random-guys/swapi-frontend-developer-test/master/assets/starship-4.jpg',
        'https://raw.githubusercontent.com/random-guys/swapi-frontend-developer-test/master/assets/starship-5.jpg',
        'https://raw.githubusercontent.com/random-guys/swapi-frontend-developer-test/master/assets/starship-6.jpg',
      ]
    }
  },
  computed: {
    theroute(){return this.$route.name},
    myships: function() { return this.$store.getters["aisle_1/ships"] },
  },

}
</script>

<template>
  <div :class="$q.screen.gt.sm ? 'q-px-xl': ''">
    <!-- {{mycharacters}} -->
    <subHeader :title="'Starwars Characters'"/>
    <Top v-if="theroute == 'people'"/>
    <div class="row justify-center" >
      <div v-for="(item, index) in (theroute == 'people'? mycharacters.results: mycharacters.results.slice(0, 4))" :key="index" class="col-md-6 col-sm-6 col-xs-12">
        <characters  :info="item" :index='index' :url="url" />
      </div>
    </div>
    <div class="column flex-center" v-if="(mycharacters.results.length > 6 && theroute != 'people')">
      <q-btn  outline size="sm" class="full-width" style="max-width: 30vw" color="primary" label="View More" :to="{name: 'people'}" />
    </div>
  </div>
</template>

<style>
</style>

<script>
import characters from '../cards/characters'
import subHeader from '../common/subHeader'
import Top from '../common/top'
export default {
  // name: 'HelloWorld',
  components:{
    characters, subHeader, Top
  },
  data() {
    return {
      data: '',
      url: [
        'https://raw.githubusercontent.com/random-guys/swapi-frontend-developer-test/master/assets/character-1.jpg',
        'https://raw.githubusercontent.com/random-guys/swapi-frontend-developer-test/master/assets/character-2.jpg',
        'https://raw.githubusercontent.com/random-guys/swapi-frontend-developer-test/master/assets/character-3.jpg',
        'https://raw.githubusercontent.com/random-guys/swapi-frontend-developer-test/master/assets/character-4.jpg',
      ]
    }
  },
  computed: {
    theroute(){return this.$route.name},
    mycharacters: function() { return this.$store.getters["aisle_1/characters"]; },
  },


}
</script>

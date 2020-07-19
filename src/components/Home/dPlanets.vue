<template>
  <div :class="$q.screen.gt.sm ? 'q-px-xl': ''">
    <!-- {{myPlanets}} -->
    <subHeader :title="'Popular Planets'"/>
    <q-carousel infinite autoplay v-model="slide" transition-prev="slide-righ" transition-next="slide-left" swipeable animated control-color="grey-9" navigation padding  class="text-white q-my-md">
      <q-carousel-slide v-for="(val, i) in myPlanets" :key="'A'+i" :name="'A'+i" class="row no-wrap flex-center" >
        <div v-for="(item, index) in val" :key="index" class="q-pa-sm">
          <planets class="col-md-4 col-sm-6 col-xs-12"  :info="item" :index='index' :url="url"/>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<style>
</style>

<script>
import planets from '../cards/planets'
import subHeader from '../common/subHeader'

export default {
  // name: 'HelloWorld',
  components:{
    planets,
    subHeader
  },
  data() {
    return {
      slide: 'A0',
      data: '',
      newdata: '',
      newplanets: this.$store.getters["aisle_1/planets"],
      caroselLength:3,
      url: [
        'https://raw.githubusercontent.com/random-guys/swapi-frontend-developer-test/master/assets/planet-1.jpg',
        'https://raw.githubusercontent.com/random-guys/swapi-frontend-developer-test/master/assets/planet-2.jpg',
        'https://raw.githubusercontent.com/random-guys/swapi-frontend-developer-test/master/assets/planet-3.jpg',
      ]
    }
  },

  computed: {
    myPlanets() { return this.$store.getters["aisle_1/planets"] },
  }

}
</script>

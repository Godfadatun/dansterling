<template>
  <div>
    <q-carousel v-model="slide" infinite ref="carousel" transition-prev="slide-right" transition-next="slide-left" swipeable animated control-color="grey-9" navigation padding  class="text-red q-mb-md">
      <q-carousel-slide v-for="(val,i) in myships.results" :key="'A'+i"  :name="'A'+i" :img-src="url[dsrc]" >
        <div class="absolute-bottom text-bold text-white text-h5 q-pa-xl">
          <div class="">
            {{$route.params.item[2]}}
          </div>

        </div>
      </q-carousel-slide>
      <template v-slot:control>
        <q-carousel-control position="bottom-right" :offset="[18, 18]" class="q-gutter-sm" >
          <q-btn outline round dense color="white" icon="arrow_left" @click="()=>{ $refs.carousel.previous(); filmsInfo(0) }"/>
          <q-btn outline round dense color="white" icon="arrow_right" @click="()=>{ $refs.carousel.next(); filmsInfo(1) }"/>
        </q-carousel-control>
      </template>


    </q-carousel>

    <div :class="$q.screen.gt.sm ? 'q-px-xl q-py-md': 'q-py-md'">
      <q-tab-panels v-model="slide" animated class="">
        <q-tab-panel v-for="(val, i) in myships.results" :key="'A'+i" :name="'A'+i" class="flex flex-center">
          <div  :style="$q.screen.gt.sm ?'max-width: 50vw':''">
            <div class="text-h6 text-capitalize" v-if="i == $route.params.item[0]">{{ myships.results[$route.params.item[0]].name }} </div>
            <div class="text-h6 text-capitalize" v-else="">{{val.name}}</div>
            <div class="text-caption q-py-sm">{{text}}</div>
          </div>

        </q-tab-panel>
      </q-tab-panels>
    </div>

    <div class="flex flex-center q-my-sm">
      <q-field square outlined stack-label style="max-width: 300px">
        <template v-slot:control>
          <div class="self-center full-width no-outline text-bold text-center" tabindex="0">Recently Viewed Ships</div>
        </template>
      </q-field>
    </div>

    <q-separator inset />

    <q-card flat class=" no-wrap" >
      <q-scroll-area
      horizontal
      style="height: 90vh; "
      class="bg-grey-1 flex flex-center"
    >
      <q-card-section class="row no-wrap">
        <div v-for="(item, index) in myships.results" :key="index" class="q-pa-sm">
          <starships class="" style="min-width: 300px" :info="item" :index='index' :url="url"/>
        </div>
      </q-card-section>
    </q-scroll-area>

    </q-card>


  </div>

</template>

<style>
</style>

<script>
import starships from '../cards/starships'
export default {
  // name: 'HelloWorld',
  components:{
    starships,
  },
  data() {
    return {
      slide: 'A'+this.$route.params.item[0],
      dsrc:'',
      text:'It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space.... It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....',
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
    myships: function() { return this.$store.getters["aisle_1/ships"] },
  },
  methods: {
    filmsInfo(val){
      let num = Number(this.$store.getters["aisle_1/myUrl"])
      let url = this.url
      if (num == null) {
        this.dsrc = 0
        this.$store.commit('aisle_1/myUrl', this.dsrc)
      }else{
        if (num <= (url.length-1)) {
          if(val == 2) this.dsrc = num
          else {
            if ((val == 1) && (this.dsrc != url.length) ) this.dsrc = num + 1
            else {
              if(this.dsrc != 0) this.dsrc = num - 1
              else {
                num = url.length-1
                this.dsrc = num
              }
            }
          }
          this.$store.commit('aisle_1/myUrl', this.dsrc)
        }else {
          this.dsrc = 0
          this.$store.commit('aisle_1/myUrl', this.dsrc)
        }
      }
    }
  },

  mounted() {
    let newNo = this.$route.params.item[1]
    console.log(newNo);

    this.$store.commit('aisle_1/myUrl', newNo)
    this.filmsInfo(2)
  },
}
</script>

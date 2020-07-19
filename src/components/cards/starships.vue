<template>
  <div class="q-pa-md flex justify-evenly">
    <q-card flat square style="max-width: 380px">
      <img :src="url[dsrc]" style="height:204.083px">
      <q-card-section class="text-grey-9 bg-grey-5 q-pb-sm q-pl-sm q-pr-none q-pt-none">
        <div class="bg-grey-3 q-pa-xs">
          <div class="text-h6">{{info.name}}</div>
          <div class="text-caption" v-html="text"></div>
          <div class="relative-bottom row justify-end q-pa-sm">
            <q-btn unelevated :color="mouseover[0]" :text-color="mouseover[1]" square no-caps icon-right="ion-ios-arrow-round-forward" label="Read More" @mouseover="mouseover = ['purple-9', 'white']" @mouseleave="mouseover = ['grey-5', 'black']" :to="{name: 'details', params:{item: [index,dsrc, info.name]}}" />
          </div>
        </div>
    </q-card-section>
    </q-card>
  </div>

</template>

<style>
</style>

<script>
// import Home from '../components/HelloWorld'
// import dData from '../components/myData'
export default {
  name: 'HelloWorld',
  props:['info','url','index'],
  components: {
    // Home,
    // dData
  },
  data() {
    return {
      mouseover:['grey-5', 'black'],
      text:'It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....',
      dsrc:''
    }
  },

  methods: {
    filmsInfo(){
      let num = this.$store.getters["aisle_1/myUrl"]
      let url = this.$props.url
      if (num == null) {
        this.dsrc = 0
        this.$store.commit('aisle_1/myUrl', this.dsrc)
      }else{
        if (num < (url.length-1)) {
          this.dsrc = num + 1
          this.$store.commit('aisle_1/myUrl', this.dsrc)
        }else {
          this.dsrc = 0
          this.$store.commit('aisle_1/myUrl', this.dsrc)
        }
      }
    }
  },

  mounted() {
    this.filmsInfo()
  },

}
</script>

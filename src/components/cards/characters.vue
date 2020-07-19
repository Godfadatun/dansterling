<template>
  <div class="q-pa-md flex flex-center">
    <q-card square style="" flat bordered class="row">
      <q-img
        class="col-md-8 col-sm-12 col-xs-12"
        ratio="16/4"
        :src="url[dsrc]"
        style="min-height:50vh;"
      />
      <q-card-section class="bg-grey-4 column flex-center text-left col-md-4 col-sm-12 col-xs-12">
        <div class="text-bold text-grey-9 text-h6 full-width">{{info.name}}</div>
        <div class="text-bold text-grey-7 text-caption full-width">{{info.birth_year}}</div>
        <div class="text-caption q-mt-md full-width" v-html="text"></div>
      </q-card-section>
    </q-card>
  </div>

</template>

<style>
</style>

<script>
// import Home from '../components/HelloWorld'
// import dData from '../components/myData'
// index>(url.length-1)?(index - (url.length)):index
export default {
  name: 'HelloWorld',
  props:['info','url','index'],
  components: {},
  data() {
    return {
      mouseover:['grey-5', 'black'],
      text:'It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase ',
      data: '',
      dsrc:''
    }
  },

  methods: {
    async datagetter(){
      this.$axios.get(process.env.VUE_APP_MY_API+'people')
      .then((response)=>{
        this.data = response.data
      })
    },
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
    // console.log(process.env.VUE_APP_MY_API);
    this.filmsInfo()
  },

}
</script>

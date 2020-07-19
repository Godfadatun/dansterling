<template>
  <div class="q-pa-md flex flex-center">
    <q-card square class="my-card" style="max-width: 380px">
      <q-img
        :src="url[index>(url.length-1)?(index - (url.length)):index]"
        basic
        style="min-width: 300px"
      >
        <div class="absolute-bottom text-subtitle2 text-center">
          {{info.name}}
        </div>
      </q-img>
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

    }
  },

  methods: {
    async filmsInfo(url){
      this.$axios.get(url)
      .then((response)=>{
        console.log(response);
        return response

      })
    }
  },

}
</script>

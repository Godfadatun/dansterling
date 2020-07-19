<template>
  <div >
    <div class="column flex-center q-py-md">
      <div class="text-h5 text-bold">{{title}}</div>
      <q-separator inset color="grey-9" class="q-pt-xs q-my-xs" style="max-width: 6vw"/>
    </div>
  </div>
</template>

<style>
</style>

<script>

export default {
  name: 'HelloWorld',
  components:{
    // starships
  },
  props:['title'],
  data() {
    return {}
  },

}
</script>

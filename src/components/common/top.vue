<template>
  <div >
    <q-toolbar class="bg-transparent text-primary q-gutter-sm">
      <div class="row flex-center">
        <label class="q-px-md" for="gender">FILTER </label>
        <q-select name="gender" dense outlined v-model="form.sex" :options="gender" /></div>
      <div class="row flex-center">
        <label class="q-px-md" for="view">VIEW</label>
        <q-select input-class="q-mx-lg"  name="view" dense outlined v-model="form.theview" :options="view" /></div>
    </q-toolbar>
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
    return {
      gender:['Male', 'Female'],
      view:['Grid', 'List'],
      form:{
        sex:'Select your sex',
        theview:'Grid'
      }
    }
  },

}
</script>

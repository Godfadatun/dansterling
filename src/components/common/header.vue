<template>
  <div>
    <q-img
      :src="url"
      :style="'width: 100%; '+$q.screen.gt.xs ? 'height: 60vh':'max-height: 70vh'"
      class="full-width "
    >
      <div class="absolute-full column flex-center">
        <div class="row q-gutter-md full-width flex-center">
          <img class="q-ml-sm" src="https://raw.githubusercontent.com/random-guys/swapi-frontend-developer-test/master/assets/logo.png" style="max-width: 100px">
          <div class="text-weight-bolder text-h5">Directory</div>
        </div>
        <q-separator class="q-mt-sm q-mb-md full-width" color="white" style="max-width: 17vw" />

        <div class="text-center full-width" :style="$q.screen.gt.xs ? 'max-width: 25vw': ''">
          Find your favorite Characters, Films, Species, Starships and Planets
        </div>
        <div class="full-width flex flex-center">
          <q-toolbar class="bg-white text-grey rounded-borders q-mt-xl" :style="$q.screen.gt.xs ? 'max-width: 40vw' : ''">
            <q-avatar >
              <q-icon name="ion-search" :size="$q.screen.gt.xs ? '30px': '20px'" />
            </q-avatar>
            <q-input borderless v-model="text" :input-class="$q.screen.gt.xs ? 'text-subtitle1': 'text-caption'" class="q-pl-md full-width" placeholder="Enter a search term"/>
          </q-toolbar>
        </div>

      </div>
    </q-img>
    

  </div>

</template>

<style>
</style>

<script>
// import Home from '../components/HelloWorld'
// import dData from '../components/myData'
export default {
  name: 'HelloWorld',
  components: {
    // Home,
    // dData
  },
  data() {
    return {
      text:'',
      url: 'https://raw.githubusercontent.com/random-guys/swapi-frontend-developer-test/master/assets/hero-banner.jpg'
    }
  },

}
</script>

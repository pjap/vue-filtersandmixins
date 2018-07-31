<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 co-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters And Mixins</h1>
        <p>Ini Text Aslinya : {{ text }}</p>
        <hr>
        <p>{{ text | capitalize }}</p>
        <p>{{ text | toUppercase | lowercase}}</p>
        <hr>
        <br>
        <input type="text" v-model="filterText">
        <br>
        <br>
        <ul>
          <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
      </div>
    </div>
    <appList></appList>
  </div>
</template>

<script>
import List from './List.vue'
import { fruitMixin } from './fruitMixin.js'

export default {

  data() {
    return {
      text: 'hello world!'
    }
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase()
    }
  },
  components: {
    appList: List
  },
  mixins: [fruitMixin]
}
</script>

<style >
</style>

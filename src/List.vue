<template>
    <div class="row">
        <div class="col-xs-12 col-sm-8 co-sm-offset-2 col-md-6 col-md-offset-3">
        <hr>
        <input type="text" v-model="filterText">
        <br>
        <br>
        <ul>
          <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
      </div>
    </div>
</template>

<script>
import { fruitMixin } from './fruitMixin.js'

export default {
  mixins: [fruitMixin],
  created() {
    console.log('FROM LIST COMPONENTS');
  }
}
</script>

<style >
</style>

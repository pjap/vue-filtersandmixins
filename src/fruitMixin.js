export const fruitMixin = {
  data() {
    return {
      fruits: ['Strawberry', 'Mango', 'Durian', "Pisang", "Cau"],
      filterText: ''
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((value) => {
        // console.log(value);
        return value.match(this.filterText)
      })
    }
  },
  created() {
    console.log('CREATED LIFECYCLE FROM MIXIN');
  }
}

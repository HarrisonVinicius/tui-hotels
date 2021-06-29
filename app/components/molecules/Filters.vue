<template>
  <div class="filters">
    <span class="filters__title"> Order by: </span>
    <FilterItem
      v-for="(item, index) in items"
      :key="index"
      :is-selected="item.selected"
      @click="filterHandler(index)"
    >
      {{ item.label }}
    </FilterItem>
  </div>
</template>

<script>
export default {
  name: 'Filters',

  data() {
    return {
      items: [
        { label: 'More expensive', selected: true },
        { label: 'Cheaper', selected: false },
      ],
    }
  },

  methods: {
    filterHandler(payload) {
      this.items.forEach((element, index) => {
        index === payload
          ? (element.selected = true)
          : (element.selected = false)
      })
      this.$emit('click')
    },
  },
}
</script>

<style lang="sass" scoped>
.filters
  display: flex
  align-items: center

  &__title
    font-size: 18px
</style>

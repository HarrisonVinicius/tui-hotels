<template>
  <div class="tabs">
    <Tab
      v-for="(tab, index) in tabs"
      :key="index"
      :is-selected="tab.selected"
      :tab-key="index"
      @click="tabsHandler(index)"
    >
      {{ tab.label }}
    </Tab>
  </div>
</template>

<script>
export default {
  name: 'Tabs',

  data() {
    return {
      tabs: [
        { label: 'Rooms available', selected: true },
        { label: 'Users feedbacks', selected: false },
      ],
    }
  },

  methods: {
    tabsHandler(payload) {
      this.tabs.forEach((element, index) => {
        index === payload
          ? (element.selected = true)
          : (element.selected = false)
      })
      this.$emit('click', payload)
    },
  },
}
</script>

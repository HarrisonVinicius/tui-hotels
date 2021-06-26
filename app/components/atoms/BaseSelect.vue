<template>
    <div class="base-select">
        <select>
            <option v-for="(option, index) in options" :key="index" :value="option.id"> {{ option.name }} </option>
        </select>
    </div>
</template>

<script>
export default {
  name: 'BaseSelect',

  props: {
    options: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="sass" scoped>
.base-select
    width: 100% 
    height: 100%
    ::v-deep select 
                width: 100% 
                height: 100%
                padding: 5px 10px
                background-color: #fff
                color: $dark-blue 
                border: 2px solid $dark-blue 
                border-radius: 3px 
                font-size: 20px 
                font-weight: 500
                outline: none
                cursor: pointer    

                &:focus
                    border: 2px solid $dark-blue
                
                option 
                    color: $dark-blue
                    outline: none 
                    border: none

                    &:hover
                        background-color: $light-blue !important
</style>


<template>
  <div class="container">
    <input
    v-model="title"
    class="form-control"
    type="text"
    placeholder="Search for Movies. Search & more"
    @keyup.enter="apply" />
    <div class="selects">
      <select
      v-for="filter in filters"
      v-model="$data[filter.name]"
      :key="filter.name"
      class="form-select">
      <option
      v-if="filter.name === 'year'"
      value=""> <!--특정한 필터에서만 사용하는 옵션을 독립적으로 사용할 경우 v-if를 사용-->
      All Years</option>
        <option
        v-for="item in filter.items"
        :key="item">
        {{ item }}
        </option>
      </select>
    </div>
    <button 
    class="btn btn-primary" 
    @click="apply">
    Apple
    </button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      title: '',
      type: 'movie',
      number: 10,
      year: '',
      filters: [
        {
          name: 'type',
          items: ['movie', 'series', 'episode']
        },
        {
          name: 'number',
          items: [10, 20, 30]
        },
        {
          name: 'year',
          items: (() => {
            const years = []
            const thisYear = new Date().getFullYear()
            for(let i = thisYear; i >= 1985; i -= 1) {
              years.push(i)
            }
            return years
          })()  //즉시 실행함수 
        }
      ]
    }
  },
  methods: {
    //Store의 Mutation을 실행할 때는 .commit() 메소드를, Actions를 실행할 때는 .dispatch() 메소드 사용
    async apply() {
      this.$store.dispatch('movie/searchMovies', {
        title: this.title,
        type: this.type,
        number: this.number,
        year: this.year,

      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  > * {
    margin-right: 10px;
    font-size: 15px;
    &:last-child {
      margin-right: 0;
    }
  }
  .selects {
    display: flex;
    select {
      width: 120px;
      margin-right: 10px;
      &:last-child{
        margin-right: 0;
      } 
    }
  }
  .btn {
    width: 120px;
    height: 70px;
    font-weight: 700;
    flex-shrink: 0;
  }
}
</style> 
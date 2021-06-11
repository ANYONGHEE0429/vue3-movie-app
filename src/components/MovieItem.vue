<template>
  <div>{{ movie.Title }}</div>
  <h1> {{movie.type}}</h1>
  <div>{{ movie.year}}</div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => ({}) 
    }
  }
}
</script>
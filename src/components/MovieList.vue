<template>
  <div class="container">
    <div class="inner"> 
      <!--movies는 computed의 movies(배열데이터) movie라는 객체 데이터-->
      <MovieItem 
      v-for="movie in movies" 
      :key="movie.imdbID"
      :movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieItem from '~/components/MovieItem'

export default {
  components: {
    MovieItem
  },
  computed: {
    movies() {
      return this.$store.state.movie.movies //계산된 데이터 옵션을 선택 후 사용
      //$로 된 store로 접근하고 state(상태) 중에 movie라는 모듈의 movies라는 실제 데이터를 가져와 movies() 계산된 데이터로 활용하겠다bundleRenderer.renderToStream 
    }
  }
}
</script>
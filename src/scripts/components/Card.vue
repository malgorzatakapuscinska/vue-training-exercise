<template>
  <div class="card">
    <div class="card__image-wrapper">
      <img :src="movie.imgSrc">
    </div>
    <div class="card__details">
      <h2>{{movie.title}}</h2>
      <div class="card__movie-details">
        <ul>
          <li>{{movie.prodDate}}</li>
          <li>{{movie.length}}</li>
          <li>{{movie.kindOf}}</li>
        </ul>
      </div>
      <span>{{movie.imgSrc}}</span>
      <div class="card__movie-description">
        <p class="">{{ movie.desc }}</p>
      </div>
      <div class="card__button">
        <a :href="movie.video" target="_blank">See trailer</a>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    props: ['movie'],
    data() {
      return {
      }
    },

}
</script>

<style lang="scss" scoped>
  @import "./src/styles/card.scss";
</style>
<template>
  <section>
    <div class="container">
      <h1>{{title}}</h1>
      <Card v-for="movie in movies" :key='movie.id' :movie=movie></Card>
    </div>
  </section>
</template>

<script>
import Card from  './components/Card.vue'

  export default {
    data() {
      return {
        title: "My favorite films",
        movies: [
        {
          id: 1,
          title: 'Doctor Strange',
          prodDate: '2016',
          length: '115 min',
          kindOf: 'Phantasy, Adventure',
          desc: 'Powerfull sorecer MD Stephen Strange fights with darkness powers to save the world. American superhero film based on the Marvel Comics character of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.',
          imgSrc: './src/images/1.jpg',
          video: 'https://youtu.be/HSzx-zryEgM'
        },
        {
          id: 2,
          title: 'Casino Royale',
          prodDate: '2006',
          length: '144 min',
          kindOf: 'Chase film',
          desc: 'The young James Bond gains his licence to kill and status as a 00 agent by assassinating the traitorous MI6 section chief Dryden at the British Embassy in Prague, as well as his terrorist contact, Fisher, in a bathroom in Lahore, Pakistan.',
          imgSrc: './src/images/2.jpg',
          video: 'https://youtu.be/36mnx8dBbGE'
        },
        {
          id: 3,
          title: 'Ghost Rider',
          prodDate: '2007',
          length: '144 min',
          kindOf: 'Phantasy, Action',
          desc: 'The first supernatural Ghost Rider is stunt motorcyclist Johnny Blaze, who, in order to save the life of his father, agreed to give his soul to "Satan" (later revealed to be an arch-demon named Mephisto). At night and when around evil, Blaze finds his flesh consumed by hellfire, causing his head to become a flaming skull. He rides a fiery motorcycle and wields blasts of hellfire from his body, usually from his skeletal hands.',
          imgSrc: './src/images/3.jpg',
          video: 'https://youtu.be/8M0lLJfNPds'
        }
      ]}
    }, 
    components: {
      Card
    }
  }
</script>
<style lang="scss">
  body {
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    background-size: 50%;
  }
  .container {
     width: 85%;
    background-color: rgba(0, 0, 0, 0.3);
    margin: 102px auto 0 auto;
    padding: 10px;
  }
  h1 {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    padding: 30px 0;
    color: white;
    padding-left: 150px;
    text-align: left;
    text-transform: uppercase;
    margin: 0;
    background-color: #1d4801;
    box-shadow: 0px 20px 30px 3px rgba(0, 0, 0, 0.55);
    text-shadow: 0 0 10px #fff;
  }
</style>
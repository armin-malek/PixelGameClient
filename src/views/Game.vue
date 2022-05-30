<template>

  <div class="bg-white main__content game__page" style="">

    <div class="loading__a" v-if="load__spinner === true" style="    padding-top: 75%;">
      <div class="d-flex justify-content-center align-items-center">
        <div class="spinner-border  text-light" role="status">
        </div>

      </div>
    </div>

    <div class="pixel__controls__top">
      <h1>دوستم تو کنترل مربع <span>های</span></h1>
      <ol>
        <template v-for="(pixel,index) in pixels">
          <li :key="index" dir="ltr"> {{ pixel.name }}</li>
        </template>
      </ol>
      <p>رو در دست داری، مربع ها رو طوری در حالتی قرار بوده که
        اون چیزی که ما میخواییم روی صفحه سن تشکیل بشه</p>
    </div>
    <div class="box__pixel__control">
      <template v-for="(pixel,index) in pixels">
        <app-item-pixel :key="index" :pixel="pixel"/>
      </template>
    </div>

  </div>
</template>
<script>

import ItemPixel from "../components/ItemPixel";

export default {

  name: "Game",
  data() {
    return {
      pixels: [],
      load__spinner: true,
    }
  },
  components: {
    appItemPixel: ItemPixel,
  },
  methods: {},
  mounted() {
    if (this.$store.state.gameStatus === "ended" || this.$store.state.gameStatus === "waiting") {
      if (this.$store.state.gameStatus === "ended") {
        this.$router.replace({
          name: 'Ended'
        })
      } else {
        this.$router.replace({
          name: 'Waiting'
        })
      }

    } else {
      this.$toaster.warning('منتظر بمون تا اطلاعات رو بگیرم...')
      this.$socket.emit("reqPixels");

      this.$socket.on("getPixels", (pix) => {
        this.$toaster.warning('خب، اطلاعات رو گرفتیم، شروع کن ...');
        this.pixels = pix;
        this.load__spinner = false;

      });
    }

    this.$socket.on("endGame", () => {
      this.$router.replace({
        name: 'Ended'
      })
      this.$toaster.warning('بازی تموم شد!')
    });


  },
  computed: {}
}
</script>
<template>

  <div class="bg-white main__content two__page" style="">

    <h1 style="color: darkred">خسته نباشین </h1>
    <p>ممنونم از اینکه وقت گرانبهاتون رو در اختیار ما گذاشتین تا این برنامه رو با هم اجرا کنیم.</p>

    <p>اجرا و پیاده سازی:</p>
    <div class="develop">
      <img src="img/hossein.jpg" alt="">
      <div class="details">
        <h2>حسین آسیابی خوش طلب</h2>
        <a href="https://khoshtalab.ir" target="_blank">سایت شخصی</a> , <a href="https://instagram.com/khoshtalab"
                                                                           target="_blank">اینستاگرام: khoshtalab</a>
      </div>

    </div>
    <div class="develop">
      <img src="img/armin.jpg" alt="">
      <div class="details">
        <h2>آرمین اسماعیلی ملک</h2>
        <a href="http://arminmalek.ir" target="_blank">سایت شخصی</a>
      </div>

    </div>


  </div>
</template>


<style>
.develop {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 80px auto;
  grid-template-columns: 80px auto;
  align-items: center;
  padding: 10px;
  margin: 25px;
  border-radius: 10px;
  box-shadow: 0 0 25px #dddddd82;
  text-align: center;
  background-color: #FFF;
  transition: all 500ms ease;
}

.develop .details h2 {
  text-align: center;
  font-weight: 600;
  font-family: 'one';
  font-size: 0.79rem;
}

.develop .details a {
  text-align: center;
  font-weight: 600;
  font-family: 'one';
  font-size: 0.69rem;
  color: #4caf50;
  text-decoration: none
}

.develop .details a {

}

.develop img {
  border-radius: 10px;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
<script>


export default {

  name: "Game",
  data() {
    return {}
  },
  components: {},
  methods: {},
  mounted() {

  },
  computed: {}
}
</script>
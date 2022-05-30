<template>
  <div class="bg-white main__content first__page" style="">

    <h1>سلام </h1>
    <p>میخوایم با کمک هم یه نقاشی تعاملی بکشیم.</p>
    <ul>
      <li>
        روی سن یه صفحه داریم که به مربع های کوچیکی تقسیم شده
      </li>
      <li>
        کنترل چند تا از مربع ها دست شماست
      </li>
      <li>
        وقتی برنامه شروع شد، تو باید مربع های خودت رو خاموش و روشن کنی
      </li>
      <li>
        اگه به راهنمایی ها دقت کنی با هم میتونیم شکلی رو که میخوایم رو ترسیم کنیم
      </li>


    </ul>
    <div class="text-center">
      <router-link to="/waiting" tag="a" type="button" class="btn btn__go__next__page btn-sm">
        رفتن به صفحه بعدی
      </router-link>
    </div>

    <div class="develop">
      <img src="img/navid.jpg" alt="">
      <div class="details">
        <h2>نوید حاتمی</h2>
        <p style="    margin-bottom: 0;
    font-size: 0.69rem;
    text-align: justify;">دغده‌ی اصلی او گذار از روش های منسوخ و سنتی حاکم بر آموزش در مدارس و آموزش علوم مختلف با روش
          های جذاب می‌باشد
          تا مخاطب از فرآیند آموزش لذت برده و مفاهیم در ناخودآگاه ذهن وی هک شود. و در این زمینه در تلاش برای به روز کردن
          خود و کشف روش های بدیع و نو می‌باشد.</p>
        <a href="https://instagram.com/navid.hatami97" target="_blank">اینستاگرام: navid.hatami97</a>
      </div>

    </div>

  </div>
</template>


<style>
.develop {
  /*display: -ms-grid;*/
  /*display: grid;*/
  /*-ms-grid-columns: 80px auto;*/
  /*grid-template-columns: 80px auto;*/
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
  margin-top: 10px;
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
  width: 50%;
  height: 50%;
  padding: 0;
  margin: 0;
}
</style>
<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},

}
</script>

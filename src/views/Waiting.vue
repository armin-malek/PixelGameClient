<template>
  <div class="bg-white main__content two__page" style="">
    <h1>الان شروع میشه </h1>
    <p>دوســت عزیز ،آقا معلم مون هنــوز دستـــور شــروع رو صــــــــادر نـــکــرده، پـس ازت
      ممنــون میــشم یـه کـوچولو منتظر بمــونی</p>

    <span>اگه میخوای دوباره ببینی که قراره چیکار کنیم این پایین کلیک کن</span>
    <div class="text-center">
      <router-link to="/" tag="a" type="button" class="btn btn__go__next__page btn-sm">
        مشاهده راهنما
      </router-link>
    </div>

    <img src="svg/waiting.svg" alt="">
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      requireName: false
    }
  },

  methods: {},
  mounted() {
    this.$toaster.warning('دوستم فعلا بازی شروع نشده، یکمی منتظر باش')

  },
  computed: {},

}
</script>
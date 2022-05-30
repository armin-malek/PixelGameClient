<template>
  <transition name="slide" mode="out-in">
    <router-view/>
  </transition>
</template>

<style>


</style>
<style scoped>
.slide-enter-active {
  animation: slide-in 200ms ease-in-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-in-out forwards;
}

@keyframes slide-in {
  from {
    /*transform: translateY(-30px);*/
    opacity: 0;
  }
  to {
    /*transform: translateY(0);*/
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    /*transform: translateY(0);*/
    opacity: 1;
  }
  to {
    /*transform: translateY(-30px);*/
    opacity: 0;
  }
}

</style>


<script>
export default {
  name: "App",
  data() {
    return {
      status: false
    }
  },
  methods: {},
  mounted() {

    let token = localStorage.token;
    let vm = this

    this.$socket.on("connect", () => {
      console.log("before token" + this.$socket.id);
    });

    this.$socket.on("verify", () => {
      vm.$toaster.success('با موفقیت به سرور وصل شدیم:)')
      this.$socket.emit("auth", token);
    });

    this.$socket.on("setAuth", (uid) => {
      token = uid;
      localStorage.token = token;
    });

    this.$socket.on("startGame", () => {
      this.$store.state.gameStatus = "started";

      this.$toaster.warning('بازی داره شروع میشه، آماده باشین.')
      this.$router.replace({
        name: 'Game'
      })
    });

    this.$socket.on("gameStatus", (status) => {
      this.$store.state.gameStatus = status;


      if (status === "started") {
        this.$toaster.warning('بازی داره شروع میشه، آماده باشین.')
        this.$router.replace({
          name: 'Game'
        })
      } else if (status === "ended") {
        this.$router.replace({
          name: 'Ended'
        })

      } else if (status === "waiting") {
        this.$router.replace({
          name: 'Home'
        })
      }

    });


  }

}
</script>
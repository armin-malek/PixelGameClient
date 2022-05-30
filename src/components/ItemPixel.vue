<template>
  <div class="item__pixel">
    <div class="row">
      <div class="col-6  justify-content-center align-items-center">
        <h1 class="mt-2"> مربع <span dir="ltr">{{ pixel.name }}</span></h1>
        <div class="clearfix"></div>
        <div class="help__item__pixel">
          یه راهنمایی:
          <span v-if="pixel.help === true">روشنش کن</span>
          <span v-else>خاموشش کن</span>
        </div>
      </div>
      <div class="col-6 d-flex justify-content-center">
        <div class="pixel" :class="status ? 'on' : 'off'" @click="changeStatus()"></div>

        <!--        <div class="form-check form-switch">-->
        <!--          <input class="form-check-input" type="checkbox" role="switch"-->
        <!--                 @change="changeStatus()">-->
        <!--        </div>-->
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "ItemPixel",
  props: ['pixel'],
  data() {
    return {
      status: false,
    }
  },
  methods: {
    changeStatus() {
      if (this.status === false)
        this.status = true
      else
        this.status = false
      this.$socket.emit("changePixel", this.pixel.ids, this.status);

    }
  }, mounted() {


  }

}
</script>

<style scoped>

</style>
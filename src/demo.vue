<!--
 * @Author: btbrad
 * @Date: 2020-08-11 22:12:52
 * @LastEditors: btbrad
 * @LastEditTime: 2020-08-11 22:49:25
 * @Description: 
-->
<template>
  <div>
    <h2>Guru-UI</h2>
    <hr />
    <div style="margin-top: 30px;margin-left: 200px;">
      <g-slide ref="slide" :active="active">
        <g-slide-item name="1">
          <div class="box">1</div>
        </g-slide-item>
        <g-slide-item name="2">
          <div class="box">2</div>
        </g-slide-item>
        <g-slide-item name="3">
          <div class="box">3</div>
        </g-slide-item>
      </g-slide>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data() {
    return {
      active: '1'
    }
  },
  mounted () {
    setInterval(() => {
      if (this.active >= 3) {
        this.active = 0
      }
      this.active = String(++this.active)
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 300px;
  height: 200px;
  border: 1px solid #f40;  
}
</style>

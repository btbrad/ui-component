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
      <g-slide ref="slide">
        <g-slide-item>
          <div class="box">1</div>
        </g-slide-item>
        <g-slide-item>
          <div class="box">2</div>
        </g-slide-item>
        <g-slide-item>
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
    }
  },
  mounted () {
    const first = this.$refs.slide.$children[0]
    const second = this.$refs.slide.$children[1]
    first.visible = true
    setTimeout(() => {
      first.visible = false
      second.visible = true
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

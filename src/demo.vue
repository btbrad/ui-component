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
    <div style="margin-top: 30px;margin-left: 200px;width: 500px;">
      <g-collapse :selected.sync="selectedCollapse" type="single">
        <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
        <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
        <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
      </g-collapse>
      <br />
      <g-input value="张三"></g-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data() {
    return {
      selectedCollapse: ''
    }
  }
}
</script>

<style></style>

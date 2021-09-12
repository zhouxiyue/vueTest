<template>
  <div class="title">
    <div class="line"></div>
    <div class="text">{{title}}</div>
    <div class="line"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String
      }
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .title {
    display: flex
    width: 80%
    margin: 30px auto 24px auto
    .line {
      flex: 1
      position: relative
      top: -6px
      border-bottom: 1px solid rgba(225, 225, 225, 0.2)
    }
    .text {
      padding: 0 12px
      font-size: 14px
    }
  }
</style>

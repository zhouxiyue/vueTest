<template>
  <span v-show="show===1" :class="[styleTypeMap[styleType], mapTop[type][index]]" ></span>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      index: {
        type: Number
      },
      show: {
        type: Number
      },
      type: {
        type: Number
      },
      styleType: {
        type: Number
      }
    },
    created() {
      this.classMap = ['decrease-1', 'discount-1', 'special-1', 'invoice-1', 'guarantee-1'];
      this.classMap2 = ['decrease-2', 'discount-2', 'special-2', 'invoice-2', 'guarantee-2'];
      this.classMap3 = ['decrease-3', 'discount-3', 'special-3', 'invoice-3', 'guarantee-3'];
      this.mapTop = [this.classMap, this.classMap2, this.classMap3];
      this.styleTypeMap = ['icon1', 'icon2'];
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  &.icon1
    display: inline-block
    vertical-align: top
    width: 12px
    height: 12px
    margin-right: 2px
    background-size: 12px 12px
    background-repeat: no-repeat
    &.decrease-1
      bg-image('decrease_1')
    &.discount-1
      bg-image('discount_1')
    &.guarantee-1
      bg-image('guarantee_1')
    &.invoice-1
      bg-image('invoice_1')
    &.special-1
      bg-image('special_1')
    &.decrease-3
      bg-image('decrease_3')
    &.discount-3
      bg-image('discount_3')
    &.guarantee-3
      bg-image('guarantee_3')
    &.invoice-3
      bg-image('invoice_3')
    &.special-3
      bg-image('special_3')
  &.icon2
    display: inline-block
    width: 16px
    height: 16px
    vertical-align: top
    margin-right: 6px
    background-size: 16px 16px
    background-repeat: no-repeat
    &.decrease-2
      bg-image('decrease_2')
    &.discount-2
      bg-image('discount_2')
    &.guarantee-2
      bg-image('guarantee_2')
    &.invoice-2
      bg-image('invoice_2')
    &.special-2
      bg-image('special_2')
</style>

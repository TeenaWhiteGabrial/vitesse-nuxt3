<script setup lang="ts">
const startclientX = ref(0) // 开始移动时的横坐标偏移量
const startclientY = ref(0) // 开始移动时的纵坐标偏移量
const elRight = ref(10)
const elBottom = ref(10)
function startMove(e: DragEvent) {
  startclientX.value = e.clientX
  startclientY.value = e.clientY
}

function endMove(e: DragEvent) {
  const x = startclientX.value - e.clientX
  const y = startclientY.value - e.clientY
  elRight.value += x
  elBottom.value += y
}
</script>

<template>
  <div
    class="drag-ball-box"
    :style="`right:${elRight}px;bottom:${elBottom}px;`"
    @dragstart="startMove"
    @dragend="endMove"
  />
</template>

<style lang="scss" scoped>
  .drag-ball-box {
  background: #000;
  position: fixed;
  z-index: 9999;
  height: 40px;
  width: 40px;
  border-radius: 9999px;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
}
</style>

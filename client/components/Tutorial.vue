<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
  <div>
    <canvas ref="game" width="640" height="480" style="border: 1px solid black;">
    </canvas>
    <p>
      <button v-on:click="move('right')">right</button>
      <div v-on:click="move('right')">{{this.position.z}}</div>
    </p>
  </div>
  </div>
</template>

<script>
import io from "socket.io-client"
export default {
  name: 'BlockGame',
  data() {
    return {
      socket: {},
      context: {},
      position: {
        x: 0,
        y: 0,
        z: '',
      }
    }
  },
  created() {
    this.socket = io("http://localhost:3300")
  },
  mounted() {
    this.context = this.$refs.game.getContext("2d")
    this.socket.on("position", data => {
      this.position = data
      this.context.clearRect(0,0,this.$refs.game.width, this.$refs.game.height)
      this.context.fillRect(this.position.x, this.position.y, 20, 20)
    })
  },
  methods: {
    move(direction) {
      this.socket.emit("move", direction);
    }
  }
}
</script>

<style scoped>

</style>

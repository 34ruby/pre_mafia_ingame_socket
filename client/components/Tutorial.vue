<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
  <!-- <input type="string" /> -->
  <div class="box-content h-128 w-128 p-4 border-4">
    <!-- <canvas ref="game" width="640" height="480" style="border: 1px solid black;">
    </canvas>
      <button v-on:click="move('right')">right</button>
      <div v-on:click="move('right')">{{this.position.z}}</div> -->
      <!-- <label class="block"> -->
      <input type="text" :value="message" @input="message=$event.target.value">
      <div class="text-8xl">{{this.flowMessage}}</div>
      <div class="text-2xl">당신은 : {{this.playerJob[this.message-1]}}</div>
  </div>
      <!-- </label> -->
  </div>
</template>

<script>
import io from "socket.io-client"
export default {
  name: 'BlockGame',
  data() {
    return {
      socket: {},
      playerJob: [],
      message: 0,
      flowMessage: ''
    }
  },
  created() {
    this.socket = io("http://localhost:3300")
  },
  mounted() {
    // this.context = this.$refs.game.getContext("2d")
    // this.socket.on("position", data => {
    //   this.position = data
    //   this.context.clearRect(0,0,this.$refs.game.width, this.$refs.game.height)
    //   this.context.fillRect(this.position.x, this.position.y, 20, 20)
    // })
    this.socket.on("playerJob", data => {
      this.playerJob = data
    })

  },
  methods: {
    // move(direction) {
    //   this.socket.emit("move", direction);
    // }
  }
}
</script>

<style scoped>

</style>

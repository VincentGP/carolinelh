<template>
    <div id="welcome-section">
        <div id="canvas">
            <img id="logo" src="../assets/logo.svg">
        </div>
        <transition name="fade" mode="out-in">
          <p id="messages" :key="currentMessage">
            {{ currentMessage }}
          </p>
        </transition>
    </div>
</template>

<script>
export default {
  data () {
    return {
      messages: ['Velkommen', 'Welcome', 'Wilkommen', 'Benvenuto', 'Bienvenido'],
      currentMessage: ''
    }
  },
  created () {
    this.currentMessage = this.messages[0]
    this.changeMessage()
  },
  methods: {
    changeMessage () {
      let counter = 0
      let length = this.messages.length
      setInterval(() => {
        if (counter === length) {
          counter = 0
        }
        this.currentMessage = this.messages[counter]
        counter++
      }, 2000)
    }
  }
}
</script>

<style scoped>
#welcome-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
#logo {
  width: 300px;
}
#messages {
  letter-spacing: 0.7px;
  margin-top: 2rem;
  text-transform: uppercase;
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
.fade-leave-to {
  transform: translateX(-10px);

}
</style>

<template>
    <div id="welcome-section">
        <router-link to="/coming-soon">
          <div id="canvas">
              <img id="logo" src="../assets/logo.svg">
          </div>
        </router-link>
        <transition name="fade" mode="out-in">
          <p id="messages" :key="currentMessage">
            {{ currentMessage }}
          </p>
        </transition>
    </div>
</template>

<script>
export default {
  data() {
    return {
      messages: ['Velkommen', 'Welcome', 'Wilkommen', 'Benvenuto', 'Bienvenido'],
      currentMessage: '',
      speed: 2000
    }
  },
  created() {
    this.currentMessage = this.messages[0];
    this.changeMessage();
  },
  methods: {
    changeMessage() {
      let counter = 0;
      let length = this.messages.length;
      setInterval(() => {
        if (counter === length) {
          counter = 0;
        }
        this.currentMessage = this.messages[counter];
        counter++;
      }, this.speed);
    }
  }
};
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
#canvas {
  width: 300px;
  height: 300px;
  background-image: url('../assets/welcome.gif');
  background-size: cover;
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

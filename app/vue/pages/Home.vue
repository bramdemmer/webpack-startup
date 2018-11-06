<template>
  <div class="full-width center-content">
    <img src="/static/img/logo.png">
    <welcome-message name="World" />
  </div>
</template>

<script>
import WelcomeMessage from '../components/Home/WelcomeMessage.vue';

export default {
  components: {
    WelcomeMessage,
  },
};
</script>

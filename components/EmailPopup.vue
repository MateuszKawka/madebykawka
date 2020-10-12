<template>
  <div class="popup">
    <div class="success" v-if="send">
      <p>Wiadomość została wysłana!</p>
      <button class="button" type="button" @click="$emit('close')">Wróć</button>
    </div>
    <div class="error" v-else>
      <p>Nie udało się wysłać wiadomości</p>
      <button class="button" type="button" @click="$emit('close')">Spróbuj ponownie</button>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            success: true
        }
    },
  computed: {
      send() {
        return this.$attrs.send
      }
  }
}
</script>

<style lang="scss" scoped>
.popup {
    width: 100%;
    padding: $s2;
    height: 100%;
}

.success, .error  {
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
}

.success p, .error p{
    font-size: $font-size-medium;
    text-align: center;
    margin-bottom: $s4;
}

.error p {
  color: #b12a2a;
}
</style>

<template>
  <ion-button class="tombol">{{ nama }}</ion-button>
</template>

<script setup lang="ts">
import { IonButton } from "@ionic/vue";
defineProps({
  nama: String,
});
</script>

<style scoped>
.tombol {
  padding: 10px;
  color: aliceblue;
  border-radius: 10px;
}
</style>

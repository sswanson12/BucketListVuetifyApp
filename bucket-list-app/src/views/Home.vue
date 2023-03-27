<template>
  <v-sheet height="80vh" class="d-flex flex-column bg-brown-lighten-5">
    <div class="ma-5">
      <bucket-list></bucket-list>

      <app-button button-name="addLifeGoal"
                  button-size="xxx-large"
                  icon="mdi-plus"
                  tool-tip="Add Life Goal!"
                  tool-tip-location="left"
                  class="rounded-circle elevation-5 bg-primary float-end mt-5">
      </app-button>
    </div>
  </v-sheet>
</template>

<script setup>

import AppButton from "@/components/AppButton";
import BucketList from "@/components/BucketList";

</script>

<style lang="scss">
  #bucket-list-items{
    display: flex;
    justify-content: center;
  }
</style>

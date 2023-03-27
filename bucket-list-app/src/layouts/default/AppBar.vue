<template>
  <v-app-bar
    color="primary"
    class="text-center"
  >
    <template v-slot:prepend>
      <app-button button-name="menuButton"
                  button-size="large"
                  icon="mdi-menu"
                  tool-tip="Menu"
                  tool-tip-location="bottom">
      </app-button>
    </template>

    <v-app-bar-title>Bucket List</v-app-bar-title>

    <template v-slot:append>

      <app-button button-name="filterButton"
                  button-size="large"
                  icon="mdi-filter"
                  tool-tip="Filter"
                  tool-tip-location="bottom">
      </app-button>
      <app-button button-name="sortButton"
                  button-size="large"
                  icon="mdi-sort"
                  tool-tip="Sort"
                  tool-tip-location="bottom">
      </app-button>
    </template>
  </v-app-bar>
</template>

<script setup>
  //
import AppButton from "@/components/AppButton";
</script>

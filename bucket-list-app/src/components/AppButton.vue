<template>
  <v-btn :size="buttonSize" @click="buttonAction">
    <v-icon :icon="icon" :size="buttonSize"></v-icon>
    <v-tooltip v-if="toolTip" :location="toolTipLocation" :text="toolTip" activator="parent"></v-tooltip>
  </v-btn>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    buttonSize: {
      type: String,
    },
    icon: {
      type: String,
    },
    toolTip: {
      type: String,
    },
    toolTipLocation: {
      type: String,
    },
    buttonAction: {
      type: Function,
    }
  },
}
</script>

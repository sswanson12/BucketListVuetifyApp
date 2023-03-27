<template>
  <v-card variant="elevated">
    <v-card-item>
      <div>
        <p :text="bucketListItem.goalTitle" class="text-h6 mb-1">
        </p>
        <div :text="bucketListItem.goalDescription" class="text-caption">Some Caption</div>
        <v-divider></v-divider>
        <div :text="'Added on: ' + bucketListItem.dateAdded" class="text-caption">Added on: </div>
      </div>
    </v-card-item>

    <v-card-actions>
      <app-button icon="mdi-check"
                  tool-tip="Mark Goal Completed!"
                  tool-tip-location="bottom"
                  button-action="">
      </app-button>
      <app-button icon="mdi-star"
                  tool-tip="Mark Goal as Favorite!"
                  tool-tip-location="bottom"
                  button-action="">
      </app-button>
      <app-button icon="mdi-pencil"
                  tool-tip="Edit This Goal."
                  tool-tip-location="bottom"
                  button-action="">
      </app-button>
      <app-button icon="mdi-delete"
                  tool-tip="Delete This Goal."
                  tool-tip-location="bottom"
                  button-action="">
      </app-button>
    </v-card-actions>
  </v-card>
</template>

<script>
import AppButton from "@/components/AppButton";
import App from "@/App";
import BucketListItemModel from "@/Models/BucketListItemModel";

export default {
  name: "BucketListItem",
  components: {App, AppButton},
  props: {
    bucketListItem: {
      type: Object,
      required: true,
    },
  },
  // methods: {},
}
</script>

<style scoped>

</style>

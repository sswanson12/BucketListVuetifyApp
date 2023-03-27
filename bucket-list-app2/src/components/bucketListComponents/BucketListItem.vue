<template>
  <v-card id="bucketListItemCard" variant="elevated">
    <div class="favoriteStar">
      <v-icon v-show="!bucketListItem.isFavorite" icon="mdi-star-outline" color="yellow"></v-icon>
      <v-icon v-show="bucketListItem.isFavorite" icon="mdi-star" color="yellow"></v-icon>
    </div>
    <v-card-title>{{bucketListItem.goalTitle}}</v-card-title>
    <v-card-subtitle>{{bucketListItem.dateAdded}}</v-card-subtitle>
    <v-card-text>{{bucketListItem.goalDescription}}</v-card-text>
    <v-card-actions class="d-flex justify-center">
      <app-button :id="'completeButton' + bucketListItem.id"
                  icon="mdi-check"
                  tool-tip="Mark Complete!"
                  tool-tip-location="bottom"
                  :button-action="completeGoal">
      </app-button>
      <app-button :id="'favoriteButton' + bucketListItem.id"
                  icon="mdi-star"
                  tool-tip="Mark as Favorite!"
                  tool-tip-location="bottom"
                  :button-action="favoriteGoal">
      </app-button>
      <app-button :id="'editButton' + bucketListItem.id"
                  icon="mdi-pencil"
                  tool-tip="Edit"
                  tool-tip-location="bottom"
                  :button-action="editGoal">
      </app-button>
      <app-button :id="'deleteButton' + bucketListItem.id"
                  icon="mdi-delete"
                  tool-tip="Delete"
                  tool-tip-location="bottom"
                  :button-action="deleteGoal">
      </app-button>
    </v-card-actions>
  </v-card>
</template>

<script>
import AppButton from "@/components/appComponents/AppButton";
import BucketListItemModel from "@/Models/BucketListItemModel";

export default {
  name: "BucketListItem",
  emits: ["delete-goal", "edit-goal"],
  components: {AppButton},
  props: {
    bucketListItem: {
      type: BucketListItemModel,
      required: true,
    },
  },
  methods: {
    deleteGoal() {
      console.log("emitting delete");
      this.$emit("delete-goal", this.bucketListItem);
    },
    editGoal() {
      console.log("emitting edit");
      this.$emit("edit-goal", this.bucketListItem);
    },
    favoriteGoal(){
      console.log("Favorite-ing: " + this.bucketListItem.goalTitle);
      this.bucketListItem.isFavorite = !this.bucketListItem.isFavorite;
    },
    completeGoal(){
      console.log("Completing: " + this.bucketListItem.goalTitle);
      this.bucketListItem.goalCompleted = !this.bucketListItem.goalCompleted;
    },
  }
}
</script>

<style>
  .favoriteStar{
    position: absolute;
    right: 10px;
    top: 10px;
  }
</style>

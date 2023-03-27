<template>
  <v-sheet :v-show="isEditing" :id="'editGoalModal' + bucketListItem.id" class="editGoalForm ma-2 elevation-4">
    <app-button icon="mdi-close"
                tool-tip="Close"
                tool-tip-location="left"
                :button-action="closeEditGoalModal"
                id="addGoalFormCloseButton"
                class="elevation-0 px-0">
    </app-button>
    <header class="font-weight-medium editGoalFormHeader">Editing - {{bucketListItem.goalTitle}}</header>
    <v-form>
      <v-text-field
        v-model="bucketListItemEdited.goalTitle"
        :counter="20"
        :rules="[v => !!v || 'Item is required']"
        label="Goal Title"
        class="mb-1"
        required
      ></v-text-field>

      <v-text-field
        v-model="bucketListItemEdited.goalDescription"
        label="Description"
        :counter="100"
      ></v-text-field>

      <v-checkbox
        v-model="bucketListItemEdited.isFavorite"
        label="Mark as Favorite?"
      ></v-checkbox>

      <div class="d-flex flex-column">
        <app-button button-text="Edit Goal&nbsp"
                    icon="mdi-pencil"
                    color="primary"
                    @click="editGoal">
        </app-button>

        <app-button button-text="Clear Goal&nbsp"
                    icon="mdi-restart"
                    :button-action="clearGoal"
                    color="warning"
                    class="mt-3">
        </app-button>
      </div>
    </v-form>
  </v-sheet>
</template>

<script>
import AppButton from "@/components/appComponents/AppButton";
import BucketListItemModel from "@/Models/BucketListItemModel";

export default {
  name: "EditGoalModal",
  components: {AppButton},
  props: {
    bucketListItem: {
      type: BucketListItemModel,
      required: true,
    },
    isEditing: {
      type: Boolean,
    }
  },
  methods: {
    editGoal() {
      if (!this.bucketListItemEdited.goalTitle.length < 1){
        this.bucketListItem.goalTitle = this.bucketListItemEdited.goalTitle;
        this.bucketListItem.goalDescription = this.bucketListItemEdited.goalDescription;
        this.bucketListItem.goalCompleted = this.bucketListItemEdited.goalCompleted;
        this.bucketListItem.dateAdded = this.bucketListItemEdited.dateAdded;
        this.bucketListItem.isFavorite = this.bucketListItemEdited.isFavorite;
        this.bucketListItem.categories = this.bucketListItemEdited.categories;
      }
    },
    clearGoal() {
      this.bucketListItemEdited = new BucketListItemModel(this.todaysDate, "", "", false, false);
    },
    closeEditGoalModal() {
      this.$emit("close-edit-goal-modal", this.bucketListItem);
    }
  },
  data: function () {
    return {
      bucketListItemEdited: new BucketListItemModel(
        this.bucketListItem.dateAdded,
        this.bucketListItem.goalTitle,
        this.bucketListItem.goalDescription,
        this.bucketListItem.goalCompleted,
        this.bucketListItem.isFavorite,
        this.bucketListItem.categories),
    }
  }
}
</script>

<style scoped>
  .editGoalForm{
    width: 340px;
    padding: 20px;
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .editGoalFormHeader{
    position: relative;
    text-align: center;
    bottom: 8px;
  }
</style>

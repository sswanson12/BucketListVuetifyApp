<template>
  <v-sheet :v-show="isShown" id="addGoalFormWrapper" class="ma-2 elevation-4">
    <app-button icon="mdi-close"
                tool-tip="Close"
                tool-tip-location="left"
                :button-action="closeForm"
                id="addGoalFormCloseButton"
                class="elevation-0 px-0">
    </app-button>
    <header id="addGoalFormHeader" class="font-weight-medium">Create a Goal!</header>
    <v-form>
      <v-text-field
        v-model="newBucketListItem.goalTitle"
        :counter="20"
        :rules="[v => !!v || 'Item is required']"
        label="Goal Title"
        class="mb-1"
        required
      ></v-text-field>

      <v-text-field
        v-model="newBucketListItem.goalDescription"
        label="Description"
        :counter="100"
      ></v-text-field>

      <v-checkbox
        v-model="newBucketListItem.isFavorite"
        label="Mark as Favorite?"
      ></v-checkbox>

      <div class="d-flex flex-column">
        <app-button button-text="Add Goal"
                    icon="mdi-plus"
                    :button-action="addGoal"
                    color="primary"
                    type="submit">
        </app-button>

        <app-button button-text="Start Over"
                    icon="mdi-refresh"
                    :button-action="clearNewItem"
                    color="error"
                    class="mt-3">
        </app-button>
      </div>
    </v-form>
  </v-sheet>
</template>

<script>
import BucketListItemModel from "@/Models/BucketListItemModel";
import AppButton from "@/components/appComponents/AppButton";

export default {
  name: "AddGoalForm",
  emits: ["add-goal", "close-add-goal-form"],
  components: {AppButton},
  computed: {
    todaysDate() {
      let dd = String(this.currentDate.getDate()).padStart(2, '0');
      let mm = String(this.currentDate.getMonth() + 1).padStart(2, '0'); //January is 0!
      let yyyy = this.currentDate.getFullYear();

      return mm + '/' + dd + '/' + yyyy;
    }
  },
  methods: {
    clearNewItem() {
      this.newBucketListItem = new BucketListItemModel(this.todaysDate, "", "", false, false);
    },
    addGoal(){
      console.log("calling add goal");
      this.$emit("add-goal", this.newBucketListItem);
      this.clearNewItem();
    },
    closeForm(){
      this.$emit("close-add-goal-form")
    }
  },
  data: function() {
    return {
      currentDate: new Date(),
      isShown: false,
      newBucketListItem: new BucketListItemModel(`${String(new Date().getMonth() + 1).padStart(2, '0')}/${String(new Date().getDate()).padStart(2, '0')}/${new Date().getFullYear()}`, "", "", false, false, []),
    }
  },
}
</script>

<style>
  #addGoalFormWrapper{
    position: absolute;
    top: 2vh;
    right: 1.5vw;
    min-width: 350px;
    padding: 20px;
    border-radius: 10px;
  }
  #addGoalFormCloseButton{
    background-color: transparent;
    position: absolute;
    left: -7px;
    top: 6px;
  }
  #addGoalFormHeader{
    position: relative;
    text-align: center;
    bottom: 8px;
  }
</style>

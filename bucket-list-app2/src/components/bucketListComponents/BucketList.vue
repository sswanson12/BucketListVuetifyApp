<template>
  <div id="bucketListContainer" class="bg-brown-lighten-5">
    <v-sheet class="d-flex bg-brown-lighten-5">
      <div class="ma-5 d-flex flex-wrap justify-center">
        <div v-for="bucketListItem in bucketListItems">
          <bucket-list-item :bucket-list-item="bucketListItem"
                            class="bucketListItem"
                            @delete-goal="deleteGoal"
                            @edit-goal="openEditGoalModal">
          </bucket-list-item>
          <edit-goal-modal :id="'editGoalModal' + bucketListItem.id" @close-edit-goal-modal="closeEditGoalModal" :bucket-list-item="bucketListItem" style="display: none;"></edit-goal-modal>
        </div>
      </div>
    </v-sheet>
    <div id="addGoalButtonContainer">
      <app-button class="bg-primary rounded-circle d-block float-end"
                  icon="mdi-plus"
                  button-size="xxx-large"
                  tool-tip="Add a life goal!"
                  tool-tip-location="left"
                  :button-action="openNewGoalForm">
      </app-button>
      <add-goal-form v-if="showingAddGoalForm" @add-goal="addGoal" @close-add-goal-form="closeAddGoalForm"></add-goal-form>
    </div>
  </div>
</template>

<script>
import BucketListItem from "@/components/bucketListComponents/BucketListItem";
import AddGoalForm from "@/components/bucketListComponents/AddGoalForm";
import AppButton from "@/components/appComponents/AppButton";
import EditGoalModal from "@/components/bucketListComponents/EditGoalModal";

export default {
  name: "BucketList",
  components: {EditGoalModal, BucketListItem, AddGoalForm, AppButton},
  props: {
    bucketListItems: {
      type: Array,
    }
  },
  computed: {
    uncompletedBucketListItems() {
      return this.bucketListItems.filter((item) => item.goalCompleted === false);
    },
    completedBucketListItems() {
      return this.bucketListItems.filter((item) => item.goalCompleted === true);
    },
  },
  methods: {
    filterByCategory(category) {
      return this.bucketListItems.filter(item => item.categories.contains(category));
    },
    addGoal(newBucketListItem){
      console.log("Adding Goal: " + newBucketListItem.goalTitle);
      this.bucketListItems.push(newBucketListItem);
    },
    deleteGoal(bucketListItem){
      console.log("Deleting Goal: " + bucketListItem.goalTitle);
      this.bucketListItems.splice(this.bucketListItems.indexOf(bucketListItem), 1);
    },
    openEditGoalModal(bucketListItem){
      console.log("opening edit goal modal");
      document.getElementById("editGoalModal" + bucketListItem.id).style.display="block";
    },
    closeEditGoalModal(bucketListItem){
      console.log("closing edit goal modal");
      document.getElementById("editGoalModal" + bucketListItem.id).style.display="none";
    },
    openNewGoalForm(){
      this.showingAddGoalForm = true;
    },
    closeAddGoalForm(){
      this.showingAddGoalForm = false;
    }
  },
  data: function () {
    return {
      showingAddGoalForm: false,
    }
  }
}
</script>

<style>
  #addGoalButtonContainer{
    position: fixed;
    right: 1vw;
    top: 10vh;
    margin-right: 5px;
  }
  #bucketListContainer {
    min-height: 80vh;
  }
  .bucketListItem {
    height: fit-content;
    width: 340px;
    margin: 10px;
  }
</style>

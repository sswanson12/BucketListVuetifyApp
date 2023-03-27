<template>
  <BucketListItem v-for="bucketListItem in bucketList.bucketListItems" class="mb-3"></BucketListItem>
</template>

<script>
import BucketListItem from "@/components/BucketListItem";
import BucketListItemModel from "@/Models/BucketListItemModel";

export default {
  name: "BucketList",
  components: {BucketListItem},
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
  },
  data() {
    return {
      bucketList: {
        bucketListItems: [

          new BucketListItemModel("10/13/2022", "This goal's title", "this is a goal", false, false),
          new BucketListItemModel("3/13/2023", "Finish this app!", "Finish the bucketlist app", false, true),
        ]
      }
    }
  }
}
</script>

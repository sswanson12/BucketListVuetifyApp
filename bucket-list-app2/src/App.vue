<template>
  <v-app>
    <v-main>
      <app-bar></app-bar>
      <bucket-list :bucket-list-items="bucketListItems"></bucket-list>
      <app-footer></app-footer>
    </v-main>
  </v-app>
</template>

<script>
import BucketListItemModel from "@/Models/BucketListItemModel";
import AppBar from "@/components/appComponents/AppBar";
import AppFooter from "@/components/appComponents/AppFooter";
import BucketList from "@/components/bucketListComponents/BucketList"

export default {
  components: {AppBar, AppFooter, BucketList},
  data() {
    return {
      bucketListItems: [
        new BucketListItemModel("10/13/2022", "This goal's title", "this is a goal", false, false),
        new BucketListItemModel("03/13/2023", "Finish this app!", "Finish the bucketlist app", false, true),
      ]
    }
  }
}
</script>

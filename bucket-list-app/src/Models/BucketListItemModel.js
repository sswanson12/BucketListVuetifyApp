export default class BucketListItemModel{
  constructor(dateAdded, goalTitle, goalDescription, goalCompleted, isFavorite, categories) {
    this.dateAdded = dateAdded
    this.goalTitle = goalTitle
    this.goalDescription = goalDescription
    this.goalCompleted = goalCompleted
    this.isFavorite = isFavorite
    this.categories = categories
  }
}

export default class BucketListItemModel{
  static nextId = 0;

  constructor(dateAdded, goalTitle, goalDescription, goalCompleted, isFavorite, categories) {
    this.id = BucketListItemModel.nextId++;
    this.dateAdded = dateAdded
    this.goalTitle = goalTitle
    this.goalDescription = goalDescription
    this.goalCompleted = goalCompleted
    this.isFavorite = isFavorite
    this.categories = categories
  }
}

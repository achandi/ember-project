import Ember from 'ember';

export default Ember.Component.extend({
  showImageCover: false,
  actions: {
    showImage() {
      this.set('showImageCover', true);
    },
    hideImage() {
      this.set('showImageCover', false);
    },
    increaseLike() {
      var dislikes = this.get('candy.dislikes');
      if (dislikes === 0) {
        this.set('candy.likes', + 1);
      }
    },
    unLike() {
      var likes = this.get('candy.likes');
      if (likes === 0) {
        this.set('candy.dislikes', + 1);
      }
    },
    addToCart(quantity) {
      var candyAvailable = this.get('candy.quantity');
      if (quantity <= candyAvailable) {
        this.set('candy.quantity', candyAvailable - quantity);
      } else {
        alert("There are not enough candies available!");
      }
    }
  }
});

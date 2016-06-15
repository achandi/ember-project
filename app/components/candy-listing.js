import Ember from 'ember';

export default Ember.Component.extend({
  orderList: [],
  showImageCover: false,
  tab: 1,
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
      var candyPrice = this.get('candy.price');
      var candyTitle = this.get('candy.title');
      if (quantity <= candyAvailable) {
        this.set('candy.quantity', candyAvailable - quantity);
        this.get('orderList').pushObjects([{'type':candyTitle, 'quantity':quantity, 'orderTotal':(quantity * candyPrice).toFixed(2)}]);
        alert('you ordered ' + quantity + ' candies at cost of $' + (quantity * candyPrice).toFixed(2));
      } else {
        alert("There are not enough candies available!");
      }
    },    
    collapseDescription() {
      this.set('tab', 1);
      this.$('#description').collapse('toggle');
    },
    collapseRating() {
      this.set('tab', 2);
      this.$('#rating').collapse('toggle');
    },
    collapseOrderInfo() {
      this.set('tab', 3);
      this.$('#orderInfo').collapse('toggle');
    }

  },

  didInsertElement() {
    this.$('#toggle').tooltip({ title: "Double click to open the tab" });
  },

  willDestroyElement() {
    this.$('#toggle').tooltip('destroy');
  },

  tabIsOne: function() {
    return this.get('tab') === 1;
  }.property('tab'),

  tabIsTwo: function() {
    return this.get('tab') === 2;
  }.property('tab'),

  tabIsThree: function() {
    return this.get('tab') === 3;
  }.property('tab')

});

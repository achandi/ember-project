import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  title: attr(),
  price: attr(),
  cover: attr(),
  description: attr(),
  isAvailable: attr(),
  likes: attr(),
  dislikes: attr(),
  quantity: attr() 
});
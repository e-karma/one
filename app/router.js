import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.resource('todos', function(){
    this.route('index', {path:'/'});
    this.route('active');
    this.route('all');
    this.route('completed');
  });
  this.resource('todo');
});

export default Router;

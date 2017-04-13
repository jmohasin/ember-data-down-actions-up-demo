import Ember from 'ember';

export default Ember.Route.extend({
    actions:{
        routeAction(data){
            alert('Hi I am index route Hows going? data got '+data);
        }
    }
});

import Ember from 'ember';

export default Ember.Controller.extend({

     actions:{
        routeAction(data){
            alert('Hi I am index controller Hows going? data got '+data);
        }
    }
});

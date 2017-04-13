import Ember from 'ember';

export default Ember.Component.extend({

    actions:{
        parentComponent3Action(data){
            console.log('Hi From Component 3');
            alert('Hi from Component 3 data got is '+data);            
        }
    }
    
});

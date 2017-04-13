import Ember from 'ember';

export default Ember.Component.extend({

    actions:{
        componentOneAction(data)
        {
            console.log('Calling componentOneAction');
            this.get('componentTwoAction')(data);
        }
    }
});

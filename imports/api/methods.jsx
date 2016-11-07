import {Meteor} from 'meteor/meteor';
import Collections from '/imports/api/collections/collections.jsx';

export default Meteor.methods({
  getBlogInfo: function(){
    return Meteor.settings.private
  },
  createNewCollection: function(name,description){
    Collections.insert({name: name, description: description})
  }
})
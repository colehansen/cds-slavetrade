import template from '../views/entry.html';
import Data from '../Data.js';
import _ from 'lodash';

let getCurrentDate = function() {
  let date = new Date();
  return date.toLocaleString("en-us");
}

let EntryViewModel = function(data) {
  let self = this;

  self = ko.mapping.fromJS(data, {});

  self.displayName = ko.computed(function() {
    return self.indigenousName() || (self.baptismalName && (self.baptismalName.givenName() + " " + self.baptismalName.familyName())) || 'No Name';
  });

  self.save = function() {
    // TODO: post to server
    self.meta.lastModified(getCurrentDate());
    console.log("save");
  }

  return self;
}

export default EntryViewModel;
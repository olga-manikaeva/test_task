questionManager.Collections.questions = Backbone.Collection.extend({
  model: questionManager.Models.question,
  localStorage: new Backbone.LocalStorage('questions')
});

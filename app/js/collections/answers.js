answerManager.Collections.questions = Backbone.Collection.extend({
  model: answerManager.Models.question,
  localStorage: new Backbone.LocalStorage('answers')
});

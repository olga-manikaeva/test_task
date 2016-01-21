questionManager.Views.questions = Marionette.CompositeView.extend({
  template: '#tpl-questions',
  itemView: questionManager.Views.question,
  itemViewContainer: '.questions-container',
  triggers: {
    'click .add-question-btn': 'addquestion:clicked'
  }
});

questionManager.Views.questions = Marionette.CompositeView.extend({
  template: '#tpl-answers',
  itemView: questionManager.Views.question,
  itemViewContainer: '.answers-container',
  triggers: {
    'click .add-question-btn': 'addanswer:clicked'
  }
});

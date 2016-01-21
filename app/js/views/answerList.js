answerManager.Views.answerList = Marionette.ItemView.extend({
  template: '#tpl-answers',

  ui: {
//    text_aInput: '.question-text_a-input',
//    nickname_aInput: '.question-nickname_a-input'

  },

  events: {
    'submit .contract-form': 'onFormSubmit'
  },

  triggers: {
    'click .form-cancel-btn': 'form:canceled'
  },

  serializeData: function() {
    return _.extend(this.model.toJSON(), {
      isNew: this.model.isNew()
    });
  },

  onFormSubmit: function(e) {
    e.preventDefault();

    this.trigger('form:submitted', {
//      nickname: this.ui.nicknameInput.val(),
//      theme: this.ui.themeInput.val(),
//      text_q: this.ui.text_qInput.val(),
      text_a: this.ui.text_aInput.val(),
      nickname_a: this.ui.nickname_aInput.val()

    });
  }
});

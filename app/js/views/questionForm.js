questionManager.Views.questionForm = Marionette.ItemView.extend({
  template: '#tpl-new-question',

  ui: {
    nicknameInput: '.question-nickname-input',
    themeInput: '.question-theme-input',
    text_qInput: '.question-text_q-input'
//      ,
//    text_aInput: '.question-text_a-input'
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
      nickname: this.ui.nicknameInput.val(),
      theme: this.ui.themeInput.val(),
      text_q: this.ui.text_qInput.val()
//        ,
//      text_a: this.ui.text_aInput.val()
    });
  }
});

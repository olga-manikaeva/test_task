questionManager.Models.question = Backbone.Model.extend({
  defaults: {
    nickname: null,
    theme: null,
    text_q: null,
    text_a: null,
    nickname_a: null

  }

});

var model = new clsModel();
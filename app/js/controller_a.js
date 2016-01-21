answerManager.Controller = Marionette.Controller.extend({
  initialize: function(options) {
    this._router = options.router;
    this._mainRegion = options.mainRegion;
    this._answers = options.answers;

    this._answers.fetch();

    if (this._answers.isEmpty()) {
      this._createSampleData();
    }
  },

  showanswers: function() {
    var answersView = new answerManager.Views.answers({
      collection: this._answers
    });

    this.listenTo(answersView, 'addanswer:clicked', this.newanswer);
    this.listenTo(answersView, 'itemview:delete:clicked', function(answerView) {
        answerView.model.destroy();
    });
    this.listenTo(answerView, 'itemview:edit:clicked', function(answerView) {
      this.editanswer(answerView.model.id);
    });

      answerManager.mainRegion.show(answersView);

    this._router.navigate('answers');
  },

  newanswer: function() {
    var newanswerForm = new answerManager.Views.answernForm({
      model: new answerManager.Models.answer()
    });

    this.listenTo(newanswerForm, 'form:submitted', function(attrs) {
      attrs.avatar = _.random(1, 15) + '.jpg';
      this._answers.create(attrs);
      this.showanswers();
    });

    this.listenTo(newanswerForm, 'form:canceled', this.showanswers);

      answerManager.mainRegion.show(newanswerForm);

    this._router.navigate('answers/new');
  },

  editanswer: function(id) {
    var answer = this._answers.get(id),
        editanswerForm;

    if (answer) {
      editanswerForm = new answerManager.Views.answerForm({
          model: answer
      });

      this.listenTo(editanswerForm, 'form:submitted', function(attrs) {
          answer.save(attrs);
        this.showanswers();
      });

      this.listenTo(editanswerForm, 'form:canceled', this.showanswers);

        answerManager.mainRegion.show(editanswerForm);

      this._router.navigate('answers/edit/' + id);
    } else {
      this.showanswers();
    }
  },

  lookanswer: function(id) {
        var answer = this._answers.get(id),
            lookanswerForm;

        if (answer) {
            lookanswerForm = new answerManager.Views.answerList({
                model: answer
            });

            this.listenTo(lookanswerForm, 'form:submitted', function(attrs) {
                answer.save(attrs);
                this.showanswers();
            });

            this.listenTo(lookanswerForm, 'form:canceled', this.showanswers);

            answerManager.mainRegion.show(lookqanswerForm);

            this._router.navigate('answers/look/' + id);
        } else {
            this.showanswers();
        }
    },

  _createSampleData: function() {
    _.each([
      {
        id: 1,
        theme : 'Theme_1',
        nickname: 'OlgaM',
        text_q: 'Question-1'
      },
      {
        id: 2,
          theme : 'Theme_2',
          nickname: 'OlgaM',
          text_q: 'Question-1'
      },
      {
        id: 3,
          theme : 'Theme_3',
          nickname: 'OlgaM',
          text_q: 'Question-1'
      },
      {
        id: 4,
          theme : 'Theme_41',
          nickname: 'OlgaM',
          text_q: 'Question-1'
      },
      {
        id: 5,
          theme : 'Theme_51',
          nickname: 'OlgaM',
          text_q: 'Question-1'
      },
      {
        id: 6,
          theme : 'Theme_6',
          nickname: 'OlgaM1',
          text_q: 'Question-1',
          text_a: 'Answer-1'
      }
    ],
        function(answer) {
        this._answers.create(answer);
      }, this);
  }

});

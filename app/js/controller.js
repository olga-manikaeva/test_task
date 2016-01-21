questionManager.Controller = Marionette.Controller.extend({
  initialize: function(options) {
    this._router = options.router;
    this._mainRegion = options.mainRegion;
    this._questions = options.questions;

    this._questions.fetch();

    if (this._questions.isEmpty()) {
      this._createSampleData();
    }
  },

  showquestions: function() {
    var questionsView = new questionManager.Views.questions({
      collection: this._questions
    });

    this.listenTo(questionsView, 'addquestion:clicked', this.newquestion);
    this.listenTo(questionsView, 'itemview:delete:clicked', function(questionView) {
      questionView.model.destroy();
    });
    this.listenTo(questionsView, 'itemview:edit:clicked', function(questionView) {
      this.editquestion(questionView.model.id);
    });

    questionManager.mainRegion.show(questionsView);

    this._router.navigate('questions');
  },

  newquestion: function() {
    var newquestionForm = new questionManager.Views.questionForm({
      model: new questionManager.Models.question()
    });

    this.listenTo(newquestionForm, 'form:submitted', function(attrs) {
      attrs.avatar = _.random(1, 15) + '.jpg';
      this._questions.create(attrs);
      this.showquestions();
    });

    this.listenTo(newquestionForm, 'form:canceled', this.showquestions);

    questionManager.mainRegion.show(newquestionForm);

    this._router.navigate('questions/new');
  },

  editquestion: function(id) {
    var question = this._questions.get(id),
        editquestionForm;

    if (question) {
      editquestionForm = new questionManager.Views.questionForm({
          model: question
      });

      this.listenTo(editquestionForm, 'form:submitted', function(attrs) {
        question.save(attrs);
        this.showquestions();
      });

      this.listenTo(editquestionForm, 'form:canceled', this.showquestions);

      questionManager.mainRegion.show(editquestionForm);

      this._router.navigate('questions/edit/' + id);
    } else {
      this.showquestions();
    }
  },

  lookquestion: function(id) {
        var question = this._questions.get(id),
            lookquestionForm;

        if (question) {
            lookquestionForm = new questionManager.Views.questionList({
                model: question
            });

            this.listenTo(lookquestionForm, 'form:submitted', function(attrs) {
                question.save(attrs);
                this.showquestions();
            });

            this.listenTo(lookquestionForm, 'form:canceled', this.showquestions);

            questionManager.mainRegion.show(lookquestionForm);

            this._router.navigate('questions/look/' + id);
        } else {
            this.showquestions();
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
          text_q: 'Question-2'

      },
      {
        id: 3,
          theme : 'Theme_3',
          nickname: 'OlgaM',
          text_q: 'Question-3'
      },
      {
        id: 4,
          theme : 'Theme_41',
          nickname: 'OlgaM',
          text_q: 'Question-4'
      },
      {
        id: 5,
          theme : 'Theme_51',
          nickname: 'OlgaM',
          text_q: 'Question-5'
      },
      {
        id: 6,
          theme : 'Theme_6',
          nickname: 'OlgaM2',
          text_q: 'Question-6'
      }
    ],
        function(question) {
        this._questions.create(question);
      }, this);
  }

});

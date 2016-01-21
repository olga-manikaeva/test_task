var questionManager = new Marionette.Application({
  Models: {},
  Collections: {},
  Views: {}
});

questionManager.addRegions({
  mainRegion: '.main-container'
});

questionManager.addInitializer(function(data) {
  var questions = new questionManager.Collections.questions(),
      router = new questionManager.Router(),
      controller = new questionManager.Controller({
        questions: questions,
        router: router,
        mainRegion: this.mainRegion
      });

  router.processAppRoutes(controller, {
    'questions': 'showquestions',
    'questions/new': 'newquestion',
    'questions/edit/:id': 'editquestion',
    'questions/look/:id': 'lookquestion'

  });
});

questionManager.on('initialize:after', function(options){
  if (Backbone.history){
    Backbone.history.start();
  }
});


var answerManager = new Marionette.Application({
    Models: {},
    Collections: {},
    Views: {}
});

answerManager.addRegions({
    mainRegion: '.main-container'
});

answerManager.addInitializer(function(data) {
    var questions = new answerManager.Collections.answers(),
        router = new answerManager.Router(),
        controller = new answerManager.Controller({
            questions: questions,
            router: router,
            mainRegion: this.mainRegion
        });

    router.processAppRoutes(controller, {
        'questions': 'showquestions',
        'questions/new': 'newquestion',
        'questions/edit/:id': 'editquestion',
        'questions/look/:id': 'lookquestion'

    });
});

answerManager.on('initialize:after', function(options){
    if (Backbone.history){
        Backbone.history.start();
    }
});
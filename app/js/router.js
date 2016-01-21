questionManager.Router = Marionette.AppRouter.extend({
  routes: {
    '': 'home'
  },

  home: function() {
    this.navigate('questions', {
      trigger: true,
      replace: true
    });
  }
});

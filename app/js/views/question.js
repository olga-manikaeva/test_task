questionManager.Views.question = Marionette.ItemView.extend({
  tagName: 'li',
  className: 'media col-md-12 col-lg-12',
  template: '#tpl-question',
  triggers: {
    'click .delete-contract': 'delete:clicked',
    'click .edit-contract': 'edit:clicked',
    'click .look-contract': 'look:clicked'

  }
});

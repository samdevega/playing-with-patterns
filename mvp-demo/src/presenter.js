((scope) => {
  class Presenter {
    model
    view

    constructor(model, view) {
      this.model = model
      this.view = view
      this.view.subscribesOnClick(() => this.view.showAlert('Bar'))
      this.view.setText(this.model.getText())
    }
  }
  scope.Presenter = Presenter
  scope.FactoryPresenter = () => new scope.Presenter(new scope.Model(), new scope.View())
  scope.VueFactoryPresenter = () => new scope.Presenter(new scope.Model(), new scope.VueView())
})(scope)
((scope) => {
  class Model {
    getText() {
      return 'Foo'
    }
  }
  scope.Model = Model
})(scope)
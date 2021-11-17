((scope) => {
  class StubView {
    inputText
    handler
    showAlert

    setText(text) {
      this.inputText(text)
    }

    subscribesOnClick(handler) {
      this.handler = handler
    }

    showAlert(text) {
      this.showAlert(text)
    }
  }

  class View {
    button

    constructor() {
      this.button = document.querySelector('#myButton')
    }

    subscribesOnClick(handler) {
      this.button.onclick = handler
    }

    setText(text) {
      this.button.innerHTML = text
    }

    showAlert(text) {
      alert(text)
    }
  }
  scope.View = View
  scope.StubView = StubView
})(scope)
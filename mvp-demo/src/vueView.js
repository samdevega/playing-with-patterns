((scope) => {
  class View {
    button
    suscriptionOnClickHandler
    text
    alertText

    constructor() {}

    subscribesOnClick(handler) {
      this.suscriptionOnClickHandler = handler
    }

    setText(text) {
      this.text = text
      this.render()
    }

    showAlert(text) {
      this.alertText = text
      this.render()
    }

    render() {
      Vue.createApp({
        template: `<div>
            <p>{{ vueAlert }}</p>
            <button @click="suscribesVueOnClickHandler">{{ vueText }}</button>
          </div>`,
        data() {
          return {}
        },
        computed: {
          vueText: () => this.text,
          vueAlert: () => this.alertText,
        },
        methods: {
          suscribesVueOnClickHandler: () => this.suscriptionOnClickHandler(),
        },
      }).mount('#app')
    }
  }
  scope.VueView = View
})(scope)
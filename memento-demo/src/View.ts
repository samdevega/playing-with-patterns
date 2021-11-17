export class View {
  private subscriptionToSaveRequested: (state: string) => void
  private subscriptionToClickPreviousRequested: () => string
  private subscriptionToClickNextRequested: () => string

  constructor () {
    document
    .querySelector('#saveStateButton')
    .addEventListener('click', () => {
      const myText: HTMLInputElement = document.querySelector('#myText')
      this.subscriptionToSaveRequested(myText.value)
    })
    document
    .querySelector('#previousStateButton')
    .addEventListener('click', () => {
      const myText: HTMLInputElement = document.querySelector('#myText')
      myText.value = this.subscriptionToClickPreviousRequested()
    })
    document
    .querySelector('#nextStateButton')
    .addEventListener('click', () => {
      const myText: HTMLInputElement = document.querySelector('#myText')
      myText.value = this.subscriptionToClickNextRequested()
    })
  }
  
  subscribesToSaveRequested (handler: (state: string) => void) {
    this.subscriptionToSaveRequested = handler
  }
  subscribesToClickPreviousRequested (handler: () => string) {
    this.subscriptionToClickPreviousRequested = handler
  }
  subscribesToClickNextRequested (handler: () => string) {  
    this.subscriptionToClickNextRequested = handler
  }
}
import { Caretaker } from './Caretaker'
import { Memento } from './Memento'
import { View } from './View'

export class Presenter {
  private stateIndex: number = 0

  constructor (private caretaker: Caretaker, private view: View) {
    this.view.subscribesToSaveRequested((state: string) => {
      this.caretaker.addMemento(new Memento(state))
      this.stateIndex++
    })
    this.view.subscribesToClickPreviousRequested(() => {
      this.stateIndex--
      return this.caretaker.getMemento(this.stateIndex).getSavedState()
    })
    this.view.subscribesToClickNextRequested(() => {
      this.stateIndex++
      return this.caretaker.getMemento(this.stateIndex).getSavedState()
    })
  }
}

new Presenter(new Caretaker(), new View())
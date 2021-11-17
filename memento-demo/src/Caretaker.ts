import { Memento } from './Memento'

export class Caretaker {
  private savedStates: Array<Memento> = []

  addMemento (memento: Memento): void {
    this.savedStates.push(memento)
  }
  getMemento (index: number): Memento {
    return this.savedStates[index]
  }
}
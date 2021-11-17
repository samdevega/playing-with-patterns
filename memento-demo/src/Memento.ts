export class Memento {
  constructor (private state: string) {}

  getSavedState (): string {
    return this.state
  }
}
import Rental from "./Rental";
import Movie from "./Movie";

export default class Customer {
  private _name: string
  private _rentals: Array<Rental>
  constructor(name: string) {
    this._name = name
    this._rentals = new Array
  }
  public setRental(rental: Rental): void {
    this._rentals.push(rental)
  }
  public getName(): string {
    return this._name
  }
  public statement(): string {
    let totalAmount: number
    let frequentRenterPoints: number = 0
    let rentals: Array<Rental> = this._rentals

    let result: string = `Rental Record for ${this.getName()} \n`

    rentals.forEach((rental) => {
      frequentRenterPoints += 1
      frequentRenterPoints += rental.getFrequentRentalPoint()

      result += `
        \t ${rental.getMovie().getTitle()} \t ${rental.getCharge()} \n
      `
      totalAmount += rental.getCharge()
    })
    return result
  }
}

import Movie from "./Movie";

export default class Rental {
  private _movie: Movie
  private _daysRented: number

  constructor(movie: Movie, daysRented: number) {
    this._movie = movie
    this._daysRented = daysRented
  }

  public getDaysRented(): number {
    return this._daysRented;
  }
  public getMovie(): Movie {
    return this._movie;
  }
  public getCharge(): number {
    return this.getMovie().getCharge(this.getDaysRented())
  }
  public getFrequentRentalPoint(): number {
    if(this.getMovie().getPriceCode() == Movie.NEW_RELEASE && this.getDaysRented() > 1) {
      return 1
    } else {
      return 0
    }
  }
}
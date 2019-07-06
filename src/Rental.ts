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
}
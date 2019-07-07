export default class Movie {
  public static CHILDRENS: number   = 2
  public static REGULAR: number     = 0
  public static NEW_RELEASE: number = 1

  private _title: string
  private _priceCode: number

  constructor(title: string, priceCode: number) {
    this._title     = title
    this._priceCode = priceCode
  }

  public getPriceCode(): number {
    return this._priceCode;
  }
  public setPricecode(arg: number): void {
    this._priceCode = arg;
  }
  public getTitle(): string {
    return this._title
  }
  public getCharge(daysRented: number): number {
    let result: number = 0;
    switch (this.getPriceCode()) {
      case Movie.REGULAR:
        result += 2.0
        if(daysRented > 2) {
          result += (daysRented -2) * 1.5
        }
        break;
      case Movie.NEW_RELEASE:
        result += daysRented * 3;
        break
      case Movie.CHILDRENS:
        result += 1.5
        if(daysRented > 3) {
          result += (daysRented -3) *1.5
        }
        break
      default:
        break;
    }
    return result
  }
}


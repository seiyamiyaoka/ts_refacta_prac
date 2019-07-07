import { describe, it } from 'mocha'
import { assert } from 'chai'
import Movie from '../src/Movie'
import Rental from '../src/Rental'

describe('rental', () => {
  const disney = new Movie("pooh", 1)
  const tarouRental = new Rental(disney, 3)
  it('getDaysRentedはレンタル日数を取得できる', () => {
    assert.equal(tarouRental.getDaysRented(), 3)
  })
  it('getMovieは借りた映画を取得できる', () => {
    assert.equal(tarouRental.getMovie(), disney)
  })
  describe('getCharge()は借りた映画の別でポイントが変化する', () => {
    it('new releaseの場合は借りた日数の3倍のポイントの9になる', () => {
      assert.equal(tarouRental.getCharge(), 9)
    })
  })
})
import { describe, it } from 'mocha'
import { assert } from 'chai'
import Movie from '../src/Movie'
import Rental from '../src/Rental'

describe('rental', () => {
  it('初期化する', () => {
    const disney = new Movie("pooh", 100)
    const tarouRental = new Rental(disney, 4)
    assert.equal(tarouRental.getDaysRented(), 4)
    assert.equal(tarouRental.getMovie(), disney)
  })
})
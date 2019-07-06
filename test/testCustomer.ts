import { describe, it } from 'mocha'
import { assert } from 'chai'
import Movie from '../src/Movie'
import Rental from '../src/Rental'
import Customer from '../src/Customer'

describe('rental', () => {
  it('初期化する', () => {
    const disney = new Movie("pooh", 100)
    const tarouRental = new Rental(disney, 4)
    const customer = new Customer("tarou")
    assert.equal(customer.getName(), "tarou")
    customer.setRental(tarouRental)
    assert.equal(customer.statement(), "Rental Record for tarou \n\n        \t pooh \t 0 \n\n      ")
  })
})
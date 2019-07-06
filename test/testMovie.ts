import { describe, it } from 'mocha'
import { assert } from 'chai'
import Movie from '../src/Movie'

describe('movie', () => {
  it('初期化する', () => {
    const disney = new Movie("pooh", 100)
    assert.equal(typeof(disney), "object")
    assert.equal(disney.getPriceCode(), 100)
    assert.equal(disney.getTitle(), "pooh")
  })
})
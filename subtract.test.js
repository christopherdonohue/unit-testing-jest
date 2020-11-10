const { TestScheduler } = require('jest')
const subtract = require('./subtract')

test('Preparing to subtract two numbers', () => {
    expect(subtract(2, 1)).toBe(1)
})
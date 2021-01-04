const app = require('./')
const request = require('supertest')
const { fibonacci } = require('./fibonacci')

describe("Fibonacci function", () => {
  it("Get an error passing a string", async () => {
    const result = await fibonacci("hey")

    expect(result).toEqual("Error, position must be a number")
  })

  it("Get correct fibonacci's number", async () => {
    const result = await fibonacci(6)

    expect(result).toEqual(8)
  })
})

describe("/fibonacci", () => {
  it("GET success with position=3", async () => {
    const res = await request(app).get('/fibonacci?position=3')
  
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({
      response: "OK",
      result: 2
    })
  })

  it("GET error with position=string", async () => {
    const res = await request(app).get('/fibonacci?position=something')
  
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({
      response: "error",
      result: "You need to pass a number"
    })
  })

  it("GET error with no position", async () => {
    const res = await request(app).get('/fibonacci')
  
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({
      response: "error",
      result: "You need to pass a number with parameter 'position'"
    })
  })
})
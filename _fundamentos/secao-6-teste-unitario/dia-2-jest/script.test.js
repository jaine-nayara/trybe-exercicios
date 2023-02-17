const myRemove = require('./script');

const describe("Função myRemove retorna um array sem um elemento",() => {
  test("a função myRemove recebe [1,2,3,4] e retorna [1,2,4,]", () => {
    expect(myRemove([1,2,3,4]),3).toEqual([1,2,4])
  })
  
});
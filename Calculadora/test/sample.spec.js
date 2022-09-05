import assert from "assert"

describe('Meu Primeiro teste', () => {
	it('Verificar a variável "aux"', () => {
		let aux = 2
		assert.strictEqual(aux, 2)
	
	}) 

	it('Verificar uma desigualdade', () => {
		let aux = 'carro'
		assert.strictEqual(aux, 'carro')

})
})

describe('Meu Segundo teste', () => {
	it('Verificcar uma desigualdade', () => {
		let aux = 2
		assert.notStrictEqual(aux,'2')
	
	}) 

	it('Verificar uma desigualdade', () => {
		let aux = 'carro'
		assert.notStrictEqual(aux, 'charrete')

})
})
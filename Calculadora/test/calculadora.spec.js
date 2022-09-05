import assert from 'assert'
import chai from 'chai'
import Calculadora from '../src/Calculadora.js'

const expect = chai.expect

describe('Testes de soma', () => {
    it('Deve somar 20 e 15 resultado em 35', () => {
        let resultado = Calculadora.soma(20, 15)
        expect(resultado).to.be.eq(35)

        })
        it('Deve subtrair -4 e 10 resultando em 1', () => {
            let resultado = Calculadora.soma(-4, 10)
        expect(resultado).to.be.eq(6)
        })
        }) 
        //Teste de TDD 
    describe('Testes de subtração', () => {
        it('Deve subtrair 4 e 5 resultado em -1', () => {
        let resultado = Calculadora.sub(4, 5)
        expect(resultado).to.be.eq(-1)

        })
    })

     describe('Testes de multiplicação', () => {
        it('Deve multiplicar 10 e 5 resultado em 50', () => {
        let resultado = Calculadora.mult(10, 5)
        expect(resultado).to.be.eq(50)

        })
    })

     describe('Testes de divisão', () => {
        it('Deve dividir 100 e 25 resultado em 4', () => {
        let resultado = Calculadora.div(100, 25)
        expect(resultado).to.be.eq(4)

        })
    })

    describe('Testes de Operações da Calculadora', () => {
        it('Test deve somar 2 numeros', () => {
        let resultado = Calculadora.soma(100, 25)
        expect(resultado).to.be.eq(125)

        })
    })

    describe('Testes de Operações da Calculadora', () => {
        it('Test deve subtrair 2 numeros', () => {
        let resultado = Calculadora.mult(100, 10)
        expect(resultado).to.be.eq(1000)

        })
    })

    describe('Testes de Operações da Calculadora', () => {
        it('Test deve extrair raiz de 25 resultado é 5', () => {
        let resultado = Calculadora.raiz(5, 25)
        expect(resultado).to.be.eq(5)

        })
    })

    describe('Testes de Operações da Calculadora', () => {
        it('Test deve extrair raiz de 100 resultado é 25', () => {
        let resultado = Calculadora.raiz(25, 100)
        expect(resultado).to.be.eq(25)

        })
    })
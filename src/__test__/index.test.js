const randomStrings = require('../index')

describe('Pruebas de index randomStrings', () => {
    test('Probar funcionalidad random', () => {
        expect(typeof(randomStrings())).toBe('string')
    })

    test('Comprobar que no existe una ciudad', () => {
        expect(randomStrings()).not.toMatch(/Cordoba/)
    })
});
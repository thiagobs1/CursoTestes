import { Utils } from "../app/Utils";

describe('Utils test suit', () => {

    beforeEach(() => {
        console.log('before each');
    })

    beforeAll(() => {
        console.log('before all');
    })

    test('first test', () => {
        const result = Utils.toUpperCase('abc');
        expect(result).toBe('ABC')
    });

    it('parse simple URL', () => {
        const parsedUrl = Utils.parseUrl('http://localhost:8080/login');
        expect(parsedUrl.href).toBe('http://localhost:8080/login');
        expect(parsedUrl.port).toBe('8080');
        expect(parsedUrl.protocol).toBe('http:'); // toBe to test primitive types/values and toEqual for the others
        expect(parsedUrl.query).toEqual({});
    })

    it('parse URL with query', () => {
        const parsedUrl = Utils.parseUrl('http://localhost:8080/login?user=user&password=pass');
        const expectedQuery = {
            user: 'user',
            password: 'pass'
        }
        expect(parsedUrl.query).toEqual(expectedQuery);
    });

    test('test invalid URL', () => {
        expect(() => {
            Utils.parseUrl('');
        }).toThrowError();
    });

    test('test invalid URL with try catch', () => {
        try {
            Utils.parseUrl('');
        } catch (error) {
            expect(error).toBeInstanceOf(Error)
            expect(error).toHaveProperty('message', 'empty URL!');
        }
    });
});
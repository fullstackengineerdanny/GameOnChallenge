const fetchQuiz = require('./fetchQuiz')
var quiz = undefined

describe('Fetches an object with a minimum structure of { int pages, string q11, array a11, string q12, array a12, string q13, array a13, string q14, array a14 }', () =>
{
    it('Must receive a value to be verified to be a JSON object', async () => { quiz = await fetchQuiz(); expect(quiz).not.toBe(undefined) })
    it('Must have a minimum of 9 keys (one for the pages and four pairs of questions and answers for the first page)', () => expect(Object.keys(quiz).length).toBeGreaterThanOrEqual(9))
    it('Must have an integer page property', () => expect('pages' in quiz && (typeof quiz['pages'] === 'number' || quiz['q1'] instanceof Number) && Number.isInteger(quiz['pages'])).toBe(true))
    it('Must have a string q11 property', () => expect('q11' in quiz && (typeof quiz['q11'] === 'string' || quiz['q11'] instanceof String)).toBe(true))
    it('Must have an array a11 property', () => expect('a11' in quiz && Array.isArray(quiz['a11'])).toBe(true))
    it('Must have a string q12 property', () => expect('q12' in quiz && (typeof quiz['q12'] === 'string' || quiz['q12'] instanceof String)).toBe(true))
    it('Must have an array a12 property', () => expect('a12' in quiz && Array.isArray(quiz['a12'])).toBe(true))
    it('Must have a string q13 property', () => expect('q13' in quiz && (typeof quiz['q13'] === 'string' || quiz['q13'] instanceof String)).toBe(true))
    it('Must have an array a13 property', () => expect('a13' in quiz && Array.isArray(quiz['a13'])).toBe(true))
    it('Must have a string q14 property', () => expect('q14' in quiz && (typeof quiz['q14'] === 'string' || quiz['q14'] instanceof String)).toBe(true))
    it('Must have an array a14 property', () => expect('a14' in quiz && Array.isArray(quiz['a14'])).toBe(true))
})
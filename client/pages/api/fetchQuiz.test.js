const { isTargetLikeServerless } = require('next/dist/next-server/server/config')
const fetchQuiz = require('./fetchQuiz')
const quiz = fetchQuiz()

describe('Fetches an object of structure { string q1, array a1, string q2, array a2, string q3, array a3, string q4, array a4 }', () =>
{
    it('Must have eight keys', () => expect(Object.keys(quiz).length).toBe(8))
    it('Must have a string q1 property', () => expect('q1' in quiz && (typeof quiz['q1'] === 'string' || quiz['q1'] instanceof String)).toBe(true))
    it('Must have an array a1 property', () => expect('a1' in quiz && Array.isArray(quiz['a1'])).toBe(true))
    it('Must have a string q2 property', () => expect('q2' in quiz && (typeof quiz['q2'] === 'string' || quiz['q2'] instanceof String)).toBe(true))
    it('Must have an array a2 property', () => expect('a2' in quiz && Array.isArray(quiz['a2'])).toBe(true))
    it('Must have a string q3 property', () => expect('q3' in quiz && (typeof quiz['q3'] === 'string' || quiz['q3'] instanceof String)).toBe(true))
    it('Must have an array a3 property', () => expect('a3' in quiz && Array.isArray(quiz['a3'])).toBe(true))
    it('Must have a string q4 property', () => expect('q4' in quiz && (typeof quiz['q4'] === 'string' || quiz['q4'] instanceof String)).toBe(true))
    it('Must have an array a4 property', () => expect('a4' in quiz && Array.isArray(quiz['a4'])).toBe(true))
})
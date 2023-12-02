import Exercise from "../model/Exercise";

let exercise: Exercise = new Exercise('  Leg Press', 72, 4);

describe('testing Exercise file', () =>{
    test('getName function', () =>{
        expect(exercise.getName()).toMatch('Leg Press');
    }),
    test('getWeight function', () =>{
        expect(exercise.getWeight()).toBe(72);
    }),
    test('getSequence function', () =>{
        expect(exercise.getSequence()).toBe(4);
    })
});
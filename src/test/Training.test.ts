import Training from "../model/Training";
import Exercise from "../model/Exercise";

let exercise: Exercise = new Exercise('Leg Press', 72, 4);

let training: Training = new Training('Segunda', 'Treino de Perna');


describe('testing Training file', () =>{
    test('getName function', () =>{
        expect(training.getName()).toMatch('Segunda');
    }),
    test('getDescription function', () =>{
        expect(training.getDescription()).toMatch('Treino de Perna');
    })
});
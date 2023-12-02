import Coach from "../model/Coach";

let coach: Coach = new Coach('Leandro', 'pnunesleandro@gmail.com',42988133758);

describe('testing Coach file', () =>{
    test('getName function', () =>{
        expect(coach.getName()).toMatch('Leandro');
    }),
    test('getEmail function', () =>{
        expect(coach.getEmail()).toMatch('pnunesleandro@gmail.com');
    }),
    test('getCellphone function', () =>{
        expect(coach.getCellphone()).toBe(42988133758);
    })
});
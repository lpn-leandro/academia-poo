import Client from "../model/Client";

let client: Client = new Client('      Leandro', 'pnunesleandro@gmail.com',42988133758,1);

describe('testing Client file', () =>{
    test('getName function', () =>{
        expect(client.getName()).toMatch('Leandro');
    }),
    test('getEmail function', () =>{
        expect(client.getEmail()).toMatch('pnunesleandro@gmail.com');
    }),
    test('getCellphone function', () =>{
        expect(client.getCellphone()).toBe(42988133758);
    }),
    test('getEnrollment function', () =>{
        expect(client.getEnrollment()).toBe(1);
    })
});
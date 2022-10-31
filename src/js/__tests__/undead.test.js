import Undead from '../undead';

test('get object Undead', () => {
  const description = new Undead('Undead');
  const result = {
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defense: 25,
  };
  expect(description).toEqual(result);
});

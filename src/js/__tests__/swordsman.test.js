import Swordsman from '../swordsman';

test('get object Swordsman', () => {
  const description = new Swordsman('Swordsman');
  const result = {
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defense: 10,
  };
  expect(description).toEqual(result);
});

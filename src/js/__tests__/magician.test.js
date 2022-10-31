import Magician from '../magicain';

test('get object Magician', () => {
  const description = new Magician('Magician');
  const result = {
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defense: 40,
  };
  expect(description).toEqual(result);
});

import Daemon from '../deamon';

test('get object Deamon', () => {
  const description = new Daemon('Deamon');
  const result = {
    name: 'Deamon',
    type: 'Deamon',
    health: 100,
    level: 1,
    attack: 10,
    defense: 40,
  };
  expect(description).toEqual(result);
});

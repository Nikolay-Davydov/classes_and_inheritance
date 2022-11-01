import Character from '../character';

test('get object Character', () => {
  const description = new Character('Man', 'Bowman');
  const result = {
    name: 'Man',
    type: 'Bowman',
    health: 100,
    level: 1,
  };
  expect(description).toEqual(result);
});

test('get object Character no type', () => {
  const description = () => new Character('Man', 'Surfer');
  expect(description).toThrow('Персонаж не существует');
});

test('error name min', () => {
  const description = () => new Character('1', 'Bowman');
  expect(description).toThrow('Имя должно быть сткрой от 2 до 10 символов включительно');
});

test('error name max', () => {
  const description = () => new Character('SuperGiperPower', 'Bowman');
  expect(description).toThrow('Имя должно быть сткрой от 2 до 10 символов включительно');
});

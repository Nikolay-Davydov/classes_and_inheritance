import Character from '../character';

test('get object Character', () => {
  const description = new Character('Man');
  const result = {
    name: 'Man', health: 100, level: 1,
  };
  expect(description).toEqual(result);
});

test('error name min', () => {
  const description = () => new Character('1');
  expect(description).toThrow('Имя должно быть сткрой от 2 до 10 символов включительно');
});

test('error name max', () => {
  const description = () => new Character('SuperGiperPower');
  expect(description).toThrow('Имя должно быть сткрой от 2 до 10 символов включительно');
});

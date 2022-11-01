export default class Character {
  constructor(name, type) {
    const typeHeroes = [
      'Bowman',
      'Daemon',
      'Magician',
      'Swordsman',
      'Undead',
      'Zombie',
    ];

    this.type = type;
    this.name = name;
    this.level = 1;
    this.health = 100;

    if (name === undefined || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть сткрой от 2 до 10 символов включительно');
    }
    if (!typeHeroes.includes(type)) {
      throw new Error('Персонаж не существует');
    }
  }
}

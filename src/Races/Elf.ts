import Race from './Race';

export default class Elf extends Race {
  static countInstances = 0;

  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints: number = 99,
  ) {
    super(name, dexterity);
    Elf.countInstances += 1;
  }

  static createdRacesInstances(): number {
    return Elf.countInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

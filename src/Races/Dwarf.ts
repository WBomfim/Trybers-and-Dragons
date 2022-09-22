import Race from './Race';

export default class Dwarf extends Race {
  static countInstances = 0;

  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints: number = 80,
  ) {
    super(name, dexterity);
    Dwarf.countInstances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.countInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

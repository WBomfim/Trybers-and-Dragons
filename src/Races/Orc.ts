import Race from './Race';

export default class Orc extends Race {
  static countInstances = 0;

  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints: number = 74,
  ) {
    super(name, dexterity);
    Orc.countInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc.countInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

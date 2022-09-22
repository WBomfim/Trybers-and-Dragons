import Race from './Race';

export default class Halfling extends Race {
  static countInstances = 0;

  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints: number = 60,
  ) {
    super(name, dexterity);
    Halfling.countInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.countInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

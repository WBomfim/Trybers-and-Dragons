import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  static countInstances = 0;

  constructor(
    name: string,
    private _energyType: EnergyType = 'stamina',
  ) {
    super(name);
    Warrior.countInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.countInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

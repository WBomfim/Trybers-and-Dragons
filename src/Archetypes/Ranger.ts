import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  static countInstances = 0;

  constructor(
    name: string,
    private _energyType: EnergyType = 'stamina',
  ) {
    super(name);
    Ranger.countInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.countInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

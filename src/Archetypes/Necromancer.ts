import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static countInstances = 0;

  constructor(
    name: string,
    private _energyType: EnergyType = 'mana',
  ) {
    super(name);
    Necromancer.countInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.countInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

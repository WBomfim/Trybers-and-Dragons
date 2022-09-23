import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static countInstances = 0;

  constructor(
    name: string,
    private _energyType: EnergyType = 'mana',
  ) {
    super(name);
    Mage.countInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.countInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

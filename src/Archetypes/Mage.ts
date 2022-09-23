import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  static countInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.countInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.countInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

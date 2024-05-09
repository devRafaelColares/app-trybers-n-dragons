import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private static _instances = 0;
  private _magicDamage: number;

  constructor(
    name: string,
    private _energyType: EnergyType = 'mana', 
  ) {
    super(name);
    this._magicDamage = 0;
    Mage._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage._instances; 
  }
}

export default Mage;

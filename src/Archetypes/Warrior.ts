import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private static _instances = 0;
  private _magicDamage: number;

  constructor(
    name: string,
    private _energyType: EnergyType = 'stamina', 
  ) {
    super(name);
    this._magicDamage = 0;
    Warrior._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior._instances; 
  }
}

export default Warrior;

import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private static _instances = 0;
  private _magicDamage: number;

  constructor(
    name: string,
    private _energyType: EnergyType = 'mana', 
  ) {
    super(name);
    this._magicDamage = 0;
    Necromancer._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._instances; 
  }
}

export default Necromancer;

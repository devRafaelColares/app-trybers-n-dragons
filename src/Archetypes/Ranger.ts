import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private static _instances = 0;
  private _magicDamage: number;

  constructor(
    name: string,
    private _energyType: EnergyType = 'stamina', 
  ) {
    super(name);
    this._magicDamage = 0;
    Ranger._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger._instances; 
  }
}

export default Ranger;

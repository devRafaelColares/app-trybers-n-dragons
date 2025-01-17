import Race from './Race';

class Halfling extends Race {
  private static _instances = 0;
  private _maxLifePoints = 60;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._instances += 1;
  }

  static createdRacesInstances(): number { return Halfling._instances; }

  get maxLifePoints(): number { return this._maxLifePoints; }

  static get instances(): number { return Halfling._instances; }
}

export default Halfling;

import Race from './Race';

class Orc extends Race {
  private static _instances = 0;
  private _maxLifePoints = 74;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._instances += 1;
  }

  static createdRacesInstances(): number { return Orc._instances; }

  get maxLifePoints(): number { return this._maxLifePoints; }

  static get instances(): number { return Orc._instances; }
}

export default Orc;

import Race from './Race';

class Elf extends Race {
  private static _instances = 0;
  private _maxLifePoints = 99;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._instances += 1;
  }

  static createdRacesInstances(): number { return Elf._instances; }

  get maxLifePoints(): number { return this._maxLifePoints; }

  static get instances(): number { return Elf._instances; }
}

export default Elf;

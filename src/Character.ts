import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(
    _name: string,
  ) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(_name, this._dexterity);
    this._archetype = new Mage(_name);
    this._maxLifePoints = this.race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this.archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get dexterity(): number { return this._dexterity; }

  get race(): Race { return this._race; }

  get archetype(): Archetype { return this._archetype; }

  get lifePoints(): number { return this._lifePoints; }

  get strength(): number { return this._strength; }

  get defense(): number { return this._defense; }

  get energy(): Energy { return { ...this._energy }; }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    const newLifePoints = this._lifePoints - Math.max(damage, 0);
    this._lifePoints = newLifePoints <= 0 ? -1 : newLifePoints;
    return this._lifePoints;
  }

  attack(enemy: Fighter | SimpleFighter): void { enemy.receiveDamage(this.strength); }

  levelUp(): void {
    const increase = getRandomInt(1, 10);

    this._maxLifePoints += increase;
    this._strength += increase;
    this._dexterity += increase;
    this._defense += increase;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;

    this._energy = {
      type_: this.archetype.energyType,
      amount: 10,
    };
  }
}

export default Character;
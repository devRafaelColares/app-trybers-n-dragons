import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number { return this._lifePoints; }

  get strength(): number { return this._strength; }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints;
    const newLifePoints = this._lifePoints - Math.max(damage, 0);
    this._lifePoints = newLifePoints <= 0 ? -1 : newLifePoints;
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void { enemy.receiveDamage(this._strength); }
}

export default Monster;
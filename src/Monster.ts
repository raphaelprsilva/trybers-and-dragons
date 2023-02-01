import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.lifePoints;
  
    if (damage > 0) {
      this._lifePoints -= damage;
    }
  
    if (this.lifePoints <= 0) {
      return -1;
    }
    return this.lifePoints;
  }
}

export default Monster;
import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  private _opponents: SimpleFighter[];
  constructor(player: Fighter, opponent: SimpleFighter[]) {
    super(player);
    this._opponents = opponent;
  }
  
  fight(): number {
    this._opponents.forEach((opponent) => {
      this.player.attack(opponent);
    });
    if (this._opponents.every((opponent) => opponent.lifePoints === -1)) {
      return super.fight();
    }
    this._opponents.forEach((opponent) => opponent.attack(this.player));
    if (this.player.lifePoints === -1) {
      return super.fight();
    }
    return this.fight();
  }
}

export default PVE;

import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  private _opponent: Fighter;
  constructor(player: Fighter, opponent: Fighter) {
    super(player);
    this._opponent = opponent;
  }
  
  fight(): number {
    this.player.attack(this._opponent);

    if (this._opponent.lifePoints === -1) {
      return super.fight();
    }

    this._opponent.attack(this.player);

    if (this.player.lifePoints === -1) {
      return super.fight();
    }

    return this.fight();
  }
}

export default PVP;

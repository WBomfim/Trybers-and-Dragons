import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _character: Fighter;
  private _opponents: SimpleFighter[];

  constructor(character: Fighter, opponents: SimpleFighter[]) {
    super(character);
    this._character = character;
    this._opponents = opponents;
  }
  
  fight(): number {
    while (
      this._character.lifePoints > 0 
      && this._opponents.some((opponent) => opponent.lifePoints > 0)
    ) {
      const opponentsAlive = this._opponents
        .filter((opponent) => opponent.lifePoints > 0);
        
      this._character.attack(opponentsAlive[0]);
      opponentsAlive.forEach((opponent) => opponent.attack(this._character));
    }

    return super.fight();
  }
}

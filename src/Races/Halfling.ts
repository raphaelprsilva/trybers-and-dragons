import Race from './Race';

class Halfling extends Race {
  private static COUNT_INSTANCES = 0;

  private readonly _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.incrementInstanceCount();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  private static incrementInstanceCount(): void {
    Halfling.COUNT_INSTANCES += 1;
  }

  public static createdRacesInstances(): number {
    return Halfling.COUNT_INSTANCES;
  }
}

export default Halfling;

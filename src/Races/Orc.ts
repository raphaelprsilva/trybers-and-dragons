import Race from './Race';

class Orc extends Race {
  private static COUNT_INSTANCES = 0;

  private readonly _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.incrementInstanceCount();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  private static incrementInstanceCount(): void {
    Orc.COUNT_INSTANCES += 1;
  }

  public static createdRacesInstances(): number {
    return Orc.COUNT_INSTANCES;
  }
}

export default Orc;

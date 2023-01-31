import Race from './Race';

class Dwarf extends Race {
  private static COUNT_INSTANCES = 0;

  private readonly _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.incrementInstanceCount();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  private static incrementInstanceCount(): void {
    Dwarf.COUNT_INSTANCES += 1;
  }

  public static createdRacesInstances(): number {
    return Dwarf.COUNT_INSTANCES;
  }
}

export default Dwarf;

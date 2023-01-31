import Race from './Race';

class Elf extends Race {
  private static COUNT_INSTANCES = 0;

  private readonly _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.incrementInstanceCount();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  private static incrementInstanceCount(): void {
    Elf.COUNT_INSTANCES += 1;
  }

  public static createdRacesInstances(): number {
    return Elf.COUNT_INSTANCES;
  }
}

export default Elf;

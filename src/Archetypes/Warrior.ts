import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private static INSTANCES_QUANTITY = 0;

  private _eneryType: EnergyType;

  constructor(name: string) {
    super(name);
    Warrior.incrementInstanceCount();
    this._eneryType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._eneryType;
  }

  private static incrementInstanceCount(): void {
    Warrior.INSTANCES_QUANTITY += 1;
  }

  public static createdArchetypeInstances(): number {
    return Warrior.INSTANCES_QUANTITY;
  }
}

export default Warrior;
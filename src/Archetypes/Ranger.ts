import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private static INSTANCES_QUANTITY = 0;

  private _eneryType: EnergyType;

  constructor(name: string) {
    super(name);
    Ranger.incrementInstanceCount();
    this._eneryType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._eneryType;
  }

  private static incrementInstanceCount(): void {
    Ranger.INSTANCES_QUANTITY += 1;
  }

  public static createdArchetypeInstances(): number {
    return Ranger.INSTANCES_QUANTITY;
  }
}

export default Ranger;
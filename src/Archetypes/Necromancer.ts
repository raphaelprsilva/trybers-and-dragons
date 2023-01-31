import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private static INSTANCES_QUANTITY = 0;

  private _eneryType: EnergyType;

  constructor(name: string) {
    super(name);
    Necromancer.incrementInstanceCount();
    this._eneryType = 'mana';
  }

  get energyType(): EnergyType {
    return this._eneryType;
  }

  private static incrementInstanceCount(): void {
    Necromancer.INSTANCES_QUANTITY += 1;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer.INSTANCES_QUANTITY;
  }
}

export default Necromancer;
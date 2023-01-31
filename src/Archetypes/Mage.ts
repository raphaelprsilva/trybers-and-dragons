import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private static INSTANCES_QUANTITY = 0;
  
  private _eneryType: EnergyType;

  constructor(name: string) {
    super(name);
    Mage.incrementInstanceCount();
    this._eneryType = 'mana';
  }
  
  get energyType(): EnergyType {
    return this._eneryType;
  }
  
  private static incrementInstanceCount(): void {
    Mage.INSTANCES_QUANTITY += 1;
  }

  public static createdArchetypeInstances(): number {
    return Mage.INSTANCES_QUANTITY;
  }
}

export default Mage;
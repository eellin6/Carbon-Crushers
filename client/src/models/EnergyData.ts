interface EnergyData {
  wash: number;
  dish: number;
  screen: number;
  func: () => void[];
  degrees: number;
  handleThermostat: () => void;
}

export default EnergyData;

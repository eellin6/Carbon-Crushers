import { ChartColor, Scriptable } from 'chart.js';

interface GraphData {
  datasets: {
    text: string;
    label: string;
    data: number[];
    fill: boolean;
    backgroundColor: ChartColor | ChartColor[] | Scriptable<ChartColor>;
    borderColor: string[];
  }[];
  labels: string[];
}

export default GraphData;

import { Line, LineConfig } from "@ant-design/plots";
import { LineChartStyles } from "./styles";
import { LineChartProps } from "./types";

export const LineChart: React.FC<LineChartProps> = ({ data, xLabel }) => {
  const config = {
    data: data,

    padding: "auto",
    xField: "iteration",
    yField: "voltageValue",

    xAxis: {
      line: {
        style: {
          stroke: "gray",

          cursor: "pointer",
        },
      },
      alias: "READ ITERATIONS",
      title: {
        text: "READ ITERATIONS",
        style: {
          fontSize: 24,
        },
      },
    },
    yAxis: {
      line: {
        style: {
          stroke: "gray",

          cursor: "pointer",
        },
      },
      alias: xLabel ?? ["NO iNFO"],
      title: {
        text: xLabel ?? ["NO iNFO"],
        style: {
          fontSize: 24,
        },
      },
    },
  } as LineConfig;

  return <Line style={LineChartStyles} {...config} />;
};

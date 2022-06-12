import { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import { ChartJSOrUndefined } from "react-chartjs-2/dist/types";

import {
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

import { useConfirmedCases } from "@/hooks/confirmed-cases";

export type ChartProps = Record<string, never>;

ChartJS.register(
  CategoryScale,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.defaults.color = "white";
ChartJS.defaults.font.family =
  'Jost, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
ChartJS.defaults.font.size = 18;

export const Chart = () => {
  const ref = useRef<ChartJSOrUndefined<"line", number[], string>>(null);

  const [chartData, setChartData] = useState<
    Required<ChartData<"line", number[], string>>
  >({
    datasets: [],
    labels: [],
  });

  const { data } = useConfirmedCases();

  useEffect(() => {
    if (!data) {
      return;
    }

    setChartData({
      datasets: [
        {
          backgroundColor: (context) => {
            const { chartArea, ctx } = context.chart;

            if (!chartArea) {
              return;
            }

            const gradient = ctx.createLinearGradient(
              0,
              chartArea.top,
              0,
              chartArea.bottom
            );

            gradient.addColorStop(0, "rgba(0, 150, 136, 0.4)");
            gradient.addColorStop(1, "rgba(0, 150, 136, 0)");

            return gradient;
          },
          borderColor: (context) => {
            const { chartArea, ctx } = context.chart;

            if (!chartArea) {
              return;
            }

            const gradient = ctx.createLinearGradient(
              chartArea.left,
              0,
              chartArea.right,
              0
            );

            gradient.addColorStop(0, "#2dd4bf");
            gradient.addColorStop(0.25, "#00c8d2");
            gradient.addColorStop(0.5, "#00bbe0");
            gradient.addColorStop(0.75, "#00abe5");
            gradient.addColorStop(1, "#4299e1");

            return gradient;
          },
          borderWidth: 6,
          data: data.map(({ total }) => total),
          fill: true,
          pointHitRadius: 6,
          pointRadius: 0,
        },
      ],
      labels: data.map(({ date }) => date),
    });
  }, [data]);

  return (
    <Line
      data={chartData}
      options={{
        color: "#ffffff",
        onResize: (chart, size) => {
          if (
            chart.options.scales?.x?.ticks &&
            chart.options.scales?.y?.ticks
          ) {
            chart.options.scales.x.ticks.display = size.width >= 768;
            chart.options.scales.y.ticks.display = size.width >= 768;
          }
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
          tooltip: {
            backgroundColor: "#000729e0",
            bodyFont: {
              size: 32,
              weight: "400",
            },
            callbacks: {
              title: ([{ label }]) =>
                new Date(label)
                  .toLocaleDateString("pl", {
                    dateStyle: "long",
                  })
                  .toUpperCase(),
            },
            displayColors: false,
            padding: 16,
            titleColor: "#2dd4bf",
            titleFont: {
              size: 16,
              weight: "400",
            },
          },
        },
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              callback: (_, index) =>
                new Date(chartData.labels[index]).toLocaleDateString("pl", {
                  month: "short",
                  year: "2-digit",
                }),
              display:
                typeof window !== "undefined"
                  ? window.innerWidth >= 768
                  : false,
              maxTicksLimit: data
                ? new Date(data[data.length - 1].date).getMonth() -
                  new Date(data[0].date).getMonth() +
                  12 *
                    (new Date(data[data.length - 1].date).getFullYear() -
                      new Date(data[0].date).getFullYear())
                : undefined,
            },
          },
          y: {
            grid: {
              display: false,
            },
            ticks: {
              display:
                typeof window !== "undefined"
                  ? window.innerWidth >= 768
                  : false,
            },
          },
        },
      }}
      ref={ref}
    />
  );
};

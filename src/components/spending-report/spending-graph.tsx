import Chart from "react-apexcharts";
import { DateRangePicker } from "../ui/date-picker-range";

const SpendingGraph = () => {
  const data = [
    {
      x: "Food",
      y: 2000,
    },
    {
      x: "Housing",
      y: 5000,
    },
    {
      x: "Transportation",
      y: 2000,
    },
    {
      x: "Party",
      y: 1000,
    },
    {
      x: "Recreation",
      y: 1000,
    },
  ];

  return (
    <div className="space-y-[20px] mt-[20px]">
      <h6 className="font-bold">Spending this month</h6>
      <div className="flex justify-between">
        <h4 className="text-[16px] md:text-[20px] font-bold">$12,000</h4>
        <DateRangePicker />
      </div>
      <Chart
        options={{
          colors: ["#2563eb33"],
          dataLabels: { enabled: false },
          grid: { borderColor: "#f4f6f8" },
          states: {
            hover: {
              filter: {
                type: "none",
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                colors: ["#02081799"],
              },
            },
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "$ " + val;
              },
            },
          },
          legend: {
            fontWeight: "600",
            showForSingleSeries: true,
            customLegendItems: ["Category"],
            markers: {
              height: 0,
              width: 0,
            },
          },
          chart: {
            toolbar: {
              tools: {
                download: false,
              },
            },
          },
        }}
        series={[{ data, name: "Spending" }]}
        type="bar"
        width="100%"
        height={400}
      />
    </div>
  );
};

export default SpendingGraph;

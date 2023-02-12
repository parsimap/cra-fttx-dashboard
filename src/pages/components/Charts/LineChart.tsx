//test
import ChartContainer, {
  ChartDockPanel,
} from "../../../components/Chart/ChartContainer";
import {
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {useMemo, useState} from "react";
import Typography from "@mui/material/Typography";
import ITechnologyTrend from "../../../interfaces/ITechnologyTrend";
import {
  persianDateLabelFormatter,
  persianDateTickFormatter,
} from "@/src/lib/utilities/persianDateFormatters";
import {DateRangeType} from "@/src/types/DateRangeType";
import {ITechnologyCoverage} from "@/src/interfaces/ITechnologyPalette";
import ChartTooltip from "@/src/components/Chart/ChartTooltip";

interface IChartItem {
  year: number;
  date: string;
  month: number;
  client: number;
  coverage: number;
  "passive-port": number;
}

const extractChartData = (trends: ITechnologyTrend[], indicators: string[]) => {
  const chartData = [] as IChartItem[];

  for (const trend of trends) {
    const trendDate = `${trend.month}-${trend.year}`;
    let itemIndex = chartData.findIndex((it) => it.date === trendDate);

    if (itemIndex === -1) {
      const chartItem = {
        year: trend.year,
        month: trend.month,
        date: trendDate,
      } as IChartItem;
      const length = chartData.push(chartItem);
      itemIndex = length - 1;
    }

    const chartItem = chartData[itemIndex];
    if (indicators.includes("coverage")) {
      if (trend.technologyName === "FTTH") {
        chartItem.coverage = (chartItem.coverage ?? 0) + trend.coverageCount;
      }
    }

    if (indicators.includes("client"))
      chartItem.client = (chartItem.client ?? 0) + trend.clientCount;

    if (indicators.includes("passive-port"))
      chartItem["passive-port"] =
        (chartItem["passive-port"] ?? 0) + trend.passivePortCount;
  }

  return chartData.sort((cur, prev) =>
    cur.year > prev.year && cur.month > prev.month ? -1 : 1
  );
};

interface IProps {
  data: ITechnologyTrend[];
  theme: "dark" | "light";
  dateRangeType: DateRangeType;
  palettes: ITechnologyCoverage[];
}

const LineChart = ({palettes, data: propsData, theme, dateRangeType}: IProps) => {
  const fill = theme === "light" ? "#ffffff" : "#333333";
  const [activeIndicators, setActiveIndicators] = useState<string[]>([]);
  const dateRangeTitle = dateRangeType === DateRangeType.YEARLY ? "سال" : "ماه";

  const data = useMemo(
    () => extractChartData(propsData, activeIndicators),
    [activeIndicators, propsData]
  );

  const handleTechnologies = (values: string[]) => {
    setActiveIndicators(values);
  };

  return (
    <ChartContainer>
      <ChartDockPanel position={"left"}>
        <Typography color={fill} variant={"subtitle2"} mt={0.5} fontSize={10.5}>
          تعداد
        </Typography>
        <Typography color={fill} fontWeight={"light"} fontSize={10}>
          (بر حسب هزار واحد)
        </Typography>
      </ChartDockPanel>
      <ResponsiveContainer>
        <RechartsLineChart data={data} margin={{left: -10, right: 10}}>
          <YAxis
            fontSize={14}
            tick={{fill}}
            axisLine={{stroke: fill, strokeWidth: 2}}
            tickLine={{stroke: fill, strokeWidth: 2}}
            tickFormatter={(value) => String(value / 1000)}
            direction={"ltr"}
          />
          <XAxis
            interval={0}
            fontSize={8.9}
            dataKey={"date"}
            angle={dateRangeType === DateRangeType.YEARLY ? 0 : -50}
            height={50}
            textAnchor="start"
            tick={{fill}}
            tickFormatter={persianDateTickFormatter}
            tickLine={{stroke: fill, strokeWidth: 2}}
            axisLine={{stroke: fill, strokeWidth: 2}}
            label={{
              value:
                dateRangeType === DateRangeType.YEARLY ? dateRangeTitle : "",
              fill: fill,
            }}
          />
          <Tooltip
            content={
              <ChartTooltip labelFormatter={persianDateLabelFormatter}/>
            }
          />
          {palettes.map((palette) => (
            <Line
              type="linear"
              strokeWidth={3}
              key={palette.type}
              name={palette.title}
              dataKey={palette.type}
              stroke={palette.palettes.neutral}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default LineChart;

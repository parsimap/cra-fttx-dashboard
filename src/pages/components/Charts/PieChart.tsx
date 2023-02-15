import ITechnologyCount from "@/src/interfaces/ITechnologyCount";
import React, { useMemo } from "react";
import {
  Cell,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
} from "recharts";
import PersianNumber from "@/src/components/PersianNumber";
import { Stack, Typography } from "@mui/material";

// todo get these colors from webservice
const TECHNOLOGY_COLORS: Record<string, string> = {
  FTTH: "#ffc700",
  VDSL: "#7bc9d7",
};

interface IProps {
  mode: "passive-port" | "client";
  technologies: ITechnologyCount[];
}

const RADIAN = Math.PI / 180;

const PieChart = ({ mode, technologies }: IProps) => {
  const { data, total } = useMemo(() => {
    const data = technologies.map((technology) => ({
      name: technology.title,
      value:
        mode === "client"
          ? technology.totalClient
          : technology.totalPassivePort,
    }));
    const total = data.reduce((prev, cur) => prev + cur.value, 0);
    return { data, total };
  }, [mode, technologies]);

  return (
    <Stack height={"inherit"} width={"100%"}>
      <Typography color={"#ffffff"} textAlign={"center"}>
        {mode === "passive-port"
          ? "تعداد پورت منصوبه"
          : "تعداد سرویس‌گیرنده (کاربر)"}
      </Typography>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart margin={{ left: 10, right: 10, top: 10, bottom: 10 }}>
          <Pie
            cy="50%"
            cx="50%"
            paddingAngle={2.5}
            data={data}
            direction={"ltr"}
            // startAngle={45}
            // endAngle={405}
            cornerRadius={40}
            innerRadius={65}
            outerRadius={70}
            nameKey={"name"}
            dataKey="value"
            label={({
              cx,
              cy,
              midAngle,
              innerRadius,
              outerRadius,
              value,
              index,
              fill,
            }) => {
              const radius = 60 + innerRadius + (outerRadius - innerRadius);
              const x = cx + radius * Math.cos(-midAngle * RADIAN - 120);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);
              const sin = Math.sin(-RADIAN * midAngle);
              const cos = Math.cos(-RADIAN * midAngle);
              const sx = cx + (outerRadius + 10) * cos;
              const sy = cy + (outerRadius + 10) * sin;
              const mx = cx + (outerRadius + 30) * cos;
              const my = cy + (outerRadius + 40) * sin;
              const ex = mx + (cos >= 0 ? 1 : -1) * 50;

              return (
                <g>
                  <path
                    d={`M${sx},${sy}L${mx},${my}L${ex},${my}`}
                    stroke={fill}
                    fill="none"
                  />
                  {index === 0 && (
                    <text
                      x={cx}
                      y={cy}
                      dy={8}
                      textAnchor="middle"
                      fill={"#fff"}
                      fontWeight={"bold"}
                      fontSize={20}
                    >
                      <PersianNumber>{total}</PersianNumber>
                    </text>
                  )}
                  <text
                    x={x}
                    y={y}
                    fill={fill}
                    textAnchor={x > cx ? "start" : "end"}
                    dominantBaseline="central"
                  >
                    <PersianNumber>{value}</PersianNumber>
                  </text>
                </g>
              );
            }}
          >
            {data.map((entry, index) => (
              <Cell
                strokeWidth={0}
                key={`cell-${index}`}
                fill={TECHNOLOGY_COLORS[entry.name]}
              />
            ))}
          </Pie>
        </RechartsPieChart>
      </ResponsiveContainer>
    </Stack>
  );
};

export default PieChart;

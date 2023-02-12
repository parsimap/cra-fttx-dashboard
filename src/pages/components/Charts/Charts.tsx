import ITechnologyCount from "@/src/interfaces/ITechnologyCount";
import PieChart from "@/src/pages/components/Charts/PieChart";
import GroupStack from "@/src/pages/components/GroupStack";

// todo get real data from webservice
const TECHNOLOGIES: ITechnologyCount[] = [
  {
    id: 1,
    title: "FTTH",
    totalClient: 199606,
    totalPassivePort: 1449057,
  },
  {
    id: 2,
    title: "VDSL",
    totalClient: 167077,
    totalPassivePort: 353846,
  },
];

const Charts = () => (
  <GroupStack height={200}>
    <PieChart mode={"client"} technologies={TECHNOLOGIES} />
    <PieChart mode={"passive-port"} technologies={TECHNOLOGIES} />
  </GroupStack>
);

export default Charts;

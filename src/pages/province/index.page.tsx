import ProtectedPage from "@/src/components/ProtectedPage";
import React, {PropsWithChildren} from "react";
import Layout from "@/src/components/Layout";
import {
  Box,
  Button,
  ButtonProps,
  Grid,
  List,
  ListItem,
  ListItemProps,
  Stack,
  useMediaQuery,
} from "@mui/material";
import LeftCharts from "@/src/pages/operator/components/LeftCharts";
import {Theme} from "@mui/system";
import {useSelector} from "react-redux";
import {RootState} from "@/src/app/store";
import FeatureStack from "@/src/components/FeatureStack";
import Typography from "@mui/material/Typography";
import PersianNumber from "@/src/components/PersianNumber";
import Actions from "@/src/pages/operator/components/RightPanel/Actions";
import DownloadIcon from "@mui/icons-material/Download";
import DateRangeAutocomplete from "@/src/components/Autocompelets/DateRangeAutocomplete";
import ProvinceAutocomplete from "@/src/components/Autocompelets/ProvinceAutocomplete";
import chartImage from "../../../public/province-left-chart.png";

const ProvinceCard = ({
                        amount,
                        subtitle,
                      }: {
  amount: JSX.Element;
  subtitle: string;
}) => (
  <FeatureStack height={120} justifyContent={"center"} textAlign={"center"}>
    <Typography variant={"h1"} fontSize={50} fontWeight={"bold"}>
      {amount}
    </Typography>
    <Typography color={"#7CCAD8"} fontWeight={300}>
      {subtitle}
    </Typography>
  </FeatureStack>
);

const MainPanelListItem = ({
                             item,
                             index,
                             ...rest
                           }: PropsWithChildren<ListItemProps & { item: string; index: number }>) => {
  return (
    <ListItem {...rest} disablePadding>
      <PersianNumber>{index}</PersianNumber>.{item}
    </ListItem>
  );
};

const ActionButton1 = ({title, ...rest}: { title: string } & ButtonProps) => (
  <Button sx={{p: 0, width: "100%"}} {...rest}>
    <FeatureStack
      height={40}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      direction={"row"}
    >
      <Stack justifyContent={"center"} alignItems={"center"} direction={"row"}>
        {<DownloadIcon/>}
        <Typography fontSize={16} fontWeight={300}>
          {title}
        </Typography>
      </Stack>
    </FeatureStack>
  </Button>
);

function Content() {
  const {provinces} = useSelector((state: RootState) => state.app);
  const onlyMediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <Layout mode={"light"} scrollable={onlyMediumScreen}>
      <Grid container spacing={4}>
        <Grid item xs={12} xl={4}>
          <Grid item container spacing={2}>
            <Grid item xs={12}>
              <ProvinceAutocomplete options={provinces}/>
            </Grid>
          </Grid>
          <Grid item container spacing={2} mt={.25}>
            <Grid item xs={6}>
              <ProvinceCard
                amount={<PersianNumber>1200</PersianNumber>}
                subtitle="?????????? ???????????? ?????? ????????"
              />
            </Grid>
            <Grid item xs={6}>
              <ProvinceCard
                amount={<PersianNumber style={"percent"}>0.45</PersianNumber>}
                subtitle="???????? ???????? ????????????"
              />
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={12} mt={2}>
              <FeatureStack sx={{p: 2}}>
                <Typography color={"#98F0BB"} fontWeight={"bold"}>
                  ???????????????????? ????????
                </Typography>
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <List>
                    {["??????????", "????????"].map((item, key) => (
                      <MainPanelListItem
                        key={key}
                        index={key + 1}
                        item={item}
                      />
                    ))}
                  </List>
                </Stack>
              </FeatureStack>
              <FeatureStack sx={{p: 2, mt: 2}}>
                <Typography color={"#C467D3"} fontWeight={"bold"}>
                  ???????????????????? ?????????? ????????
                </Typography>
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <List>
                    {["??????????????", "????????????"].map((item, key) => (
                      <MainPanelListItem
                        key={key}
                        index={key + 1}
                        item={item}
                      />
                    ))}
                  </List>
                </Stack>
              </FeatureStack>
              <Actions/>
              <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} mt={1}>
                <DateRangeAutocomplete options={[{title: "?????? 1401"}]} sx={{width: "50%"}}/>
                <ActionButton1 title={"???????????? ?????????? ???????????????"} sx={{mr: 2, width: "50%"}}/>
              </Stack>
              <ActionButton1 title={"???????????? ???????? ???????????? ?????????? ???????? / ????????"} sx={{mt: 1}} fullWidth/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} xl={8}>
          <Box component={"img"} src={chartImage.src} width={"100%"} />
        </Grid>
      </Grid>
    </Layout>
  );
}

export default function Operator() {
  return (
    <ProtectedPage>
      <Content/>
    </ProtectedPage>
  );
}

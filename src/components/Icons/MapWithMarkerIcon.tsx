import {SvgIcon} from "@mui/material";
import {SvgIconProps} from "@mui/material/SvgIcon";

const MapWithMarkerIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox={"0 0 30 30"} {...props}>
    <path
      fill={"none"}
      d="M21.875 8.125L28.75 11.25V27.5L20 23.75M20 23.75L10 27.5M20 23.75V15M10 27.5L1.25 23.75V7.5L7.5 10M10 27.5V15M15 20.3409C15 20.3409 7.5 14.375 7.5 8.75C7.5 4.0625 11.25 1.25 15 1.25C18.75 1.25 22.5 4.0625 22.5 8.75C22.5 14.375 15 20.3409 15 20.3409ZM16.25 8.75C16.25 8.05958 15.6904 7.5 15 7.5C14.3096 7.5 13.75 8.05958 13.75 8.75C13.75 9.44042 14.3096 10 15 10C15.6904 10 16.25 9.44042 16.25 8.75Z"
      strokeWidth="2"
    />
  </SvgIcon>
);

export default MapWithMarkerIcon;

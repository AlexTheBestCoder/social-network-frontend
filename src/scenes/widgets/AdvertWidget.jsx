import { Typography } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import Pub from "../../assets/facebook_meta.jpeg.jpg";

const AdvertWidget = () => {
  return (
    <WidgetWrapper >
      <FlexBetween>
        <Typography color="mediumblue" variant="h5" fontWeight="500">
          Sponsor
        </Typography>
        <Typography color="mediumblue">Create Ad</Typography>
      </FlexBetween>
      <img
        src={Pub}
        alt="advert"
        width="100%"
        height="auto"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography >Facebook</Typography>
        <Typography >facebook.com</Typography>
      </FlexBetween>
      <Typography color="mediumblue">
        Meta Platforms, Inc., plus connue sous le nom commercial Meta, est une
        société américaine créée en 2004 par Mark Zuckerberg. Elle est un des
        géants du Web, regroupés sous l'acronyme GAFAM, aux côtés de Google,
        Apple, Amazon et Microsoft.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;

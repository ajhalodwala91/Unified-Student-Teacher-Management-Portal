import React, { useState, useEffect, useRef } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Icons } from "../../assets/Icons";

function CardField({ icon, value, color }) {
  const [fontSize, setFontSize] = useState(16);
  const dynamicTextRef = useRef(null);

  useEffect(() => {
    const numberOfLines =
      dynamicTextRef.current.clientHeight /
      parseFloat(getComputedStyle(dynamicTextRef.current).lineHeight);
    setFontSize(18 - numberOfLines * 2);
  }, []);

  return (
    <Stack
      direction="row"
      gap={2}
      height="15%"
      width="100%"
      alignItems="center"
      bgcolor={color}
      p="20px"
    >
      {icon}
      <Typography ref={dynamicTextRef} style={{ fontSize: `${fontSize}px` }}>
        {value}
      </Typography>
    </Stack>
  );
}

function ProfileCard() {
  let icons = <Icons />;
  icons = icons.type.profile;
  return (
    <Stack
      alignItems="center"
      borderRadius="30px"
      height="100%"
      width={350}
      sx={{ overflow: "hidden" }}
    >
      <img
        src="https://theherdkhs.net/wp-content/uploads/2016/11/image1-900x675.jpeg"
        className="userImg"
        height="55%"
        width="100%"
        style={{ objectFit: "cover" }}
      />

      <CardField
        icon={icons.mailIcon}
        value="carolinestokes@gmail.com"
        color="#98f5b4"
      />
      <CardField
        icon={icons.callIcon}
        value="+91 98765 43210"
        color="#7cf09f"
      />
      <CardField
        icon={icons.addressIcon}
        value="Suite 894 749 Edythe Stravenue, Port Andymouth, LA 31901"
        color="#63ed8b"
      />
    </Stack>
  );
}

export default ProfileCard;

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
      gap={1}
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
      borderRadius="20px"
      height={500}
      width={300}
      sx={{ overflow: "hidden" }}
    >
      <img
        src="https://img.freepik.com/free-photo/guy-plaid-shirt_158595-126.jpg?w=740&t=st=1706603779~exp=1706604379~hmac=5d1deb5599daa2630067518341dcb6292b038f78cc41a1f1e2b3212c124e49c5"
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

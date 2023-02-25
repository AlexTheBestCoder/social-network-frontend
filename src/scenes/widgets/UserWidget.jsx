import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import { Box, Typography, Divider } from "@mui/material";
import UserImage from "components/UserImage";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/social-networks.png'

const UserWidget = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  // const { palette } = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  
//   const dark = palette.grey;
//   const medium = palette.neutral.medium;
//   const main = palette.neutral.main;

  const getUser = async () => {
    const response = await fetch(`https://social-network-api-10.onrender.com/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, [])

  if (!user) {
    return null;
  }

  const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    impressions,
    friends,
  } = user;
  return (
    <WidgetWrapper>
      {/* FIRST ROW */}

      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        onClick={() => navigate(`/profile/${userId}`)}
      >
        <FlexBetween gap="1rem">
        <UserImage image={picturePath} />
        <Box>
          <Typography
            variant="h4"
            color="mediumblue"
            fontWeight="500"
            sx={{
              "&:hover": {
                color: "ButtonText",
                cursor: "pointer",
              },
            }}
          >
            {firstName} {lastName}
          </Typography>
          <Typography color={"mediumpurple"}>{friends.length} friends</Typography>
        </Box>
        <ManageAccountsOutlined />
        </FlexBetween>
        <Divider />
      </FlexBetween>
      
      

      {/* SECOND ROW */}
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LocationOnOutlined fontSize="large" sx={{ color: "mediumblue" }} />
          <Typography color={"mediumpurple"}>{location}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <WorkOutlineOutlined fontSize="large" sx={{ color: "mediumblue" }} />
          <Typography color={"mediumpurple"}>{occupation}</Typography>
        </Box>
      </Box>

      {/* THIRD ROW */}
      <Box p="1rem 0">
        <FlexBetween mb="0.5rem">
          <Typography color={"mediumpurple"}>Who's viewed your profile</Typography>
          <Typography color={"mediumblue"} fontWeight="500">
            {viewedProfile}
          </Typography>
        </FlexBetween>
        <FlexBetween>
          <Typography color={"mediumpurple"}>Who's viewed your profile</Typography>
          <Typography color={"mediumblue"} fontWeight="500">
            {impressions}
          </Typography>
        </FlexBetween>
      </Box>

      {/* FOURTH ROW */}
      <Box p="1rem 0">
        <Typography fontSize="1rem" color={"mediumblue"} fontWeight="500" mb="1rem">
          Social Profiles
        </Typography>

        <FlexBetween gap="1rem">
            <FlexBetween gap="1rem">
                <img src={logo} alt="twitter" height='40px'/>
                <Box>
                    <Typography color={"mediumblue"} fontWeight="500">
                        Twitter
                    </Typography>
                    <Typography color={"mediumpurple"}>Network Plateform</Typography>
                </Box>
            </FlexBetween>
            <EditOutlined sx={{ color: "mediumblue" }} />
        </FlexBetween>
      </Box>
    </WidgetWrapper>
  );
};

export default UserWidget;

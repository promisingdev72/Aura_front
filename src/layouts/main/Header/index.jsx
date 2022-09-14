import { Box, Stack, Typography } from "@mui/material";
import "../../../components/css.css";
import { useMediaQuery } from "react-responsive";

import SideBarDrawer from "../SideBar";

export default function Header() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  return (
    <>
      {isDesktop && (
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          px="32px"
          py="19px"
          borderBottom="1px solid #333333"
        >
          <Typography
            fontSize="16px"
            sx={{ cursor: "pointer" }}
            className="recoleta"
            color="#333333"
          >
            Menu
          </Typography>

          <Box
            component="img"
            src="/images/logo.svg"
            sx={{ cursor: "pointer" }}
          />
          <SideBarDrawer />
        </Stack>
      )}
      {!isDesktop && (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid #333333"
          px={1}
          py={1}
        >
          <Box>
            <Typography
              fontSize="16px"
              sx={{ cursor: "pointer" }}
              className="recoleta"
              color="#333333"
            >
              Menu
            </Typography>
          </Box>
          <Box
            component="img"
            src="/images/logo.svg"
            sx={{ cursor: "pointer", width: "80px", marginLeft: "50px" }}
          />
          <SideBarDrawer />
        </Box>
      )}
    </>
  );
}

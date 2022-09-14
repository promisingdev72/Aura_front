import Step from "../../components/step";
import Map from "../../components/map";
import { useMediaQuery } from "react-responsive";
import { Stack, Box } from "@mui/material";

const DropCommerce = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  return (
    <>
      {isDesktop ? (
        <>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            px="30px"
            py="25px"
          >
            <Step />
            <Map />
          </Stack>
        </>
      ) : (
        <>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            px={isDesktop ? "30px" : "5px"}
            py="25px"
            sx={{ overflow: "hidden" }}
          >
            <Step />
            <Map />
          </Box>
        </>
      )}
    </>
  );
};

export default DropCommerce;

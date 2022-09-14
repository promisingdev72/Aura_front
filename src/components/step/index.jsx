import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useMediaQuery } from "react-responsive";

import "../css.css";

const StepLine1 = styled("div")(() => ({
  height: "2px",
  width: "305px",
  background:
    "linear-gradient(90deg, #4B355A 2.57%, #3784AB 25.48%, #40C397 51.66%, #F0E681 74.93%, #EB4949 99.48%)",
}));

const StepLine2 = styled("div")(() => ({
  height: "2px",
  width: "305px",
  background: "rgba(51, 51, 51, 0.2)",
  // marginBottom: "25px",
}));

export default function Step() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        ml={!isDesktop && 45}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          <Box component="img" src="/images/step11.png" />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            position="absolute"
            sx={{ bottom: "-40px", left: "-50px", width: "150px" }}
          >
            <Typography fontSize="12px" className="VulfMono" color="#333333">
              Confirmed
            </Typography>
            <Typography
              fontSize="12px"
              className="VulfMono"
              color="rgba(51, 51, 51, 0.5)"
            >
              June 3
            </Typography>
          </Box>
        </Box>
        <StepLine1 />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          <Box component="img" src="/images/step2.png" />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            position="absolute"
            sx={{ bottom: "-40px", left: "-50px", width: "150px" }}
          >
            <Typography fontSize="12px" className="VulfMono" color="#333333">
              On its way
            </Typography>
            <Typography
              fontSize="12px"
              className="VulfMono"
              color="rgba(51, 51, 51, 0.5)"
            >
              June 13
            </Typography>
          </Box>
        </Box>
        {isDesktop ? <StepLine2 /> : <StepLine2 />}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          <Box component="img" src="/images/step3.png" />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            position="absolute"
            sx={{ bottom: "-25px", left: "-50px", width: "150px" }}
          >
            <Typography fontSize="12px" className="VulfMono" color="#333333">
              Out for delivery
            </Typography>
          </Box>
        </Box>
        <StepLine2 />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          <Box component="img" src="/images/step4.png" />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            position="absolute"
            sx={{ bottom: "-25px", left: "-50px", width: "150px" }}
          >
            <Typography fontSize="12px" className="VulfMono" color="#333333">
              Delivered
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* {isDesktop && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography fontSize="12px" className="VulfMono" color="#333333">
              Confirmed
            </Typography>
            <Typography
              fontSize="12px"
              className="VulfMono"
              color="rgba(51, 51, 51, 0.5)"
            >
              June 3
            </Typography>
          </Box>
          <Box width="305px" />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography fontSize="12px" className="VulfMono" color="#333333">
              On its way
            </Typography>
            <Typography
              fontSize="12px"
              className="VulfMono"
              color="rgba(51, 51, 51, 0.5)"
            >
              June 13
            </Typography>
          </Box>
          <Box width="305px" />

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography fontSize="12px" className="VulfMono" color="#333333">
              Out for delivery
            </Typography>
          </Box>
          <Box width="305px" />

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography fontSize="12px" className="VulfMono" color="#333333">
              Delivered
            </Typography>
          </Box>
        </Box>
      )} */}
    </>
  );
}

import { Box, Typography, Link } from "@mui/material";
import "../../../components/css.css";

export default function Footer() {
  return (
    <>
      <Box display="flex" justifyContent="center" my={7}>
        <Typography
          fontSize="12px"
          sx={{ color: "rgba(51, 51, 51, 0.5)" }}
          mr={1}
        >
          Got question?
        </Typography>
        <Typography fontSize="12px" sx={{ color: "rgba(51, 51, 51, 0.5)" }}>
          <Link href="#" color="inherit">
            Contact us
          </Link>
        </Typography>
      </Box>
    </>
  );
}

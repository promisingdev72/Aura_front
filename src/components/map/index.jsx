import { Box, Typography, Grid, Container } from "@mui/material";

import Map from "./Map";
import Marker from "./Marker";
import "../css.css";

const apiKey = "AIzaSyAT9SH59Z75iR8OUEcfv-mTklD6xMDHs80";

export default function MapContainer() {
  const zoom = 4;

  const position = {
    lat: 35,
    lng: -100,
  };

  return (
    <>
      <Container maxWidth="md">
        <Box display="flex" justifyContent="center" flexDirection="column">
          <Box mt="60px" mb="30px">
            <Typography
              fontSize="28px"
              textAlign="center"
              className="recoleta"
              color="#333333"
            >
              Thank you, Stedman!
            </Typography>
            <Typography fontSize="12px" textAlign="center" className="vulfmono">
              ORDER #1234567
            </Typography>
          </Box>
          <Box>
            <Map id="map" apiKey={apiKey} center={position} zoom={zoom}>
              <Marker position={position} />
            </Map>
          </Box>
          <Box mt={5}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography fontSize="12px" className="vulfmono">
                    Your order is on its way
                  </Typography>
                  <Typography
                    fontSize="18px"
                    className="recoleta"
                    color="#333333"
                  >
                    You'll receive updates on its progress.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography fontSize="12px" className="vulfmono">
                    USPS tracking number:
                  </Typography>

                  <Typography
                    fontSize="18px"
                    className="recoleta"
                    color="#333333"
                  >
                    1234567890
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}

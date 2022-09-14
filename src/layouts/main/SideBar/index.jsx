import { useState } from "react";
import { Box, Typography, Drawer, Button, Divider } from "@mui/material";

import { useMediaQuery } from "react-responsive";

export default function SideBarDrawer() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const Brand = [
    {
      imgUrl: "/images/avatar1.png",
      brandName: "Brand name",
      itemName: "Item name",
      time: "Return Policy 14 days unworn, unused",
      price: "$150",
    },
    {
      imgUrl: "/images/avatar2.png",
      brandName: "Brand name",
      itemName: "Item name",
      time: "Return Policy 14 days unworn, unused",
      price: "$150",
    },
  ];

  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [transHeight, setTransHeight] = useState(230);
  const [detailShow, setDetailShow] = useState(false);

  const toggleDetail = () => {
    if (detailShow) {
      setDetailShow(!detailShow);
      setTransHeight(230);
    } else {
      if (isDesktop) {
        setTransHeight(-30);
      } else {
        setTransHeight(-10);
      }
      setDetailShow(!detailShow);
    }
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: `${isDesktop ? "400px" : "calc(100vw - 20px)"}`,
        height: "100%",
        overflow: "hidden",
        background: "#F5F1E6",
        minHeight: "500px",
      }}
      px={isDesktop ? "30px" : "10px"}
      py="19px"
      position="relative"
    >
      <Button
        onClick={toggleDrawer("right", false)}
        display="flex"
        justifycontent="center"
        alignitems="center"
        sx={{ cursor: "pointer" }}
      >
        <Box
          component="img"
          src="/images/dropsBtn2.png"
          sx={{ width: `${!isDesktop && "30px"}` }}
        />
        <Typography
          ml="8px"
          fontSize={isDesktop ? "18px" : "14px"}
          color="#000"
          className="recoleta"
        >
          Drops
        </Typography>
      </Button>
      {Brand.map((item, index) => {
        return (
          <Box
            display="flex"
            my="18px"
            justifyContent="space-between"
            key={index}
          >
            <Box display="flex" alignItems="center">
              <Box component="img" src={item.imgUrl} mr="20px" />
              <Box>
                <Typography
                  fontSize="12px"
                  className="VulfMono"
                  color="#333333"
                >
                  {item.brandName}
                </Typography>
                <Typography
                  fontSize="18px"
                  className="VulfMono"
                  color="#333333"
                >
                  {item.itemName}
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <Box>
                <Typography
                  fontSize="12px"
                  className="VulfMono"
                  color="rgba(51, 51, 51, 0.5);"
                >
                  {item.time}
                </Typography>
                <Typography
                  fontSize="16px"
                  className="recoleta"
                  color="#333333"
                  textAlign="right"
                >
                  {item.price}
                </Typography>
              </Box>
            </Box>
          </Box>
        );
      })}
      <Divider />
      <Box my="25px">
        <Box display="flex" justifyContent="space-between">
          <Typography fontSize="16px" color="#333333" className="VulfMono">
            Subtotal
          </Typography>
          <Typography fontSize="16px" color="#333333" className="recoleta">
            $300
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography
            fontSize="12px"
            color="rgba(51, 51, 51, 0.5)"
            className="VulfMono"
          >
            Shipping
          </Typography>
          <Typography fontSize="14px" color="#333333" className="recoleta">
            $10.00
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography
            fontSize="12px"
            color="rgba(51, 51, 51, 0.5)"
            className="VulfMono"
          >
            Taxes
          </Typography>
          <Typography fontSize="14px" color="#333333" className="recoleta">
            $10.00
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box display="flex" justifyContent="space-between" my="25px">
        <Typography fontSize="16px" className="VulfMono" color="#333333">
          Total
        </Typography>
        <Typography fontSize="16px" color="#333333" className="recoleta">
          $320
        </Typography>
      </Box>
      <Box
        position="absolute"
        sx={{
          bottom: "0px",
          right: "8px",
          left: "8px",
          transition: "600ms",
          transform: `translateY(${transHeight}px)`,
        }}
      >
        <fieldset
          style={{
            borderRadius: "20px",
            paddingTop: `${isDesktop ? "30px" : "5px"}`,
          }}
        >
          <legend
            style={{
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => toggleDetail()}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mx={1}
            >
              <Box component="img" src="/images/plus.png" />
              <Typography fontSize="18px" className="recoleta" ml={1}>
                Order details
              </Typography>
            </Box>
          </legend>
          <Box display="flex">
            <Box>
              <Typography
                fontSize="12px"
                color="rgba(51, 51, 51, 0.5)"
                className="VulfMono"
                mb="4px"
              >
                Contact Information
              </Typography>
              <Typography
                fontSize="14px"
                color="#333333"
                className="VulfMono"
                mb="25px"
              >
                (323) 481-5496
              </Typography>
              <Typography
                fontSize="12px"
                color="rgba(51, 51, 51, 0.5)"
                className="VulfMono"
                mb="4px"
              >
                Shipping Address
              </Typography>

              <Typography
                fontSize="14px"
                color="#333333"
                className="VulfMono"
                mb="25px"
              >
                Stedman Cleveland 4523 Woodman Avenue Apt 105 Sherman Oaks, CA
                91423
              </Typography>
              <Typography
                fontSize="12px"
                color="rgba(51, 51, 51, 0.5)"
                className="VulfMono"
                mb="4px"
              >
                Shipping method
              </Typography>
              <Typography fontSize="14px" color="#333333" className="VulfMono">
                FedEx (3-7 business days)
              </Typography>
            </Box>
            <Box>
              <Typography
                fontSize="12px"
                color="rgba(51, 51, 51, 0.5)"
                className="VulfMono"
                mb="4px"
              >
                Payment Method
              </Typography>

              <Typography
                fontSize="14px"
                color="#333333"
                className="VulfMono"
                mb="25px"
              >
                ending with 9616
              </Typography>
              <Typography
                fontSize="12px"
                color="rgba(51, 51, 51, 0.5)"
                className="VulfMono"
                mb="4px"
              >
                Billing Address
              </Typography>

              <Typography
                fontSize="14px"
                color="#333333"
                className="VulfMono"
                mb="25px"
              >
                Stedman Cleveland 4523 Woodman Avenue Apt 105 Sherman Oaks, CA
                91423
              </Typography>
            </Box>
          </Box>
        </fieldset>
      </Box>
    </Box>
  );

  return (
    <div>
      <Button
        onClick={toggleDrawer("right", true)}
        display="flex"
        justifycontent="center"
        alignitems="center"
        sx={{ cursor: "pointer" }}
      >
        <Box
          component="img"
          src="/images/dropsBtn.png"
          sx={{ width: `${!isDesktop && "30px"}` }}
        />
        <Typography
          ml="8px"
          fontSize={isDesktop ? "18px" : "14px"}
          color="#000"
          className="recoleta"
        >
          Drops
        </Typography>
      </Button>
      <Drawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}

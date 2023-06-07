import { Button, Toolbar } from "@mui/material";
import React, { useEffect } from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { FETCH_WRAPPER } from "../../api";
import { useDispatch } from "react-redux";
import { cartProducts } from "../../Redux/cartSlice";

const Buttons = ({ postData }) => {
  //   const navigate = useNavigate();

  const dispatch = useDispatch();

  const addToCart = async () => {
    try {
      const result = await FETCH_WRAPPER.post("addcart", { ...postData });
      console.log(result);
      alert(result.data.msg);
      if (result) {
        const result = await FETCH_WRAPPER.post("getcart", { ...postData });
        console.log(result);
        dispatch(cartProducts(result.data.result));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Toolbar display="flex" style={{ justifyContent: "space-between" }}>
        <Button
          variant="outlined"
          style={{ marginRight: "10px" }}
          startIcon={<ShoppingBasketIcon />}
        >
          Buy
        </Button>
        <Button
          variant="contained"
          onClick={addToCart}
          endIcon={<ShoppingCartIcon />}
        >
          Add to Cart
        </Button>
      </Toolbar>
    </>
  );
};

export default Buttons;

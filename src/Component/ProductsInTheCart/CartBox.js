import React, { useEffect } from "react";
import { Container, Drawer } from "@mui/material";
import Cart from "./Cart";
import SecondComponent from "./SecondComponent";
import FirstComponent from "./FirstComponent";
import ImagesGrid1 from "../ImagesGrid1";
import ImagesGrid2 from "../ImagesGrid2";

// Define the products category data
const products = [
  {
    id: 21,
    title: "realme C51 (Carbon Black) ",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/5/q/6/-original-imags487ftf3g2s7.jpeg?q=70",
    price: 8999,
    mrp: 10000,
    RAM: "4 GB", 
    ROM: "64 GB",
  },
  {
    id: 22,
    title: "REDMI 10 Power (Power Black)",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/e/y/b/-original-imageftfzx8gfkys.jpeg?q=70",
    price: 10970,
    mrp: 18999,
    RAM: "8 GB", 
    ROM: "128 GB",
  },
  {
    id: 23,
    title: "SAMSUNG Galaxy S23 Ultra 5G (Green)",
    image:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/2/s/7/-original-imagmg6gktts6sfy.jpeg?q=70",
    price: 124999,
    mrp: 149999,
    RAM: "12 GB", 
    ROM: "256 GB",
  },
  {
    id: 24,
    title: "OPPO A17k (Navy Blue)",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/5/r/-original-imagjzxuggyzybxf.jpeg?q=70",
    price: 8353,
    mrp: 10000,
    RAM: "3 GB", 
    ROM: "64 GB",
  },
  {
    id: 25,
    title: " APPLE iPhone 12 (Blue)",
    image:
      "https://rukminim2.flixcart.com/image/416/416/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg?q=70",
    price: 40999,
    mrp: 49999,
    RAM: "8 GB", 
    ROM: "64 GB",
  },
  {
    id: 26,
    title: "vivo T2x 5G (Aurora Gold) ",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/c/s/x/-original-imagzjhwaaewgj8r.jpeg?q=70",
    price: 14999,
    mrp: 21100,
    RAM: "8 GB", 
    ROM: "128 GB",
  },
  {
    id: 27,
    title: "POCO X2 (Matrix Purple)",
    image:
      "https://rukminim2.flixcart.com/image/832/832/k65d18w0/mobile/w/u/h/poco-x2-mzb9013in-original-imafzz2hdysz9njg.jpeg?q=70",
    price: 7499,
    mrp: 9000,
    RAM: "6 GB", 
    ROM: "64 GB",
  },
  {
    id: 28,
    title: " Infinix HOT 30i (Glacier Blue) ",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/w/v/b/-original-imagz3cuzzsyh8ud.jpeg?q=70",
    price: 17999,
    mrp: 20000,
    RAM: "4 GB", 
    ROM: "64 GB",
  },
  {
    id: 29,
    title: "realme Narzo N53 (Feather Black)",
    image:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/0/n/r/narzo-n53-rmx3761-realme-original-imagpygzxcuysz9k.jpeg?q=70",
    price: 9099,
    mrp: 8000,
    RAM: "4 GB", 
    ROM: "64 GB",
  },
  {
    id: 30,
    title: "MOTOROLA G8 Power Lite (Arctic Blue)",
    image:
      "https://rukminim2.flixcart.com/image/832/832/kae95e80/mobile/8/3/2/motorola-g8-power-lite-pajc0009in-original-imafrz85cnetvz5h.jpeg?q=70",
    price: 9999,
    mrp: 11000,
    RAM: "4 GB", 
    ROM: "64 GB",
  },
];

// Define the rice category data
const electronicAppliances = [
  {
    id: 1,
    title: "LG - 5 Star Grey",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/washing-machine-new/k/f/c/-original-imagvg7vyyth4hv7.jpeg?q=70",
    price: 28990,
    mrp: 30000,
  },
  {
    id: 2,
    title: "Whirlpool -  GREY DAZZLE)",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/washing-machine-new/h/2/o/-original-imagrdmhfthybhpn.jpeg?q=70",
    price: 10240,
    mrp: 12000,
  },
  {
    id: 3,
    title: "quartz",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/p/t/l/-original-imagpzzjq8sahgpw.jpeg?q=70",
    price: 5000,
    mrp: 8000,  
  },
  {
    id: 4,
    title: "Whirlpool - Water Purifiers",
    image:
      "https://rukminim2.flixcart.com/image/400/400/xif0q/water-purifier/n/f/y/-original-imagu3scfuqp3hjh.jpeg?q=90",
    price: 15000,
    mrp: 18000,
  },
  {
    id: 5,
    title: "Panasonic - Solo Microwave Oven ",
    image:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/microwave-new/y/t/t/-original-imagqkfykrwhpfqs.jpeg?q=70",
    price: 5000,
    mrp: 8000,  
  },
  {
    id: 6,
    title: "ZunVolt - Mixer Grinder ",
    image:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/mixer-grinder-juicer/t/p/v/power-zunvolt-original-imagz629gj32pqqz.jpeg?q=70",
    price: 2500,
    mrp: 1500,  
  },
  {
    id: 7,
    title: "Godrej  AC - White  ",
    image:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/air-conditioner-new/q/2/y/-original-imagz59tfm2hgr2m.jpeg?q=70",
    price: 32990,
    mrp: 35000,
  },
  {
    id: 8,
    title: "USHA - Induction Cooktop ",
    image:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/induction-cook-top/v/4/5/-original-imagpymnzmvwzrxd.jpeg?q=70",
    price: 2599,
    mrp: 4500,
  },
  {
    id: 9,
    title: "realme - Refrigerator ",
    image:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/refrigerator-new/r/e/l/-original-imaggs9nhrntdpex.jpeg?q=70",
    price: 45990,
    mrp: 47000,
  },
  {
    id: 10,
    title: "MarQ - Full HD LED Smart Android TV ",
    image:
      "https://rukminim2.flixcart.com/image/416/416/k2w6xe80/television/z/2/z/marq-by-flipkart-43safhd-original-imafm59f3ryfyhsh.jpeg?q=70",
    price: 22000,
    mrp: 25000,
  },
];

const CartBox = ({
  isCartDrawerOpen,
  setIsCartDrawerOpen,
  onCartItemCountChange,
}) => {
  const [cartItems, setCartItems] = React.useState([]);
  const [cartEmpty, setCartEmpty] = React.useState(false);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: product.quantity }
            : item
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, product]);
      setCartEmpty(false); 
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
    setCartEmpty(true);
    // window.location.reload();
  };

  // Call the onCartItemCountChange function whenever the cartItems change
  useEffect(() => {
    onCartItemCountChange(cartItems.length);
  }, [cartItems, onCartItemCountChange]);

  return (
    <div>
      <Container maxWidth="xxl">
        {/* Products component */}
        <FirstComponent
          products={products}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          checkEmpty={cartEmpty}
        />
        <ImagesGrid1 />
        {/* Second Component */}
        <SecondComponent
          products={electronicAppliances}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          checkEmpty={cartEmpty}
        />
        <ImagesGrid2 />
      </Container>


{/* <Cart in drawer component handled by cart icon */}
      <Drawer
        PaperProps={{
          sx: {
            width: {
              sm: "80vw",
              xs: "80vw",
              lg: "40vw",
              md: "40vw",
              xl: "40vw",
            },
          },
        }}
        anchor="right"
        open={isCartDrawerOpen}
        onClose={() => setIsCartDrawerOpen(false)}
      >
        <Cart
          cartItems={cartItems}
          onRemoveFromCart={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
          onClearCart={handleClearCart}          
        />
      </Drawer>
    </div>
  );
};

export default CartBox;

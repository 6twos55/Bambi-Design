import MiladaClothImg from "../../assets/pictures/trendingWears/Milada_vigovera.jpg";
import SanthoshClothing from "../../assets/pictures/trendingWears/Santhosh_kumar.jpg";
import TobiasClothing from "../../assets/pictures/trendingWears/Tobias_tullius.jpg";
import HaryoClothing from "../../assets/pictures/trendingWears/Haryo_Setyadi.jpg";
import CarterClothing from "../../assets/pictures/trendingWears/Carter_love.jpg";
import MatthewClothing from "../../assets/pictures/trendingWears/Matthew_moloney.jpg";
import MankiClothing from "../../assets/pictures/trendingWears/Manki_kim.jpg";

import IntroBgImg from "../../assets/pictures/Intro_bg.jpg";
import SpecialItemImg from "../../assets/pictures/special_home/Special_Item.jpg";

import ResinStoneImg from "../../assets/pictures/resin/Resin_stones.jpg";
import ResinCupsImg from "../../assets/pictures/resin/Colored_Resin_Cups.jpg";
import ResinCollectionImg from "../../assets/pictures/resin/Resin_Collection.jpg";

import ShopMenImg from "../../assets/pictures/shoppingFor/Shop_men.jpg";
import ShopWomenImg from "../../assets/pictures/shoppingFor/Shop_women.jpg";
import ShopChildrenImg from "../../assets/pictures/shoppingFor/Shop_children.jpg";

import {
  Box,
  Paper,
  Typography,
  Button,
  Tooltip,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Avatar,
  Fab,
} from "@mui/material";
import SpecialImg from "../../assets/pictures/Home_banner.jpg";
import { useEffect, useRef, useState } from "react";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
import { red } from "@mui/material/colors";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

// Carousel image items
const trendingWears = [
  { picture: MiladaClothImg, name: "Milada Vigovera", price: "3,000.00" },
  { picture: SanthoshClothing, name: "Santhosh Kumar", price: "1,000.00" },
  { picture: TobiasClothing, name: "Tobias Tullius", price: "800.00" },
  { picture: HaryoClothing, name: "Haryo Setyadi", price: "10,000.00" },
  { picture: CarterClothing, name: "Carter Love", price: "900.00" },
  { picture: MatthewClothing, name: "Matthew Moloney", price: "15,000.00" },
  { picture: MankiClothing, name: "Manki Kim", price: "40,000.00" },
];

const shoppingCategories = [
  {
    title: "Shop men",
    image: ShopMenImg,
    letter: "M",
    path: "/",
  },
  {
    title: "Shop women",
    image: ShopWomenImg,
    letter: "W",
    path: "/",
  },
  {
    title: "Shop children",
    image: ShopChildrenImg,
    letter: "C",
    path: "/",
  },
];

const Home = () => {
  const [hoverA, setAHover] = useState(false);
  const [hoverB, setBHover] = useState(false);
  const [arrow1Color, setArrow1Color] = useState(false);
  const [arrow2Color, setArrow2Color] = useState(false);

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 1900);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Carousel scrolling section
  const scrollRef = useRef(null);

  // Function to handle manual scroll
  const handleManualScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 292;
      const targetScroll =
        direction === "left"
          ? scrollRef.current.scrollLeft - scrollAmount
          : scrollRef.current.scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="Home" style={{ position: "relative" }}>
      {/* Home banner image */}
      <Box
        position="relative"
        sx={{
          backgroundImage: `url(${SpecialImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: { xs: "80vh", sm: "90vh", md: "100vh" },
        }}
      >
        {/* Home banner texts block */}
        <Paper
          sx={{
            position: "sticky",
            top: { xs: 420, sm: 350, lg: 300 },
            left: { xs: 10, sm: 20, md: 40 }, // 580
            width: { xs: "80vw", md: "40vw" },
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            marginBottom: { xs: 5, md: 10 },
          }}
          elevation={0}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "28px", sm: "35px", md: "45px", lg: "50px" },
              fontFamily: "Oswald",
              fontWeight: "bold",
              color: "#000",
            }}
          >
            HOLIDAY SPECIAL
          </Typography>

          <Box sx={{ display: "flex" }}>
            <Button
              onMouseOver={() => setAHover(true)}
              onMouseLeave={() => setAHover(false)}
              sx={{
                background: "white",
                color: "black",
                padding: {
                  xs: "4px 17px",
                  sm: "6px 24px",
                  md: "8px 36px",
                  lg: "10px 43px",
                },
                borderRadius: 0,
                fontWeight: hoverA ? 600 : 400,
                fontFamily: "Oswald",
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
              }}
              className="bannerBtn"
            >
              VIEW ITEM
            </Button>
            <Button
              onMouseOver={() => setBHover(true)}
              onMouseLeave={() => setBHover(false)}
              sx={{
                background: "white",
                color: "black",
                padding: {
                  xs: "4px 17px",
                  sm: "6px 24px",
                  md: "8px 36px",
                  lg: "10px 43px",
                },
                borderRadius: 0,
                borderLeft: "1px solid #000",
                fontWeight: hoverB ? 600 : 400,
                fontFamily: "Oswald",
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
              }}
              className="bannerBtn"
            >
              SHOP WOMEN
            </Button>
          </Box>
        </Paper>
      </Box>

      {/* Resins intro */}
      <Link style={{ textDecoration: "none", color: "#000" }}>
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            paddingBlock: { xs: 2, sm: 5, md: 10 },
            justifyContent: "space-between",
            paddingInline: { xs: 2, sm: 4, md: 8, lg: 18 },
            width: "100%",
            textTransform: "unset",
            color: "#000",
            textAlign: "left",
          }}
          className="resinIntro"
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "Oswald",
                fontSize: { xs: "13px", sm: "18px", md: "20px", lg: "24px" },
                letterSpacing: "1px",
              }}
              variant="h4"
            >
              Explore our ravishing resin products!
            </Typography>
          </Box>

          {/* Resin images section */}
          <Box sx={{ display: "flex" }}>
            <Card
              elevation={0}
              sx={{
                width: { xs: 80, sm: 150, md: 180, lg: 220 },
                display: { xs: "none", md: "flex" },
                borderRadius: 0,
              }}
            >
              <CardMedia
                component="img"
                sx={{ height: { xs: 60, sm: 130, md: 160, lg: 200 } }}
                image={ResinStoneImg}
                alt="Resin"
              />
            </Card>

            <Card
              elevation={0}
              sx={{
                width: { xs: 80, sm: 150, md: 180, lg: 220 },
                display: "flex",
                borderRadius: 0,
              }}
            >
              <CardMedia
                component="img"
                sx={{ height: { xs: 60, sm: 130, md: "160px", lg: 200 } }}
                image={ResinCupsImg}
                alt="Resin"
              />
            </Card>
          </Box>
        </Button>
      </Link>

      {/* Trending carousel block */}
      <Box
        sx={{
          pt: { xs: 3, md: 7 },
          paddingInline: { xs: 1, md: 2 },
          position: "relative",
        }}
      >
        <Typography
          variant="h5"
          fontSize={{ xs: "18px", sm: "22px", md: "25px", lg: "30px" }}
          fontFamily="Oswald"
          fontWeight={600}
          mb={0.5}
          ml={1}
        >
          TRENDING WEARS
        </Typography>

        {/* Carousel */}
        <Box
          ref={scrollRef}
          className="popularCarousel"
          sx={{
            width: "100%",
            overflowY: "hidden",
            scrollBehavior: "smooth",
            display: "flex",
            gap: 0.3,
            paddingLeft: { xs: 8, sm: 22, md: 28, lg: 36 },
            transition: "all 0.5s ease",
          }}
        >
          {/* Content */}
          {trendingWears.map((wear) => (
            <Link
              key={wear.name + Math.random() * wear.name.length}
              to="/"
              style={{ textDecoration: "none" }}
            >
              <Card
                elevation={0}
                sx={{
                  width: { xs: 190, sm: 220, md: 250, lg: 290 },
                  borderRadius: 0,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ height: { xs: 320, sm: 350, md: 380, lg: 420 } }}
                  image={wear.picture}
                  alt={wear.name}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBlock: 0.5,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ fontSize: { xs: "10px", sm: "12px", md: "14px" } }}
                    fontWeight="bold"
                  >
                    {wear.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: { xs: "9px", sm: "10px", md: "13px" } }}
                  >
                    {"₦" + wear.price}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Box>

        {/* Scroll buttons */}
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            width: { xs: "88%", sm: "90%", md: "93%" },
            justifyContent: "space-between",
            top: { xs: 180, sm: 210, md: 240, lg: 280 },
            left: { xs: 25, sm: 50 },
          }}
        >
          <Tooltip title="Left" disableInteractive>
            <IconButton
              size="small"
              aria-label="scroll left"
              onClick={() => handleManualScroll("left")}
              onMouseOver={() => setArrow1Color(true)}
              onMouseLeave={() => setArrow1Color(false)}
              sx={{
                borderRadius: 0,
                backgroundColor: `${
                  !arrow1Color ? "#1adbdf" : "#3ee0e3"
                } !important`,
              }}
            >
              <ChevronLeftIcon sx={{ color: "#000", fontSize: "20px" }} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Right" disableInteractive>
            <IconButton
              size="small"
              aria-label="scroll right"
              onClick={() => handleManualScroll("right")}
              onMouseOver={() => setArrow2Color(true)}
              onMouseLeave={() => setArrow2Color(false)}
              sx={{
                borderRadius: 0,
                backgroundColor: `${
                  !arrow2Color ? "#1adbdf" : "#3ee0e3"
                } !important`,
              }}
            >
              <ChevronRightIcon sx={{ color: "#000", fontSize: "20px" }} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* Intro block */}
      <Box
        position="relative"
        sx={{
          backgroundImage: `url(${IntroBgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: { xs: "60vh", sm: "100vh", md: "110vh" },
          position: "relative",
          mt: { xs: 4, sm: 6, md: 10 },
        }}
      >
        <Paper
          sx={{
            position: "absolute",
            top: { xs: 150, sm: 220, md: 280 },
            left: { xs: 20, md: 50 },
            background: "transparent",
            width: { xs: "70vw", sm: "55vw", md: "45vw" },
          }}
          elevation={0}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Oswald",
              fontSize: { xs: "20px", sm: "28px", md: "35px" },
              mb: { xs: 1, sm: 4 },
            }}
          >
            Shop the latest trends and timeless classics to refresh your
            wardrobe and express your unique style.
          </Typography>

          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                background: "#1adbdf",
                color: "#000",
                borderRadius: "0",
                transition: "all 0.3s ease-out",
                padding: { xs: "5px 28px", sm: "5px 40px", md: "5px 75px" },
                fontFamily: "Oswald",
                fontSize: { xs: "14px", sm: "18px", md: "20px" },
                mt: {xs: 2, md: 3},
              }}
              className="introBtn"
            >
              Start shopping!
            </Button>
          </Link>
        </Paper>
      </Box>

      {/* Scroll to top button */}
      {showScrollTop && (
        <Fab
          sx={{
            background: "#1adbdf",
            position: "fixed",
            bottom: {xs: 80, sm: 55},
            right: {xs: 12, md: 20},
            borderRadius: 2,
            zIndex: 1200,
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="toTupBtn"
          aria-label="scroll to top"
        >
          <KeyboardArrowUpOutlinedIcon
            sx={{ fontSize: { xs: "25px", md: "30px" } }}
          />
        </Fab>
      )}

      {/* Shopping categories */}
      <Box mt={{ xs: 4, sm: 8 }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Oswald",
            fontSize: { xs: "16px", sm: "20px", md: "25px" },
            fontWeight: "bold",
            mb: { xs: 1, md: 3 },
            ml: { xs: 1, md: 1.5 },
          }}
        >
          WHO ARE YOU SHOPPING FOR?...
        </Typography>

        {/* Shopping choices pictures */}
        <Box sx={{ display: "flex", overflowX: "hidden" }}>
          {shoppingCategories.map((category) => (
            <Tooltip
              key={category.title}
              title={category.title}
              disableInteractive
              followCursor
            >
              <Link
                to={category.path}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Box
                  elevation={0}
                  sx={{
                    width: "33vw",
                    borderRadius: 0,
                    backgroundImage: `url(${category.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: { xs: 350, sm: 450, md: 620, lg: 720 },
                    pl: 1,
                  }}
                >
                  {category.letter}
                </Box>
              </Link>
            </Tooltip>
          ))}
        </Box>
      </Box>

      {/* resin collection block */}
      <Box
        sx={{
          px: { xs: 2, sm: 4, md: 8, lg: 14 },
          mt: { xs: 6, sm: 8, md: 10, lg: 14 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 3, sm: 4, md: 5 },
          alignItems: "center",
        }}
      >
        <Card
          elevation={0}
          sx={{
            width: { xs: "100%", md: "50%" },
            borderRadius: 0,
          }}
        >
          <CardMedia
            component="img"
            sx={{
              height: { xs: 350, sm: 450, md: 500, lg: 550 },
              objectFit: "cover",
            }}
            image={ResinCollectionImg}
            alt="Resin"
          />
        </Card>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center" },
            justifyContent: "center",
            gap: { xs: 1.5, sm: 2 },
            width: { xs: "100%", md: "50%" },
            px: { xs: 2, sm: 4, md: 0 },
          }}
        >
          <Typography
            variant="h5"
            fontFamily="Oswald"
            fontSize={{ xs: "20px", sm: "22px", md: "25px" }}
            textAlign={{ xs: "center", md: "left" }}
          >
            Resin book covers
          </Typography>

          <Typography
            variant="body1"
            textAlign={{ xs: "center" }}
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              color: "#656565",
            }}
          >
            Resins are versatile materials known for their durability and glossy
            finish. They are used to create unique, eye-catching products such
            as book covers, jewelry, and home decor.
          </Typography>

          <Button
            sx={{
              background: "#1adbdf",
              color: "#000",
              borderRadius: 0,
              transition: "all 0.3s ease-out",
              padding: { xs: "8px 40px", sm: "10px 60px", md: "12px 75px" },
              fontFamily: "Oswald",
              fontSize: { xs: "14px", sm: "15px" },
              mt: { xs: 1, sm: 2 },
              width: { xs: "100%", sm: "auto" },
            }}
            className="resinCollectionBtn"
          >
            Discover resins
          </Button>
        </Box>
      </Box>

      {/* special item */}
      <Box
        sx={{
          px: { xs: 2, sm: 4, md: 8, lg: 14 },
          mt: { xs: 6, sm: 8, md: 10, lg: 14 },
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          gap: { xs: 3, sm: 4, md: 5 },
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "center" },
            justifyContent: "center",
            gap: { xs: 1.5, sm: 2 },
            width: { xs: "100%", md: "50%" },
            px: { xs: 2, sm: 4, md: 0 },
          }}
        >
          <Typography
            variant="h5"
            fontFamily="Oswald"
            fontSize={{ xs: "20px", sm: "22px", md: "25px" }}
            textAlign="center"
          >
            Shyam Crotchett
          </Typography>

          <Typography
            variant="body1"
            textAlign="center"
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              color: "#656565",
              maxWidth: { xs: "100%", md: 700 },
            }}
          >
            Made from refined cotton and top notch design patterns. Slide into
            next level comfort and experience fashion in the newest way
            affordable to cottton-kind!
          </Typography>

          <Box sx={{ textAlign: "center", mt: { xs: 1, sm: 2 } }}>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "18px" },
                mb: 1,
              }}
            >
              ₦45,000.00
            </Typography>

            <Button
              sx={{
                background: "#1adbdf",
                color: "#000",
                borderRadius: 0,
                transition: "all 0.3s ease-out",
                padding: { xs: "8px 40px", sm: "10px 60px", md: "12px 75px" },
                fontFamily: "Oswald",
                fontSize: { xs: "14px", sm: "15px" },
                width: { xs: "100%", sm: "auto" },
              }}
              className="specialItemBtn"
            >
              Add to bag
            </Button>
          </Box>
        </Box>

        <Card
          elevation={0}
          sx={{
            width: { xs: "100%", md: "50%" },
            borderRadius: 0,
          }}
        >
          <CardMedia
            component="img"
            sx={{
              height: { xs: 350, sm: 450, md: 500, lg: 550 },
              objectFit: "cover",
            }}
            image={SpecialItemImg}
            alt="Special item"
          />
        </Card>
      </Box>

      {/* users reviews block */}
      {/* top text */}
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Oswald",
          fontWeight: 600,
          fontSize: { xs: "24px", sm: "28px", md: "38px" },
          mt: { xs: 12, sm: 16, md: 24 },
          color: "#0fb3b6",
          textAlign: "center",
          px: 2,
        }}
      >
        ● What customers have to say ●
      </Typography>

      {/* Comments section */}
      <Box
        sx={{
          mt: { xs: 2, sm: 3 },
          mb: { xs: 12, sm: 16, md: 25 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 1.5, sm: 4, md: 8, lg: 20 },
          position: "relative",
        }}
      >
        {/* Quote icons */}
        <Typography
          variant="div"
          sx={{
            fontFamily: "monospace",
            fontSize: { xs: "50px", sm: "100px", md: "180px" },
          }}
        >
          &ldquo;
        </Typography>

        <Card
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 0, md: 1 },
            alignItems: "center",
            mt: { xs: 2, sm: 5, md: 10 },
            width: { xs: "100%", md: "auto" },
          }}
        >
          <CardContent sx={{ px: { xs: "5px", sm: "10px", md: "16px" } }}>
            <Typography
              variant="h5"
              sx={{
                maxWidth: 800,
                fontStyle: "italic",
                textAlign: "center",
                letterSpacing: "0.3px",
                fontSize: { xs: "16px", sm: "18px", md: "24px" },
                px: { xs: 1, sm: 2 },
              }}
            >
              I absolutely love shopping here! The quality of the clothes is
              amazing and the styles are always on trend!
            </Typography>
          </CardContent>

          <CardHeader
            sx={{ padding: { xs: 0, sm: "10px", md: "16px" } }}
            avatar={
              <Avatar
                sx={{
                  bgcolor: red[500],
                  width: { xs: 35, sm: 40 },
                  height: { xs: 35, sm: 40 },
                }}
                aria-label="profile"
              >
                S
              </Avatar>
            }
            title={
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "16px", md: "18px", fontWeight: 600 },
                }}
              >
                Sixtus Nwaogu
              </Typography>
            }
            subheader={
              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "14px" },
                }}
              >
                March 2, 2024
              </Typography>
            }
          />
        </Card>

        <Typography
          variant="div"
          sx={{
            fontFamily: "monospace",
            fontSize: { xs: "50px", sm: "100px", md: "180px" },
          }}
        >
          &rdquo;
        </Typography>
      </Box>

      {/* Top mini text */}
      <Link to="/" style={{ color: "#000", textDecoration: "none" }}>
        <Box
          sx={{
            py: 1,
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          <Typography variant="p" fontSize="13px">
            A Whole New & Unique Design Experience Like Never Seen Before...
          </Typography>
        </Box>
      </Link>
    </div>
  );
};

export default Home;

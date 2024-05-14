import MiladaClothImg from "../../assets/pictures/trendingWears/Milada_vigovera.jpg";
import RyanClothing from "../../assets/pictures/trendingWears/Ryan_hoffman.jpg";
import SanthoshClothing from "../../assets/pictures/trendingWears/Santhosh_kumar.jpg";
import TobiasClothing from "../../assets/pictures/trendingWears/Tobias_tullius.jpg";
import HaryoClothing from "../../assets/pictures/trendingWears/Haryo_Setyadi.jpg";
import IlyaClothing from "../../assets/pictures/trendingWears/Ilya_FFHI3.jpg";
import CaioClothing from "../../assets/pictures/trendingWears/Caio_coelho.jpg";
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

import { Box, Paper, Typography, Button, Tooltip, IconButton, Card, CardMedia, CardContent, CardHeader, Avatar, Fab } from "@mui/material";
import SpecialImg from "../../assets/pictures/Home_banner.jpg";
import { useRef, useState } from "react";

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from "react-router-dom";
import { red } from "@mui/material/colors";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

// Carousel image items
const trendingWears = [
  {picture: MiladaClothImg, name: "Milada Vigovera", price: "3,000.00"},
  {picture: RyanClothing, name: "Ryan Hoffman", price: "5,000.00"},
  {picture: SanthoshClothing, name: "Santhosh Kumar", price: "1,000.00"},
  {picture: TobiasClothing, name: "Tobias Tullius", price: "800.00"},
  {picture: HaryoClothing, name: "Haryo Setyadi", price: "10,000.00"},
  {picture: IlyaClothing, name: "Ilya FFHI3", price: "1,000.00"},
  {picture: CaioClothing, name: "Caio Coelho", price: "200.00"},
  {picture: CarterClothing, name: "Carter Love", price: "900.00"},
  {picture: MatthewClothing, name: "Matthew Moloney", price: "15,000.00"},
  {picture: MankiClothing, name: "Manki Kim", price: "40,000.00"},
];

const Home = () => {
  const [hoverA, setAHover] = useState(false);
  const [hoverB, setBHover] = useState(false);
  const [arrow1Color, setArrow1Color] = useState(false);
  const [arrow2Color, setArrow2Color] = useState(false);

  // Carousel scrolling section
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  // Store the current scroll position
  const scrollPositionRef = useRef(0);

  // Function to handle manual scroll
  const handleManualScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 292;
      if (direction === 'left') {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else if (direction === 'right') {
        scrollRef.current.scrollLeft += scrollAmount;
      }
      // Update the stored scroll position
      scrollPositionRef.current = scrollRef.current.scrollLeft;
      // Clear the interval to prevent conflicts
      clearInterval(intervalRef.current);

      // Restart automatic scrolling after a delay
      setTimeout(() => {
        // Set the interval only if it's not already set
        intervalRef.current = setInterval(() => {
          // Continue scrolling automatically from the stored position
          scrollRef.current.scrollLeft = scrollPositionRef.current;
          scrollRef.current.scrollLeft += 292;
        }, 3500);
      
      }, 1000); // Adjust the delay as needed
    }
  };

  //Automatic scroll
  // Set the interval only if it's not already set
  if (!intervalRef.current) {
    intervalRef.current = setInterval(() => {
      // Continue scrolling automatically from the stored position
      if (scrollRef.current) {
        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

        if (Math.ceil(scrollRef.current.scrollLeft) >= maxScroll) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollLeft = scrollPositionRef.current;
          scrollRef.current.scrollLeft += 292;
        }

      }
    }, 3500);
  }


  return (
    <div className="Home" style={{position: 'relative'}}>
      {/* Home banner image */}
      <Box position="relative"
        sx={{
          backgroundImage: `url(${SpecialImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat', width: '100%',
          height: {xs: '100vh', md: '110vh'},
        }}
      >
        {/* Home banner texts block */}
        <Paper
          sx={{
            position: "sticky",
            top: {xs: 580, sm: 350,lg: 300}, left: {xs: 10, sm: 20, md: 40}, // 580
            width: {xs: "80vw", md: "40vw"},
            background: "transparent", 
            display: "flex",
            flexDirection: "column",
            gap: 1,
            marginBottom: {xs: 5, md: 10},
          }} elevation={0}
        >
          <Typography variant="h6" sx={{fontSize: {xs: "28px", sm: "35px", md: "45px", lg: "50px"}, fontFamily: "Oswald", fontWeight: 'bold', color: "#000"}}>
            HOLIDAY SPECIAL
          </Typography>

          <Box sx={{display: "flex",}}>
            <Button
              onMouseOver={() => setAHover(true)}
              onMouseLeave={() => setAHover(false)}
              sx={{
                background: "white",
                color: "black",
                padding: {xs: "4px 17px", sm: "6px 24px", md: "8px 36px", lg: "10px 43px"},
                borderRadius: 0,
                fontWeight: hoverA ? 600 : 400,
                fontFamily: 'Oswald',
                fontSize: {xs: '12px', sm: '14px', md: '16px'}
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
                padding: {xs: "4px 17px", sm: "6px 24px", md: "8px 36px", lg: "10px 43px"},
                borderRadius: 0,
                borderLeft: "1px solid #000",
                fontWeight: hoverB ? 600 : 400,
                fontFamily: 'Oswald',
                fontSize: {xs: '12px', sm: '14px', md: '16px'}
              }}
              className="bannerBtn"
            >
              SHOP WOMEN
            </Button>
          </Box>
        </Paper>

      </Box>

      {/* Resins intro */}
      <Link style={{ textDecoration: 'none', color: '#000' }}>
        <Button 
          sx={{
            display: 'flex',
            alignItems: 'center',
            paddingBlock: {xs: 2, sm: 5, md: 10},
            justifyContent: 'space-between',
            paddingInline: {xs: 2, sm: 4, md: 8, lg: 18},
            width: '100%',
            textTransform: 'unset',
            color: '#000',
            textAlign: 'left',
            // backgroundColor: '#dddddd'
          }} 
          className="resinIntro"
        >
          <Box>
            <Typography sx={{fontFamily: 'Oswald', fontSize: {xs: '13px', sm: '18px', md: '20px', lg: '24px'}, letterSpacing: '1px'}} variant="h4">Explore our ravishing resin products!</Typography>
          </Box>

          {/* Resin images section */}
          <Box sx={{ display: 'flex' }}>
            <Card elevation={0} sx={{ width: {xs: 80, sm: 150, md: 180, lg: 220}, display: {xs: 'none', md: 'flex'}, borderRadius: 0 }}>
              <CardMedia
                component="img"
                sx={{height: {xs: 60, sm: 130, md: 160, lg: 200}}}
                image={ResinStoneImg}
                alt="Resin"
              />
            </Card>

            <Card elevation={0} sx={{ width: {xs: 80, sm: 150, md: 180, lg: 220}, display: 'flex', borderRadius: 0 }}>
              <CardMedia
                  component="img"
                  sx={{height: {xs: 60, sm: 130, md: 160, lg: 200}}}
                  image={ResinCupsImg}
                  alt="Resin"
                />
            </Card>
          </Box>

        </Button>
      </Link>
      
      {/* Trending carousel block */}
      <Box sx={{pt: {xs: 3, md: 7}, paddingInline: {xs: 1, md: 2}, position: "relative", }}>
        <Typography variant="h5" fontSize={{xs: "18px", sm: "22px", md: "25px", lg: "30px"}} fontFamily="Oswald" fontWeight={600} mb={0.5} ml={1}>
          TRENDING WEARS
        </Typography>

        {/* Carousel */}
        <Box ref={scrollRef} 
          className="popularCarousel"
          sx={{
            width: "100%",
            overflowY: "hidden",
            scrollBehavior: "smooth",
            display: "flex", gap: 0.3,
            paddingLeft: {xs: 18, sm: 22, md: 28, lg: 36},
            transition: "all 0.5s ease",
          }}
        >
          {/* Content */}
          { trendingWears.map((wear) => (
            <Link key={wear.name + (Math.random()*wear.name.length)} to="/" style={{textDecoration: "none"}}>
              <Card elevation={0} sx={{ width: {xs: 190, sm: 220, md: 250, lg: 290}, borderRadius: 0 }}>
                <CardMedia
                  component="img"
                  sx={{height: {xs: 320, sm: 350, md: 380, lg: 420} }}
                  image={wear.picture}
                  alt={wear.name}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBlock: 0.5
                  }}
                >
                  <Typography variant="body2" sx={{fontSize: {xs: "10px", sm: "12px", md: "14px"}}} fontWeight="bold">{wear.name}</Typography>
                  <Typography variant="body2" sx={{fontSize: {xs: "9px", sm: "10px", md: "13px"}}}>{"₦" + wear.price}</Typography>
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
            width: {xs: "88%", sm: "90%", md: "93%"},
            justifyContent: "space-between",
            top: {xs: 180, sm: 210, md: 240, lg: 280}, left: {xs: 25, sm: 50}
            
          }}
        >
          <Tooltip title="Left" disableInteractive>
            <IconButton
              size="small"
              aria-label="scroll left"
              onClick={() => handleManualScroll('left')}
              onMouseOver={() => setArrow1Color(true)}
              onMouseLeave={() => setArrow1Color(false)}
              sx={{
                borderRadius: 0,
                backgroundColor: `${!arrow1Color ? "#22c2c5" : "#4ed5d7"} !important`
              }}
            >
              <ChevronLeftIcon sx={{ color: "#000", fontSize: "20px"}} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Right" disableInteractive>
            <IconButton
              size="small"
              aria-label="scroll right"
              onClick={() => handleManualScroll('right')}
              onMouseOver={() => setArrow2Color(true)}
              onMouseLeave={() => setArrow2Color(false)}
              sx={{
                borderRadius: 0,
                backgroundColor: `${!arrow2Color ? "#22c2c5" : "#4ed5d7"} !important` 
              }}
            >
              <ChevronRightIcon sx={{ color: "#000", fontSize: "20px"}} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* Intro block */}
      <Box position="relative"
        sx={{
          backgroundImage: `url(${IntroBgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: {xs: '80vh', sm: '100vh', md: '120vh'},
          position: 'relative',
          mt: {xs: 4, sm: 6, md: 10},
        }}
      >
        {/* Intro text block */}
        <Paper
          sx={{
            position: "absolute",
            top: {xs: 150, sm: 220, md: 280}, left: {xs: 20, md: 50},
            background: "transparent", width: {xs: "70vw", sm: "55vw", md: "45vw"}
          }} elevation={0}
        >
          <Typography variant="h4" sx={{ fontFamily: "Oswald", fontSize: {xs: '20px', sm: "28px", md: '35px'} }} mb={1}>
            Lorem ipsum dolor sit amet consectetur adipisicing dolor ipsum quam sit amet.
          </Typography>

          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button
              sx={{
                background: "#22c2c5", color: "#000",
                borderRadius: "0",
                transition: "all 0.3s ease-out",
                padding: {xs: "5px 28px", sm: "5px 40px", md: "5px 75px"},
                fontFamily: 'Oswald',
                fontSize: {xs: "14px", sm: "18px", md: "20px"}, mt: 2,
              }}
              className="introBtn"
            >
              Start shopping!
            </Button>
          </Link>
        </Paper>

      </Box>

      {/* Scroll to top button */}
      <Fab
        sx={{
          background: "#22c2c5",
          position: 'sticky',
          mt: 2, top: '70%', left: {xs: '80%', sm: '90%', md: '94%'},
          borderRadius: 2,
        }}
        onClick={() => window.scrollTo(0, 0)}
        className="toTupBtn"
        aria-label="add"
      >
        <KeyboardArrowUpOutlinedIcon sx={{fontSize: {xs: '25px', md: '30px'},}} />
      </Fab>

      {/* Shopping categories */}
      <Box mt={{xs: 0, sm: 2, md: 8}}>
        <Typography variant="h4"  sx={{fontFamily: 'Oswald', fontSize: {xs: "16px", sm: "20px", md: "25px"}, fontWeight: 'bold', mb: {xs: 0.5, md: 1}, ml: {xs: 1, md: 1.5}}}>
          WHO ARE YOU SHOPPING FOR?...
        </Typography>

        {/* Shopping choices pictures */}
        <Box sx={{ display: 'flex', overflowX: 'hidden' }}>     
          <Tooltip title="Shop men" disableInteractive followCursor>
            <Link to="/" style={{textDecoration: 'none', color: "#fff", }}>
              <Box elevation={0} 
                sx={{
                  width: '33vw',
                  borderRadius: 0,
                  backgroundImage: `url(${ShopMenImg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  height: 750, pl: 1
                }}
              >
                M
              </Box>
            </Link>
          </Tooltip>
          <Tooltip title="Shop women" disableInteractive followCursor>
            <Link to="/" style={{textDecoration: 'none', color: "#fff", }}>
              <Box elevation={0} 
                  sx={{
                    width: '33vw',
                    borderRadius: 0,
                    backgroundImage: `url(${ShopWomenImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: 750, pl: 1
                  }}
                >
                  W
                </Box>
            </Link>
          </Tooltip>
          <Tooltip title="Shop children" disableInteractive followCursor>
            <Link to="/" style={{textDecoration: 'none', color: "#fff", }}>
              <Box elevation={0} 
                  sx={{
                    width: '33vw',
                    borderRadius: 0,
                    backgroundImage: `url(${ShopChildrenImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: 750, pl: 1
                  }}
                >
                  C
                </Box>
            </Link>
          </Tooltip>
        </Box>
      </Box>

      {/* resin collection block -- OVERFLOW ISSUE COMING FROM HERE */}
      <Box sx={{paddingInline: 14, mt: 14, justifyContent: "space-between", display: 'flex', gap: 5}}>
        <Card elevation={0} sx={{ width: 550, display: 'flex', borderRadius: 0 }}>
          <CardMedia
            component="img"
            sx={{height: 550}}
            image={ResinCollectionImg}
            alt="Resin"
          />
        </Card>

        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2}}>
          <Typography variant="h5" fontFamily="Oswald" fontSize='25px'>Resin book covers</Typography>
          <Typography variant="p" textAlign='center' maxWidth={700}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati error perferendis dicta pariatur facilis reiciendis enim quod dolores voluptas laboriosam.
          </Typography>

          <Button
            sx={{
              background: "#22c2c5",
              color: "#000",
              borderRadius: "0",
              transition: "all 0.3s ease-out",
              padding: "5px 75px",
              fontFamily: 'Oswald',
              fontSize: "15px",
              mt: 2,
            }}
            className="resinCollectionBtn"
          >
            Discover resins
          </Button>
        </Box>

      </Box>

      {/* special item */}
      <Box sx={{paddingInline: 14, mt: 14, justifyContent: "space-between", display: 'flex', gap: 5}}>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2}}>
          <Typography variant="h5" fontFamily="Oswald" fontSize='25px'>Shyam Crotchett</Typography>
          <Typography variant="p" textAlign='center' maxWidth={700}>
            Made from refined cotton and top notch design patterns. Slide into next level comfort and experience fashion in the newest way affordable to cottton-kind!
          </Typography>
          
          <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography>₦45,000.00</Typography>
            <Button
              sx={{
                background: "#22c2c5",
                color: "#000",
                borderRadius: "0",
                transition: "all 0.3s ease-out",
                padding: "5px 75px",
                fontFamily: 'Oswald',
                fontSize: "15px", mt: 1.2,
              }}
              className="specialItemBtn"
            >
              Add to bag
            </Button>
          </Box>
        </Box>

        <Card elevation={0} sx={{ width: 550, display: 'flex', borderRadius: 0 }}>
          <CardMedia
            component="img"
            sx={{height: 550}}
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
          fontFamily: 'Oswald',
          fontWeight: 600,
          fontSize: '38px', mt: 24,
          color: '#0fb3b6',
          textAlign: 'center',
        }}
      >
        ● What customers have to say ●
      </Typography>
      
      {/* Comments section */}
      <Box 
        sx={{
          mt: 3, mb: 25,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingInline: 20,
        }}
      >  

        {/* Quote icons */}
        <Typography variant="div" fontFamily={"monospace"} fontSize={"180px"}>
          &ldquo;
        </Typography>

        {/* Comments content */}
        <Card elevation={0} 
          sx={{
            display: 'flex',
            flexDirection: 'column', gap: 1,
            alignItems: 'center', mt: 10
          }}
        >

          <CardContent>
            <Typography
              variant="h5"
              sx={{
                maxWidth: 800,
                fontWeight: 600,
                fontStyle: 'italic',
                textAlign: 'center',
                letterSpacing: '0.3px'
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui in voluptate veritatis eos consequuntur quo nemo! A nulla...
            </Typography>
          </CardContent>

          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="profile">
                S
              </Avatar>
            }
            title={<Typography fontSize="18px">Sixtus Nwaogu J.</Typography>}
            subheader="September 14, 2023"
          />
        </Card>

        <Typography variant="div" fontFamily={"monospace"} fontSize={"180px"}>
          &rdquo;
        </Typography>
      </Box>


      {/* Top mini text */}
      {/* <Link to="/" style={{color: "#000", textDecoration: "none",}}>
        <Box
          sx={{
            pt: 1, textAlign: 'center', fontStyle: 'italic'
          }}
        >
          <Typography variant="p" fontSize="13px">
            A Whole New & Unique Design Experience Like Never Seen Before...
          </Typography>
        </Box>
      </Link> */}

    </div>
  )
}

export default Home;


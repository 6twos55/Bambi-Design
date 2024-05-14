import LogoImg from "../../assets/pictures/Babie's logo.png";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

import SideDrawer from "./sideNavigation";
import { Tooltip } from "@mui/material";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'user-account-popup-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      sx={{ mt: 1.7}}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={() => {
        handleMenuClose();
        setProfile(true);
      }}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  // shadow on scroll
  const [scrolling, setScrolling] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  // Icons switching
  const [wishList, setWishList] = useState(true);
  const [profile, setProfile] = useState(true);
  const [bag, setBag] = useState(true);

  const [transmit, setTransmit] = useState(false);

  const handleClearActives = () => {
    setBag(true);
    setWishList(true);
    setProfile(true);
    setTransmit(true);

    // setTimeout(() => {
    //   setTransmit(false);
    // }, 3000)
  }

  return(
    <nav onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="Navbar">

      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          elevation={scrolling ? 4 : 0}
          sx={{
            transition: "all 0.2s ease-in",
            background: `${ isHovered || scrolling ? "#fff" : "#5b5b5b00"}`,
            paddingTop: {xs: 0, md: 1}, paddingBottom: {xs: 0.5, md: 1.5}
          }}
          position='fixed'
        >
          <Toolbar elevation={0}>
            {/* logo */}
            <Box sx={{ mr: {xs: 4, md: 6, lg: 10} }}>
              <Link to="/" onClick={handleClearActives}>
                <img className='appLogo' src={LogoImg} alt='App logo' />
              </Link>
            </Box>

            {/* nav items */}
            <Box 
              className="navItems"
              sx={{
                display: { xs: 'none', md: 'flex' },
                mt: 3, gap: {xs: 2, sm: 5},
                fontSize: "13.5px",
                fontWeight: 700
              }}
            >
              <Link to={"#"} style={{textDecoration:'none', color:'#000'}}>
                <Typography
                  component="p" fontWeight="500" noWrap
                  fontSize="14px"
                  fontFamily="Oswald"
                  letterSpacing="1.5px"
                >
                  JUST IN
                </Typography>
              </Link>
              <Link to={"#"} style={{textDecoration:'none', color:'#000'}}>
                <Typography
                  component="p" fontWeight="500" noWrap
                  fontSize="14px"
                  fontFamily="Oswald"
                  letterSpacing="1.5px"
                >
                  MEN
                </Typography>
              </Link>
              <Link to={"#"} style={{textDecoration:'none', color:'#000'}}>
                <Typography
                  component="p" fontWeight="500" noWrap
                  fontSize="14px"
                  fontFamily="Oswald"
                  letterSpacing="1.5px"
                >
                  WOMEN
                </Typography>
              </Link>
              <Link to={"#"} style={{textDecoration:'none', color:'#000'}}>
                <Typography
                  component="p" fontWeight="500" noWrap
                  fontSize="14px"
                  fontFamily="Oswald"
                  letterSpacing="1.5px"
                >
                  CHILDREN
                </Typography>
              </Link>
              <Link to={"#"} style={{textDecoration:'none', color:'#000'}}>
                <Typography
                    component="p" fontWeight="500" noWrap
                    fontSize="14px"
                    fontFamily="Oswald"
                    letterSpacing="1.5px"
                >
                  RESIN PRODUCTS
                </Typography>
              </Link>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            {/* Nav icons */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, marginTop: 2 }}>
              <Tooltip title="Search" disableInteractive>
                <IconButton
                  size="medium"
                  aria-label="search icon"
                >
                  <SearchRoundedIcon sx={{ color: "#000", fontSize: "22px"}} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Wish list" disableInteractive>
                <IconButton
                  size="medium"
                  aria-label="show new mails"
                  onClick={() => {
                    setWishList(false);
                    setProfile(true);
                    setBag(true);
                  }}
                >
                  <Badge badgeContent={"1"} color="error">
                    {wishList ? 
                    <FavoriteBorderOutlinedIcon sx={{ color: "#000", fontSize: "22px"}} />
                     : 
                    <FavoriteOutlinedIcon sx={{ color: "#000", fontSize: "22px"}} />}
                  </Badge>
                </IconButton>
              </Tooltip>
              <Tooltip title="Profile" disableInteractive>
                <IconButton
                  size="medium"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={(e) => {
                    handleProfileMenuOpen(e);

                    setProfile(false);
                    setWishList(true);
                    setBag(true);
                  }}
                >
                   {profile ? 
                    <PersonOutlineRoundedIcon sx={{ color: "#000", fontSize: "27px" }} />
                     : 
                    <PersonRoundedIcon sx={{ color: "#000", fontSize: "27px" }} />}
                </IconButton>
              </Tooltip>
              <Tooltip title="Bag" disableInteractive>
                <IconButton
                  size="medium"
                  aria-label="shopping bag"
                  onClick={() => {
                    setBag(false);
                    setWishList(true);
                    setProfile(true);
                  }}
                >
                  <Badge badgeContent={1} color="error">
                    {bag ? 
                    <LocalMallOutlinedIcon sx={{ color: "#000", fontSize: "22px"}} />
                     : 
                    <LocalMallRoundedIcon sx={{ color: "#000", fontSize: "22px"}} />}
                  </Badge>
                </IconButton>
              </Tooltip>
            </Box>

            {/* Side drawer */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, marginTop: 2 }}>
              <SideDrawer handleProfileMenuOpen={handleProfileMenuOpen} transmit={transmit} setTransmit={setTransmit} />
            </Box>

          </Toolbar>
        </AppBar>
        {renderMenu}
      </Box>

    </nav>

  );
}

export default Header;
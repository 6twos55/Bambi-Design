import { useEffect, useState } from "react"
import { Link as RouterLink } from 'react-router-dom';
import {
  Drawer,
  List,
  Divider,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  IconButton,
  Badge,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {InputGroup, FormControl} from 'react-bootstrap';


const SideDrawer = ({handleProfileMenuOpen, transmit, setTransmit}) => {
  const [state, setState] = useState(false);

  // Icons switching
  const [wishList, setWishList] = useState(true);
  const [profile, setProfile] = useState(true);
  const [bag, setBag] = useState(true);

  useEffect(() => {
    if(transmit) {
      setWishList(true);
      setProfile(true);
      setBag(true);
    }
  }, [transmit]);
  
  return (
    <div className="SideDrawer">
      {/* Menu button */}
      <IconButton
        size="large"
        aria-label="show more"
        aria-haspopup="true"
        onClick={() => setState(true)}
      >
        <MenuIcon sx={{ color: "black", fontSize: {xs: "25px", sm: "30px"}}} />
      </IconButton>

      
      <Drawer anchor="right" open={state} onClose={() => setState(false)}>

        {/* Cancel button */}
        <Box sx={{display: 'flex', justifyContent: 'end'}}>
          <IconButton onClick={()=> setState(false)}>
            <CloseRoundedIcon sx={{ fontSize: {xs: "28px", sm: "35px"}}} />
          </IconButton>
        </Box>

        <Box sx={{ paddingInline: '20px'}}>
          {/* Search box */}
          <form style={{ marginBlock: '15px' }} onSubmit={(e)=> e.preventDefault()}>
            <InputGroup> 
              <FormControl style={{ padding:{xs: '6px 25px 6px 7px', md: '12px 25px 12px 15px'}, fontFamily: "Oswald", letterSpacing: "1px" }}
                type="text"
                placeholder="Search..."
              />

              <InputGroup.Text id="navSearchBtn">
                <SearchRoundedIcon/>
              </InputGroup.Text>
            </InputGroup>
          </form>

          <Divider style={{ background: "gray" }} />

          {/* Nav items */}
          <List>
            <ListItemButton component={ RouterLink } to="/" onClick={()=> setState(false)}>
              <p style={{fontFamily: "Oswald", letterSpacing: '1px'}}>JUST IN</p>
            </ListItemButton>

            <ListItemButton component={ RouterLink } to="/" onClick={()=> setState(false)}>
              <p style={{fontFamily: "Oswald", letterSpacing: '1px'}}>MEN</p>
            </ListItemButton>

            <ListItemButton component={ RouterLink } to="/" onClick={()=> setState(false)}>
              <p style={{fontFamily: "Oswald", letterSpacing: '1px'}}>WOMEN</p>
            </ListItemButton>

            <ListItemButton component={ RouterLink } to="/" onClick={()=> setState(false)}>
              <p style={{fontFamily: "Oswald", letterSpacing: '1px'}}>CHILDREN</p>
            </ListItemButton>

            <ListItemButton component={ RouterLink } to="/" onClick={()=> setState(false)}>
              <p style={{fontFamily: "Oswald", letterSpacing: '1px'}}>RESINS</p>
            </ListItemButton>
          </List>

          <Divider style={{ background: "gray" }} />

          {/* Icons list */}
          <List>
            <ListItemButton component={ RouterLink } to="/"
              onClick={()=> {
                setState(false);

                setWishList(false);
                setProfile(true);
                setBag(true);

                setTransmit(false);
              }}
            >
              <ListItemText primary="Wish list" />
              <ListItemIcon>
                <Badge badgeContent={1} color="error">
                  {wishList ? 
                  <FavoriteBorderOutlinedIcon sx={{ color: "#000"}} />
                  : 
                  <FavoriteOutlinedIcon sx={{ color: "#000"}} />}
                </Badge>
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton component={ RouterLink } to="/"
              onClick={(e) => {
                handleProfileMenuOpen(e);

                setProfile(false);
                setWishList(true);
                setBag(true);

                setTransmit(false);
              }}
            >
              <ListItemText primary="Profile" />
              <ListItemIcon>
                {profile ? 
                <PersonOutlineRoundedIcon sx={{ color: "#000"}} />
                  : 
                <PersonRoundedIcon sx={{ color: "#000"}} />}
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton component={ RouterLink } to="/"
              onClick={()=> {
                setState(false);

                setBag(false);
                setWishList(true);
                setProfile(true);

                setTransmit(false);
              }}
            >
              <ListItemText primary="Bag" />
              <ListItemIcon>
                <Badge badgeContent={1} color="error">
                  {bag ? 
                  <LocalMallOutlinedIcon sx={{ color: "#000"}} />
                    : 
                  <LocalMallRoundedIcon sx={{ color: "#000"}} />}
                </Badge>
              </ListItemIcon>
            </ListItemButton>

          </List>

          <Divider style={{ background: "gray" }} />

        </Box>
        
      </Drawer>

    </div>
  );
}

export default SideDrawer;
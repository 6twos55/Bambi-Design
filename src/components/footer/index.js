import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      className="Footer"
      sx={{
        backgroundColor: "#1adbdf",
        padding: {xs: "10px 0px", md: "15px 40px"},
        display: "flex",
        flexDirection: {xs: "column", sm: "row"},
        alignItems: "center",
        justifyContent: "center",
        gap: {xs: 0.4, sm: 20, md: 40},
        fontSize: {xs: '13px', md: '14px'}
      }}
    >
      <Typography variant="p">@Bambi's Designs 2025</Typography>
      <Typography variant="p">Built with React and Material UI</Typography>
    </Box>
  );
};

export default Footer;

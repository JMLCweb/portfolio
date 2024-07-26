import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Toolbar,
  Button,
  Typography,
  IconButton,
  Dialog,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);

  const toggleDialog = (open) => () => {
    setDialogOpen(open);
  };

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Projects", path: "/projects" },
    { text: "About", path: "/about" },
    { text: "Contact", path: "/contact" },
  ];

  return (
    <div className="header">
      <Toolbar>
        <div className="circles">
          <div>JMLC</div>
          <div>Web</div>
          <div>Design</div>
        </div>
        <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
        <div className="navButtons">
          {menuItems.map((item) => (
            <Button
              key={item.text}
              color="inherit"
              onClick={() => navigate(item.path)}
            >
              {item.text}
            </Button>
          ))}
        </div>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDialog(true)}
          sx={{ display: { xs: "block", sm: "none" }, ml: "auto" }}
        >
          <MenuIcon />
        </IconButton>
        <Dialog fullScreen open={dialogOpen} onClose={toggleDialog(false)}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={toggleDialog(false)}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={() => {
                  navigate(item.path);
                  setDialogOpen(false);
                }}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Dialog>
      </Toolbar>
    </div>
  );
};

export default Header;

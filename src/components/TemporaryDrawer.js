import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

export default function TemporaryDrawer({ links, open, onClose }) {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {links.map((page, index) => (
          <ListItemButton
            key={index}
            component={Link}
            to={page[1]}
            onClick={onClose}
          >
            <ListItemIcon>{page[2]}</ListItemIcon>
            <ListItemText primary={page[0]} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={onClose}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

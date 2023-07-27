import {
  BoxProps,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { Link } from "react-router-dom";
import { menu } from "../../data/data";

const listStyle: BoxProps["sx"] = {
  "& .MuiListItemButton-root": {
    px: { xs: 1, sm: 2 },
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
  },
  "& a": {
    color: "inherit",
    textDecoration: "none",
  },
};

export const Menu = () => {
  return (
    <>
      {menu.map(({ id, title, listItems }) => (
        <List
          key={id}
          component="nav"
          subheader={
            <ListSubheader
              component="div"
              sx={{
                display: { xs: "none", md: "block" },
                textTransform: "uppercase",
              }}
            >
              {title}
            </ListSubheader>
          }
          sx={listStyle}
        >
          {listItems.map(({ id, title, url, icon }) => (
            <Link to={url} key={id}>
              <ListItemButton>
                <ListItemIcon sx={{ mr: 1 }}>{icon}</ListItemIcon>
                <ListItemText
                  primary={title}
                  sx={{ display: { xs: "none", md: "block" } }}
                />
              </ListItemButton>
            </Link>
          ))}
        </List>
      ))}
    </>
  );
};

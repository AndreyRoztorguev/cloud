import {
  Button,
  Card,
  CardContent,
  LinearProgress,
  linearProgressClasses,
  styled,
  SvgIcon,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FolderImage from "../assets/folder.png";
import StarIcon from "../assets/icons/star.svg?react";
import HomeIcon from "../assets/icons/home.svg?react";
import FoldersIcon from "../assets/icons/folders.svg?react";
import FileRequestIcon from "../assets/icons/fileRequest.svg?react";
import ShareIcon from "../assets/icons/share.svg?react";
import TrashBinIcon from "../assets/icons/trash.svg?react";
import { Logo } from "@/components/ui/Logo/Logo";
import { NavLink, Outlet } from "react-router-dom";

const drawerWidth = 260;

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));

// const UpgradeButton = styled(Button)(({ theme }) => ({
//   backgroundColor: theme.palette.brand.main,
//   "&:hover": {
//     backgroundColor: theme.palette.brand.main,
//   },
// }));

function MainLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left">
        <Toolbar>
          <Logo />
        </Toolbar>
        <Divider />
        <List>
          {[
            { label: "Home", href: "/", Icon: HomeIcon },
            { label: "My Files", href: "/files", Icon: FoldersIcon },
            { label: "Stared", href: "/starred", Icon: StarIcon },
            { label: "Files Request", href: "/request", Icon: FileRequestIcon },
            { label: "Shared", href: "/shared", Icon: ShareIcon },
            { label: "Deleted", href: "/deleted", Icon: TrashBinIcon },
          ].map(({ label, href, Icon }) => (
            <NavLink key={label} to={href}>
              {({ isActive }) => (
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <SvgIcon
                        sx={{ color: isActive ? "brand.main" : "#757897" }}
                        component={Icon}
                        inheritViewBox
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={label}
                      sx={{
                        ".MuiListItemText-primary": {
                          fontSize: "20px",
                          fontWeight: 600,
                          color: isActive ? "primary.main" : "inherit",
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              )}
            </NavLink>
          ))}
        </List>
        <Card sx={{ maxWidth: "180px", boxShadow: 2 }}>
          <CardContent>
            <img src={FolderImage} alt="folder" />
            <p>75% in use</p>
            <BorderLinearProgress variant="determinate" value={75} />
            <Button variant="contained" sx={{ height: "40px", maxWidth: "140px" }}>
              Upgrade
            </Button>
          </CardContent>
        </Card>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default MainLayout;

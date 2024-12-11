import {
  Avatar,
  Badge,
  BadgeProps,
  Button,
  Card,
  CardContent,
  IconButton,
  LinearProgress,
  linearProgressClasses,
  Stack,
  styled,
  SvgIcon,
} from "@mui/material";
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
import FolderImage from "@/assets/folder.png";
import StarIcon from "@/icons/star.svg?react";
import HomeIcon from "@/icons/home.svg?react";
import FoldersIcon from "@/icons/folders.svg?react";
import FileRequestIcon from "@/icons/fileRequest.svg?react";
import ShareIcon from "@/icons/share.svg?react";
import TrashBinIcon from "@/icons/trash.svg?react";
import NavSVGIcon from "@/icons/nav-active.svg?react";
import GearIcon from "@/icons/gear.svg?react"; //"@/icons/icons/gear.svg?react";
import { Logo } from "@/components/ui/Logo/Logo";
import { NavLink, Outlet } from "react-router-dom";
import { Image } from "@/components/ui/Image/Image";
import { Search } from "@/components/ui/Search/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const drawerWidth = 260;

const NotificationsBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  ".MuiBadge-badge": {
    display: "flex",
    right: 13,
    top: 14,
    border: `1px solid ${theme.palette.background.paper}`,
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white,
    width: "15px",
    height: "15px",
    minWidth: "15px",
    minHeight: "15px",
    fontSize: "8px",
  },
  height: "2.5rem",
  width: "2.5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: theme.shadows[3],
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius * 2,
}));

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
    backgroundColor: theme.palette.brand.main,
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.secondary.main,
    }),
  },
}));

function MainLayout() {
  return (
    <Box sx={{ display: "flex" }}>
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
        <Stack py={2} pt={0} sx={{ height: "100%", justifyContent: "space-between" }}>
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
                    <ListItemButton disableGutters>
                      <Box width={35} sx={{ display: "flex" }}>
                        {isActive && <SvgIcon component={NavSVGIcon} inheritViewBox />}
                      </Box>
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
          <Card
            sx={{
              boxShadow: 3,
              borderRadius: 5,
              maxWidth: "11.5rem",
              alignSelf: "center",
              width: "100%",
            }}>
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
              <Image src={FolderImage} sx={{ alignSelf: "self-start" }} alt="storage image" />
              <Typography
                variant="body1"
                sx={{ mb: 1, alignSelf: "start" }}
                color="primary"
                fontSize={16}
                fontWeight={600}>
                75% in use
              </Typography>
              <BorderLinearProgress variant="determinate" value={75} />
              <Stack direction="row" justifyContent="space-between" mt={0.5}>
                <Typography variant="caption" color="primary">
                  600GB
                </Typography>
                <Typography variant="caption" color="primary">
                  800GB
                </Typography>
              </Stack>
              <Button
                variant="primary"
                sx={{
                  textTransform: "capitalize",
                  mt: 2.5,
                  height: "2.5rem",
                  fontWeight: 700,
                }}>
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </Stack>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default" }}>
        <Toolbar sx={{ py: 1 }}>
          <Stack alignItems="flex-start">
            <Typography
              variant="h1"
              noWrap
              component="h1"
              fontSize="1.75rem"
              fontWeight={700}
              color="primary.main">
              My Cloud
            </Typography>
            <Typography
              variant="subtitle1"
              noWrap
              component="p"
              fontSize="1.25rem"
              fontWeight={600}
              color="textPrimary">
              Welcome, James Alto! 👋
            </Typography>
          </Stack>
          <Stack
            flexDirection="row"
            alignItems="center"
            justifyContent="end"
            flexGrow={1}
            gap="0.75rem">
            <Box maxWidth="21rem" width="100%">
              <Search id="search-files" />
            </Box>
            <NotificationsBadge badgeContent={4}>
              <SvgIcon component={NotificationsActiveIcon} inheritViewBox color="primary" />
            </NotificationsBadge>
            <IconButton
              color="primary"
              sx={{
                backgroundColor: "background.paper",
                height: "2.5rem",
                width: "2.5rem",
                borderRadius: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: 3,
              }}>
              <SvgIcon component={GearIcon} inheritViewBox />
            </IconButton>
            <Avatar
              sx={{ bgcolor: "red", width: 40, height: 40, boxShadow: 3, borderRadius: 2 }}
              variant="rounded">
              <Image
                sx={{ objectFit: "contain", width: "100%", height: "100%" }}
                src="data:image/jpeg;base64,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"
              />
            </Avatar>
          </Stack>
        </Toolbar>
        <Outlet />
      </Box>
    </Box>
  );
}

export default MainLayout;

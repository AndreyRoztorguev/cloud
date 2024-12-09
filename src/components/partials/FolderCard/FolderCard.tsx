import { Folder } from "@/models/types";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { FunctionComponent } from "react";
import FolderIcon from "@/icons/folder.svg?react";
import UserImage from "@/assets/mock/user.png";
import UserImage2 from "@/assets/mock/user2.png";
import UserImage3 from "@/assets/mock/user3.png";
import UserImage4 from "@/assets/mock/user4.png";
import { format } from "@/utils/formate";

const FolderCard: FunctionComponent<Folder> = ({ name, date, files, users }) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "333px",
        boxShadow: 3,
        borderRadius: 5,
        padding: 1,
      }}>
      <CardHeader
        sx={{
          ".MuiCardHeader-content": {
            alignSelf: "flex-start",
          },
        }}
        title={
          <Stack direction="row" gap={1} sx={{ alignSelf: "flex-start" }}>
            <Box
              width={40}
              height={40}
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                backgroundColor: "brand.light",
                borderRadius: 2.5,
              }}>
              <SvgIcon
                component={FolderIcon}
                inheritViewBox
                sx={{ width: "18px", height: "14px" }}
              />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="space-around">
              <Typography variant="body1" lineHeight={1} color="textSecondary" fontWeight={500}>
                {name}
              </Typography>
              <Typography variant="body2" lineHeight={1} fontWeight={500}>
                {date}
              </Typography>
            </Box>
          </Stack>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography variant="body2" fontWeight={500}>
              Shared Users
            </Typography>
            <AvatarGroup
              total={users.length}
              renderSurplus={(total) =>
                format.float(total, {
                  maximumSignificantDigits: 2,
                  roundingMode: "floor",
                  signDisplay: "always",
                })
              }
              spacing="small"
              sx={{
                ".MuiAvatarGroup-avatar": {
                  position: "static",
                  fontSize: "0.8rem",
                },
              }}>
              <Avatar alt="Remy Sharp" src={UserImage} />
              <Avatar alt="Travis Howard" src={UserImage2} />
              <Avatar alt="Agnes Walker" src={UserImage3} />
              <Avatar alt="Trevor Henderson" src={UserImage4} />
            </AvatarGroup>
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="space-between">
            <Typography variant="body2" fontWeight={500}>
              Inside Files
            </Typography>
            <Box
              sx={{
                width: "4.8rem",
                height: "2.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "brand.light",
                borderRadius: "0.625rem",
                color: "brand.main",
              }}>
              {format.float(files.length)}
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export { FolderCard };

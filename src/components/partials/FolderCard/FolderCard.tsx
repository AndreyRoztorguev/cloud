import { UsersGroup } from "@/components/partials/UsersGroup/UsersGroup";
import { Icons } from "@/components/ui/Icons/Icons";
import { Folder } from "@/models/types";
import { format } from "@/utils/formate";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Card, CardContent, CardHeader, IconButton, Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";

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
            <Icons.FileIcon />
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
            <UsersGroup users={users} />
            {/* <AvatarGroup
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
                  fontWeight: "600",
                  position: "static",
                  fontSize: "0.8rem",
                  color: "brand.main",
                  backgroundColor: "brand.light",
                },
              }}>
              <Avatar alt="Remy Sharp" src={UserImage} />
              <Avatar alt="Travis Howard" src={UserImage2} />
              <Avatar alt="Agnes Walker" src={UserImage3} />
              <Avatar alt="Trevor Henderson" src={UserImage4} />
            </AvatarGroup> */}
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
                fontWeight: 600,
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

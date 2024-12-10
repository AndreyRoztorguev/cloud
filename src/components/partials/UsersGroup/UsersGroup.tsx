import { format } from "@/utils/formate";
import { AvatarGroup, Avatar } from "@mui/material";
import { User } from "@/models/types";

const UsersGroup = ({ users }: { users: User[] }) => {
  return (
    <AvatarGroup
      total={users.length}
      max={4}
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
      {users.map(({ id, avatar }) => (
        <Avatar key={id} alt="Remy Sharp" src={avatar} />
      ))}
    </AvatarGroup>
  );
};

export { UsersGroup };

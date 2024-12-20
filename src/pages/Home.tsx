import { FilesTable } from "@/components/partials/FilesTable/FilesTable";
import { FolderCard } from "@/components/partials/FolderCard/FolderCard";
import { Folder } from "@/models/types";
import { Button, Container, Grid2, Stack, Typography } from "@mui/material";
import UserImage from "@/assets/mock/user.png";
import UserImage2 from "@/assets/mock/user2.png";
import UserImage3 from "@/assets/mock/user3.png";
import UserImage4 from "@/assets/mock/user4.png";

const folders: Folder[] = [
  {
    id: "1",
    type: "folder",
    name: "Documents",
    files: Array(3985),
    date: "Sep 25, 2022, 13:25 PM",
    users: [
      { id: "1", name: "Andrew", email: "andrew@gmail.com", avatar: UserImage },
      { id: "2", name: "Angela", email: "angela@gmail.com", avatar: UserImage2 },
      { id: "3", name: "Alice", email: "alice@gmail.com", avatar: UserImage3 },
      { id: "4", name: "Gena", email: "gena@gmail.com", avatar: UserImage4 },
      { id: "12", name: "Andrew", email: "andrew@gmail.com", avatar: UserImage },
      { id: "23", name: "Angela", email: "angela@gmail.com", avatar: UserImage2 },
      { id: "34", name: "Alice", email: "alice@gmail.com", avatar: UserImage3 },
      { id: "45", name: "Gena", email: "gena@gmail.com", avatar: UserImage4 },
    ],
  },
  {
    id: "2",
    type: "folder",
    name: "Music",
    files: Array(1110422134),
    date: "08-12-2024",
    users: [
      { id: "1", name: "Andrew", email: "andrew@gmail.com", avatar: UserImage },
      { id: "2", name: "Angela", email: "angela@gmail.com", avatar: UserImage2 },
      { id: "3", name: "Alice", email: "alice@gmail.com", avatar: UserImage3 },
      { id: "4", name: "Gena", email: "gena@gmail.com", avatar: UserImage4 },
      { id: "232", name: "Gena", email: "gena@gmail.com", avatar: UserImage4 },
      { id: "122", name: "Andrew", email: "andrew@gmail.com", avatar: UserImage },
      { id: "211", name: "Angela", email: "angela@gmail.com", avatar: UserImage2 },
      { id: "323r", name: "Alice", email: "alice@gmail.com", avatar: UserImage3 },
      { id: "4qqd", name: "Gena", email: "gena@gmail.com", avatar: UserImage4 },
      { id: "2312e", name: "Gena", email: "gena@gmail.com", avatar: UserImage4 },
    ],
  },
  {
    id: "3",
    type: "folder",
    name: "ProjectK",
    files: Array(10000),
    date: "08-12-2024",
    users: [
      { id: "1", name: "Andrew", email: "andrew@gmail.com", avatar: UserImage },
      { id: "2", name: "Angela", email: "angela@gmail.com", avatar: UserImage2 },
      { id: "3", name: "Alice", email: "alice@gmail.com", avatar: UserImage3 },
      { id: "4", name: "Gena", email: "gena@gmail.com", avatar: UserImage4 },
      { id: "1", name: "Andrew", email: "andrew@gmail.com", avatar: UserImage },
      { id: "2", name: "Angela", email: "angela@gmail.com", avatar: UserImage2 },
      { id: "3", name: "Alice", email: "alice@gmail.com", avatar: UserImage3 },
      { id: "4asd3", name: "Gena", email: "gena@gmail.com", avatar: UserImage4 },
      { id: "232", name: "Gena", email: "gena@gmail.com", avatar: UserImage4 },
      { id: "122", name: "Andrew", email: "andrew@gmail.com", avatar: UserImage },
      { id: "211", name: "Angela", email: "angela@gmail.com", avatar: UserImage2 },
      { id: "323r", name: "Alice", email: "alice@gmail.com", avatar: UserImage3 },
      { id: "4qqd", name: "Gena", email: "gena@gmail.com", avatar: UserImage4 },
      { id: "2312e", name: "Gena", email: "gena@gmail.com", avatar: UserImage4 },
    ],
  },
  {
    id: "4",
    type: "folder",
    name: "Rico Media",
    files: Array(36),
    date: "Sep 25, 2022, 13:25 PM",
    users: [
      { id: "1", name: "Andrew", email: "andrew@gmail.com", avatar: UserImage },
      { id: "2", name: "Angela", email: "angela@gmail.com", avatar: UserImage2 },
      { id: "3", name: "Alice", email: "alice@gmail.com", avatar: UserImage3 },
      { id: "4", name: "Gena", email: "gena@gmail.com", avatar: UserImage4 },
      { id: "323r", name: "Alice", email: "alice@gmail.com", avatar: UserImage3 },
      { id: "411", name: "Gena", email: "gena@gmail.com", avatar: UserImage4 },
      { id: "232", name: "Gena", email: "gena@gmail.com", avatar: UserImage4 },
      { id: "122", name: "Andrew", email: "andrew@gmail.com", avatar: UserImage },
      { id: "211", name: "Angela", email: "angela@gmail.com", avatar: UserImage2 },
      { id: "323r", name: "Alice", email: "alice@gmail.com", avatar: UserImage3 },
    ],
  },
  {
    id: "5",
    type: "folder",
    name: "New Dev",
    files: Array(999),
    date: "08-12-2024",
    users: [
      { id: "1", name: "Andrew", email: "andrew@gmail.com", avatar: UserImage },
      { id: "2", name: "Angela", email: "angela@gmail.com", avatar: UserImage2 },
      { id: "3", name: "Alice", email: "alice@gmail.com", avatar: UserImage3 },
      { id: "4", name: "Gena", email: "gena@gmail.com", avatar: UserImage4 },
      { id: "3asda2", name: "Alice", email: "alice@gmail.com", avatar: UserImage3 },
      { id: "432f", name: "Gena", email: "gena@gmail.com", avatar: UserImage4 },
      { id: "232", name: "Gena", email: "gena@gmail.com", avatar: UserImage4 },
      { id: "122", name: "Andrew", email: "andrew@gmail.com", avatar: UserImage },
      { id: "211", name: "Angela", email: "angela@gmail.com", avatar: UserImage2 },
      { id: "323r", name: "Alice", email: "alice@gmail.com", avatar: UserImage3 },
    ],
  },
  {
    id: "6",
    type: "folder",
    name: "Files 2022",
    files: Array(10000009),
    date: "08-12-2024",
    users: [
      { id: "1", name: "Andrew", email: "andrew@gmail.com", avatar: UserImage },
      { id: "2", name: "Angela", email: "angela@gmail.com", avatar: UserImage2 },
      { id: "3", name: "Alice", email: "alice@gmail.com", avatar: UserImage3 },
      { id: "4", name: "Gena", email: "gena@gmail.com", avatar: UserImage4 },
      { id: "3232f23f", name: "Alice", email: "alice@gmail.com", avatar: UserImage3 },
      { id: "4www2", name: "Gena", email: "gena@gmail.com", avatar: UserImage4 },
      { id: "232", name: "Gena", email: "gena@gmail.com", avatar: UserImage4 },
      { id: "122", name: "Andrew", email: "andrew@gmail.com", avatar: UserImage },
      { id: "211", name: "Angela", email: "angela@gmail.com", avatar: UserImage2 },
      { id: "323r", name: "Alice", email: "alice@gmail.com", avatar: UserImage3 },
      { id: "121d", name: "Andrew", email: "andrew@gmail.com", avatar: UserImage },
      { id: "wqwqwq2", name: "Angela", email: "angela@gmail.com", avatar: UserImage2 },
      { id: "3f23", name: "Alice", email: "alice@gmail.com", avatar: UserImage3 },
      { id: "4askd2627", name: "Gena", email: "gena@gmail.com", avatar: UserImage4 },
      { id: "3232f23f", name: "Alice", email: "alice@gmail.com", avatar: UserImage3 },
      { id: "4www2", name: "Gena", email: "gena@gmail.com", avatar: UserImage4 },
      { id: "232", name: "Gena", email: "gena@gmail.com", avatar: UserImage4 },
      { id: "122", name: "Andrew", email: "andrew@gmail.com", avatar: UserImage },
      { id: "211", name: "Angela", email: "angela@gmail.com", avatar: UserImage2 },
      { id: "323r", name: "Alice", email: "alice@gmail.com", avatar: UserImage3 },
    ],
  },
];

function Home() {
  return (
    <Container>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mt="2.1rem"
        mb="1.75rem">
        <Typography variant="body1" fontSize="1.5rem" color="primary">
          All files
        </Typography>
        <Button
          sx={{ padding: "0.625rem 1.25rem", maxWidth: "8.75rem", width: "100% " }}
          variant="contained">
          + Add new
        </Button>
      </Stack>

      <Grid2 container rowGap={3} columnGap={3}>
        {folders.map((data) => (
          <Grid2 size={4} key={data.id} component={FolderCard} {...data} />
        ))}
      </Grid2>
      <Stack mt="2.25rem" mb="1.5rem">
        <Typography variant="body1" fontSize="1.5rem" color="primary">
          Recent Files
        </Typography>
      </Stack>
      <Stack>
        <FilesTable />
      </Stack>
    </Container>
  );
}

export { Home };

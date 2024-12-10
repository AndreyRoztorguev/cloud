import { FilesTable } from "@/components/partials/FilesTable/FilesTable";
import { FolderCard } from "@/components/partials/FolderCard/FolderCard";
import { Folder } from "@/models/types";
import { Button, Container, Grid2, Stack, Typography } from "@mui/material";

const folders: Folder[] = [
  {
    id: "1",
    type: "folder",
    name: "Documents",
    files: Array(3985),
    date: "Sep 25, 2022, 13:25 PM",
    users: Array(100),
  },
  {
    id: "2",
    type: "folder",
    name: "Music",
    files: Array(1110422134),
    date: "08-12-2024",
    users: Array(1_000_000),
  },
  {
    id: "3",
    type: "folder",
    name: "ProjectK",
    files: Array(10000),
    date: "08-12-2024",
    users: Array(100_000),
  },
  {
    id: "4",
    type: "folder",
    name: "Rico Media",
    files: Array(36),
    date: "Sep 25, 2022, 13:25 PM",
    users: Array(10),
  },
  {
    id: "5",
    type: "folder",
    name: "New Dev",
    files: Array(999),
    date: "08-12-2024",
    users: Array(304),
  },
  {
    id: "6",
    type: "folder",
    name: "Files 2022",
    files: Array(10000009),
    date: "08-12-2024",
    users: Array(1002),
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

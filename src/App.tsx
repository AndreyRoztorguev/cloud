import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import "./App.css";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { Folder } from "@/models/types";
import { FolderCard } from "@/components/partials/FolderCard/FolderCard";

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.secondary.main,
  "&.Mui-checked": {
    color: theme.palette.brand,
  },
}));

function App() {
  const folders: Folder[] = [
    {
      id: "1",
      type: "Documents",
      date: "2024",
      users: [],
      files: [],
    },
    {
      id: "2",
      type: "Documents",
      date: "2024",
      users: [],
      files: [],
    },
  ];
  return (
    <>
      <CustomCheckbox defaultChecked />
      <Typography variant="body1">asdasd</Typography>
      <Button variant="contained">Upgrade</Button>
      <Container>
        {folders.map((props) => (
          <FolderCard key={props.id} {...props} />
        ))}

        {/* <Box sx={{ boxShadow: 1, p: 2, bgcolor: "background.primary.main" }}>Hello</Box> */}
        {/* <Paper sx={{ p: 2, bgcolor: "background.paper" }}>
          <Typography variant="h5">Hello, World!</Typography>
          <Typography variant="body2">This is a demo app.</Typography>
        </Paper> */}
      </Container>
    </>
  );
}

export default App;

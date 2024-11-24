import { Folder } from "@/models/types";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardHeader,
} from "@mui/material";
import { FunctionComponent } from "react";

// interface FolderCardPropsType extends Folder {}

const FolderCard: FunctionComponent<Folder> = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader>header</CardHeader>
      <CardContent>content</CardContent>

      {/* efef */}
      {/* <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
};

export { FolderCard };

import React from "react";
import DraggableWrapper from "../DraggableWrapper/DraggableWrapper";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: "33%",
    maxHeight: 100,
  },
  title: {
    fontWeight: "bold",
  },
  center: {
    textAlign: "center",
  },
  pos: {
    marginBottom: 12,
  },
});

function Card2({ classes }) {
  const classesMui = useStyles();
  return (
    <DraggableWrapper id="2">
      <Card className={classesMui.root} variant="outlined">
        <CardContent>
          <Typography
            variant="h5"
            component="h1"
            className={[classesMui.center, classesMui.pos, classesMui.title]}
            color="textPrimary"
            gutterBottom
          >
            Your Upcoming Events
          </Typography>
          <Typography variant="p" component="p" className={classesMui.center}>
            There are no events in this section.
          </Typography>
        </CardContent>
      </Card>
    </DraggableWrapper>
  );
}

export default Card2;

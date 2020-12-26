import React from "react";
import DraggableWrapper from "../DraggableWrapper/DraggableWrapper";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  title: {
    fontWeight: "bold",
  },
  link: {
    color: "#507999",
    fontWeight: 600,
  },
  center: {
    textAlign: "center",
  },
  pos: {
    marginBottom: 12,
  },
});

const styles = (muiBaseTheme) => ({
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  media: {
    paddingTop: "56.25%",
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 3,
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 3}px 0`,
  },
  heading: {
    fontWeight: "bold",
  },
  subheading: {
    lineHeight: 1.8,
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -muiBaseTheme.spacing.unit,
    },
  },
});

const faces = [
  "http://i.pravatar.cc/300?img=1",
  "http://i.pravatar.cc/300?img=2",
  "http://i.pravatar.cc/300?img=3",
  "http://i.pravatar.cc/300?img=4",
];

function Card1({ classes }) {
  const classesMui = useStyles();
  return (
    <DraggableWrapper id="1">
      <Card className={classesMui.root} variant="outlined">
        <CardContent>
          <Typography
            variant="h5"
            component="h1"
            className={[classesMui.center, classesMui.title]}
            color="textPrimary"
            gutterBottom
          >
            Your Latest News
          </Typography>
          <Divider className={classesMui.pos} />
          <Typography
            variant="p"
            component="p"
            className={[classesMui.center, classesMui.pos, classesMui.link]}
          >
            Check Out New Diversity & Inclusion Report
          </Typography>
          <Typography
            variant="p"
            component="p"
            className={[classesMui.center, classesMui.pos]}
          >
            Diversity & Inclusion is in our DNA. It's more than what we do, it's
            who we are.
          </Typography>
          <Divider className={classesMui.pos} />
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={
                "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
              }
            />
            <CardContent className={classes.content}>
              <Typography
                className={"MuiTypography--heading"}
                variant={"h6"}
                gutterBottom
              >
                Nature Around Us
              </Typography>
              <Typography
                className={"MuiTypography--subheading"}
                variant={"caption"}
              >
                We are going to learn different kinds of species in nature that
                live together to form amazing environment.
              </Typography>
              <Divider className={classes.divider} light />
              {faces.map((face) => (
                <Avatar className={classes.avatar} key={face} src={face} />
              ))}
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </DraggableWrapper>
  );
}

export default withStyles(styles)(Card1);

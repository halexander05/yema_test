import React from "react";
import classes from "./Card.css";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import PersonIcon from "@material-ui/icons/Person";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

import moment from "moment";

const cropText = (text) => {
  return text.length > 25 ? text.substring(0, 25) + "..." : text;
};

const Cards = (props) => {
  const data = props.data;

  const title = data.alt_description
    ? cropText(data.alt_description)
    : "lorem ipsum dolor sit amet.";
  const img = data.urls.small;
  const author = data.user.username;
  const likes = data.likes;
  const createdAt = moment(data.created_at).format("YYYY/MM/DD");

  return (
    <React.Fragment>
      <div className={["col-xs-12", "col-sm-12", "col-md-6", "col-lg-3"].join(" ")}>
        <Card className={classes.myCard} key={data.id}>
          <CardHeader title={title} className={classes.myTitle} />
          <CardMedia>
            <div className={classes.imageContainer}>
              <img src={img} alt="" />
            </div>
          </CardMedia>
          <CardContent>
            <div className="row">
              <div className="col">
                <span>
                  <PersonIcon />
                  {author}
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <span>
                  <CalendarTodayIcon />
                  {createdAt}
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <span>
                  <ThumbUpAltIcon />
                  {likes}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Cards;

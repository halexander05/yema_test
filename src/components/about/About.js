import React from "react";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const About = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <Card>
            <CardContent>
              <div className="row">
                <div className={["col", "text-center"].join(" ")}>
                  <h3>About Us</h3>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself, because it is pleasure
                  </p>
                </div>
              </div>
              <div className="row">
                <div className={["col", "text-right"].join(" ")}>
                  <Link to="/photos">See all photos</Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;

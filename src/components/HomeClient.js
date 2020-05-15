import React from "react";
import { withRouter } from "react-router-dom";
import Calendar from "./Shared/calendar";

class HomeClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  onDayClick = (e, date) => {
    console.log(e, date);
  };
  render() {
    return (
      <div className="home-client-container">
        <div className="task-view">
          <div className="header">
            <span>Upcoming Events</span>
          </div>
          <div className="content"></div>
          <div className="footer"></div>
        </div>
        <div className="calendar-parent">
          <Calendar
            width="100%"
            onDayClick={(e, dateDisplaying) =>
              this.onDayClick(e, dateDisplaying)
            }
          />
        </div>
      </div>
    );
  }
}

export default withRouter(HomeClient);

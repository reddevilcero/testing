import React from "react";
import moment from "moment";

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.style = props.style || {};
    this.state.width = props.width;
    this.state.height = props.height;
  }
  state = {
    dateContext: moment(),
    today: moment(),
    showMonthPopup: false,
    showYearPopup: false,
  };

  weekdays = moment.weekdays();
  weekdaysShort = moment.weekdaysShort();
  months = moment.months();

  year = () => this.state.dateContext.format("Y");
  month = () => this.state.dateContext.format("MMMM");
  daysInMonth = () => this.state.dateContext.daysInMonth();
  currentDate = () => this.state.dateContext.get("date");
  currentDay = () => this.state.dateContext.format("D");
  firstDayOfMonth = () =>
    moment(this.state.dateContext).startOf("month").format("d");

  setMonth = (month) => {
    let monthNo = this.months.indexOf(month);
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).set("month", monthNo);
    this.setState({ dateContext: dateContext });
  };

  showYearEditor = () => this.setState({ showYearNav: true });

  setYear = (year) => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).set("year", year);
    this.setState({ dateContext: dateContext });
  };

  onYearChange = (e) => {
    this.setYear(e.target.value);
    this.props.onYearChange && this.props.onYearChange(e, e.target.value);
  };

  onKeyUpYear = (e) => {
    if (e.which === 13 || e.which === 27) {
      this.setYear(e.target.value);
      this.setState({ showYearNav: false });
    }
  };

  prevMonth = () => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).subtract(1, "month");
    this.setState({ dateContext: dateContext });
    this.props.onPrevMonth && this.props.onPrevMonth();
  };

  nextMonth = () => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).add(1, "month");
    this.setState({ dateContext: dateContext });
    this.props.onNextMonth && this.props.onNextMonth();
  };

  onDayClick = (e, dateDisplaying) => {
    this.props.onDayClick && this.props.onDayClick(e, dateDisplaying);
  };

  /*
  bookingsOnDate = (date) =>
    this.bookings.filter(
      (booking) =>
        date === moment(new Date(booking.BookingDate)).format("DD/MM/YYYY")
    ).length;
*/
  render() {
    let weekdays = this.weekdaysShort.map((day) => {
      return (
        <td key={day} className="week-day">
          {day}
        </td>
      );
    });

    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++)
      blanks.push(
        <td key={i * 80} className="emptySlot">
          {" "}
        </td>
      );

    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let dateDisplaying =
        d.toString() +
        "/" +
        moment().month(this.month()).format("MM") +
        "/" +
        this.year();
      let isSameDay =
        this.year() === moment().format("Y") &&
        this.month() === moment().format("MMMM") &&
        d === parseInt(this.currentDay());

      let numberOfDayBookings = false; //this.bookingsOnDate(dateDisplaying) > 0;
      let className = isSameDay ? "day current-day" : "day";
      className += numberOfDayBookings ? " day-with-booking" : "";
      daysInMonth.push(
        <td
          key={d}
          className={className}
          onClick={(e) => {
            this.onDayClick(e, dateDisplaying);
          }}
        >
          <span>{d}</span>
        </td>
      );
    }
    let totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) cells.push(row);
      else {
        let insertRow = cells.slice();
        rows.push(insertRow);
        cells = [];
        cells.push(row);
      }

      if (i === totalSlots.length - 1) {
        let insertRow = cells.slice();
        rows.push(insertRow);
      }
    });

    let trElements = rows.map((d, i) => {
      return <tr key={i * 100}>{d}</tr>;
    });

    return (
      <div className="calendar-container" style={this.style}>
        <table className="calendar">
          <thead>
            <tr className="calendar-header">
              <td colSpan="2" className="nav-month">
                <span
                  className="arrow-color cursor-pointer"
                  onClick={(e) => {
                    this.prevMonth();
                  }}
                >
                  {"<"}
                </span>
              </td>
              <td colSpan="3">
                {this.month()} {this.year()}
              </td>
              <td colSpan="2" className="nav-month">
                <span
                  className="arrow-color cursor-pointer"
                  onClick={(e) => {
                    this.nextMonth();
                  }}
                >
                  {">"}
                </span>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>{weekdays}</tr>
            {trElements}
          </tbody>
        </table>
      </div>
    );
  }
}

import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";

class AddAppointments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petName: "",
      ownerName: "",
      aptDate: "",
      aptTime: "",
      aptNotes: ""
    };
  }

  changeEventHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerAdd = e => {
    e.preventDefault();

    let apt = {
      petName: this.state.petName,
      ownerName: this.state.ownerName,
      aptDate: this.state.aptDate + "" + this.state.aptTime,
      aptNotes: this.state.aptNotes
    };

    this.props.addAppointments(apt);

    this.setState({
      petName: "",
      ownerName: "",
      aptDate: "",
      aptTime: "",
      aptNotes: ""
    });
  };

  render() {
    return (
      <div
        className={
          "card textcenter mt-3 mb-3 " +
          (this.props.formDisplay ? "" : "add-appointment")
        }
      >
        <div
          className="apt-addheading card-header bg-primary text-white"
          onClick={this.props.toggleForm}
        >
          <FaPlus /> Add Appointment
        </div>

        <div className="card-body">
          <form id="aptForm" noValidate onSubmit={this.handlerAdd}>
            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="petName"
              >
                Pet Name
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="petName"
                  id="petName"
                  placeholder="Pet's Name"
                  value={this.state.petName}
                  onChange={this.changeEventHandler}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="ownerName"
              >
                Pet Owner
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="ownerName"
                  id="ownerName"
                  placeholder="Owner's Name"
                  value={this.state.ownerName}
                  onChange={this.changeEventHandler}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="aptDate"
              >
                Date
              </label>
              <div className="col-md-4">
                <input
                  type="date"
                  className="form-control"
                  id="aptDate"
                  name="aptDate"
                  value={this.state.aptDate}
                  onChange={this.changeEventHandler}
                />
              </div>
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="aptTime"
              >
                Time
              </label>
              <div className="col-md-4">
                <input
                  type="time"
                  className="form-control"
                  name="aptTime"
                  id="aptTime"
                  value={this.state.aptTime}
                  onChange={this.changeEventHandler}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-md-2 text-md-right" htmlFor="aptNotes">
                Apt. Notes
              </label>
              <div className="col-md-10">
                <textarea
                  className="form-control"
                  rows="4"
                  cols="50"
                  name="aptNotes"
                  id="aptNotes"
                  placeholder="Appointment Notes"
                  value={this.state.aptNotes}
                  onChange={this.changeEventHandler}
                ></textarea>
              </div>
            </div>

            <div className="form-group form-row mb-0">
              <div className="offset-md-2 col-md-10">
                <button
                  type="submit"
                  className="btn btn-primary d-block ml-auto"
                >
                  Add Appointment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddAppointments;

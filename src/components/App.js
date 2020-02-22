import React, { Component } from "react";
import AddAppointments from "../components/AddAppointments";
import SearchAppointment from "../components/SearchAppointment";
import ListAppointments from "../components/ListAppointments";

import { without, findIndex } from "lodash";

import "../css/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myAppointments: [],
      lastIndex: 0,
      formDisplay: false,
      orderBy: "petName",
      orderDir: "asc",
      queryText: ""
    };
  }

  componentDidMount() {
    fetch("./data.json")
      .then(response => response.json())
      .then(result => {
        const apts = result.map(item => {
          item.aptId = this.state.lastIndex;
          this.setState({ lastIndex: this.state.lastIndex + 1 });
          return item;
        });
        this.setState({
          myAppointments: apts
        });
      });
  }

  //DELETE APPOINTMENTS

  deleteAppointment = item => {
    let updatedAppointments = this.state.myAppointments;
    //Methode Ismail
    // updatedAppointments = updatedAppointments.filter(apt => apt !== item);
    // this.setState({ myAppointments: updatedAppointments });

    //Methode With Lodash Library
    updatedAppointments = without(updatedAppointments, item);
    this.setState({ myAppointments: updatedAppointments });
  };

  //ADD APPOINTMENTS

  addAppointments = apt => {
    console.log(apt);
    //METHODE 1

    //let tempApt = this.state.myAppointments;
    // apt.aptId = this.state.lastIndex;
    // tempApt.unshift(apt);
    // this.setState({
    //   myAppointments: tempApt,
    //   lastIndex: this.state.lastIndex + 1
    // });

    //ISMAIL METHOD 2
    apt.aptId = this.state.lastIndex;
    this.setState({
      myAppointments: [...this.state.myAppointments, apt],
      lastIndex: this.state.lastIndex + 1
    });
    console.log(this.state.myAppointments.length);
  };

  //SHOW OR HIDE FORM
  toggleForm = () => {
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  };

  //SORT DROPDOWN
  changeHandler = (order, dir) => {
    this.setState({
      orderBy: order,
      orderDir: dir
    });
  };

  //SEARCH BY QUERY
  searchApt = query => {
    this.setState({ queryText: query });
  };

  //UPDATE INFO

  updateInfo = (name, value, id) => {
    let tempApt = this.state.myAppointments;

    let aptIndex = findIndex(this.state.myAppointments, {
      aptId: id
    });
    tempApt[aptIndex][name] = value;
    this.setState({ myAppointments: tempApt });
  };

  render() {
    let order;
    let feltredApt = this.state.myAppointments;

    this.state.orderDir === "asc" ? (order = 1) : (order = -1);

    feltredApt = feltredApt
      .sort((a, b) => {
        //console.log(a[this.state.orderBy]);
        if (
          a[this.state.orderBy].toLowerCase() <
          b[this.state.orderBy].toLowerCase()
        ) {
          return -1 * order;
        } else {
          return 1 * order;
        }
      })
      .filter(eachItem => {
        return (
          eachItem["petName"]
            .toLowerCase()
            .includes(this.state.queryText.toLocaleLowerCase()) ||
          eachItem["ownerName"]
            .toLowerCase()
            .includes(this.state.queryText.toLocaleLowerCase()) ||
          eachItem["aptNotes"]
            .toLowerCase()
            .includes(this.state.queryText.toLocaleLowerCase())
        );
      });

    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointments
                  formDisplay={this.state.formDisplay}
                  toggleForm={this.toggleForm}
                  addAppointments={this.addAppointments}
                />
                <SearchAppointment
                  orderBy={this.state.orderBy}
                  orderDir={this.state.orderDir}
                  changeHandler={this.changeHandler}
                  searchApt={this.searchApt}
                />
                <ListAppointments
                  updateInfo={this.updateInfo}
                  appointments={feltredApt}
                  deleteAppointment={this.deleteAppointment}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;

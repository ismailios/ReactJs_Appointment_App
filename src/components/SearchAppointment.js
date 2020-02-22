import React, { Component } from "react";

class SearchAppointment extends Component {
  render() {
    return (
      <div className="search-appointments row justify-content-center my-4">
        <div className="col-md-6">
          <div className="input-group">
            <input
              id="SearchApts"
              placeholder="Search"
              type="text"
              className="form-control"
              aria-label="Search Appointments"
              onChange={e => this.props.searchApt(e.target.value)}
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by: <span className="caret"></span>
              </button>

              <div className="sort-menu dropdown-menu dropdown-menu-right">
                <a
                  className={
                    "sort-by dropdown-item " +
                    (this.props.orderBy === "petName" ? "active" : "")
                  }
                  href="#"
                  onClick={() =>
                    this.props.changeHandler("petName", this.props.orderDir)
                  }
                >
                  Pet Name
                </a>
                <a
                  className={
                    "sort-by dropdown-item " +
                    (this.props.orderBy === "aptDate" ? "active" : "")
                  }
                  href="#"
                  onClick={e =>
                    this.props.changeHandler("aptDate", this.props.orderDir)
                  }
                >
                  Date
                </a>
                <a
                  className={
                    "sort-by dropdown-item " +
                    (this.props.orderBy === "ownerName" ? "active" : "")
                  }
                  href="#"
                  onClick={e =>
                    this.props.changeHandler("ownerName", this.props.orderDir)
                  }
                >
                  Owner
                </a>
                <div role="separator" className="dropdown-divider"></div>
                <a
                  className={
                    "sort-by dropdown-item " +
                    (this.props.orderDir === "asc" ? "active" : "")
                  }
                  href="#"
                  onClick={e =>
                    this.props.changeHandler(this.props.orderBy, "asc")
                  }
                >
                  Asc
                </a>
                <a
                  className={
                    "sort-by dropdown-item " +
                    (this.props.orderDir === "desc" ? "active" : "")
                  }
                  href="#"
                  onClick={e =>
                    this.props.changeHandler(this.props.orderBy, "desc")
                  }
                >
                  Desc
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchAppointment;

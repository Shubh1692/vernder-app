import React, { Component, Fragment } from "react";
import AddNewCriteria from "../Components/AddNewCriteria";

import { connect } from "react-redux";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  render() {
    const { open } = this.state;
    return (
      <Fragment>
        <div className="appHeader">
          <div className="taskTitle">
            <h3>Vendor List</h3>
          </div>

          {/* <button
            onClick={() => this.setState({ open: true })}
            className="ui primary basic button"
          >
            New Task
          </button> */}
        </div>
        {/* <AddNewUser open={open} handleClose={() => this.setState({ open: false })} /> */}
        {/* <AddNewVendor open={open} handleClose={() => this.setState({ open: false })} /> */}
        <AddNewCriteria
          open={open}
          handleClose={() => this.setState({ open: false })}
        />
      </Fragment>
    );
  }
}

// get reducer state
const mapStateToProps = state => {
  return {
    taskList: state
  };
};
const mapDispatchToProps = dispatch => {};
export default connect(mapStateToProps, mapDispatchToProps)(Header);

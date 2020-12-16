import React, { Component } from "react";
import AddNewVendor from "./AddNewVendor";
import AddNewCriteria from "./AddNewCriteria";
import { constants } from "../Helper/Constant";
import { connect } from "react-redux";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  Icon,
} from "semantic-ui-react";

class VendorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      openDelete: false,
      openEdit: false,
      openCalorieOut: false,
      open: false,
      activeIndex: 0,
      openCriteria: false,
      list: [
        {
          vendorImage: "https://dummyimage.com/300",
          addNewVendor: "Add New Vendor",
          productDescription: "Testing Description"
        }
      ],
      criticalList: [
        {
          vendorImage: "https://dummyimage.com/300",
          addNewVendor: "Add New Vendor",
          productDescription: "Product Description",
          featureList: "Features",
          overallScore: "6",
          fundingHistory: "Funding History",
          pricing: "Pricing",
          customerCaseStudies: "Customer Case Studies",
          founded: "2005"
        }
      ]
    };
  }
  handleDelete = () => {
    const { id } = this.state;
    // dispatch delete action with payload for deleting particular data
    this.props.dispatch({
      type: constants.DELETE_TASK,
      payload: { id, message: "delete successfully" }
    });
    this.setState({ openDelete: false, id: "" });
  };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
  componentDidMount() {
  }

 handleCertical = (index) => {
  const filterList = this.props.taskList.criteriaList.splice(index, 1);
   this.props.dispatch({
    type: constants.DELETE_NEW_CRITERIA,
    payload: {
      message: "add new task successfully",
      criteriaList: this.props.taskList.criteriaList
    }
  });
   this.forceUpdate()
}



  render() {
    const { list } = this.state;
    const {
      open,
      openCriteria
    } = this.state;
    return (
      <div className="taskList">
        <div className="ui middle aligned divided list taskListcard">
          {list.length === 0 && <div className="noTask"> No Vender Added</div>}
          <button
            onClick={() => this.setState({ openCriteria: true })}
            className="ui  basic button addVendorBtn"
          >
           Add New  Criteria
          </button>
          <div className="main">
            <div className="add-container row">
              <div className="imageSection vendorHeader">
                <img
                  src="https://dummyimage.com/300"
                  width="50"
                  height="50"
                  style={{ borderRadius: 25 }}
                />

                <button
                  onClick={() => this.setState({ open: true })}
                  className="ui  basic  addVendorBtn"
                >
                  Add new vendor
                </button>
              </div>
              <div className="minHeight vendorHeader">
                <h5>Overall Score </h5>
              </div>
              <div className="minHeight vendorHeader">
                <h5>Product Description </h5>
              </div>
              <div className="minHeight vendorHeader">
                <h5> funding History </h5>
              </div>
              {this.props.taskList.criteriaList.map(({ name }, index) => {
                return (
                  <div key={index} className="add-row minHeight vendorHeader extraHeader">
                    <h5>{name || "NA"}</h5>
                    <Icon name="close" size="small" onClick={() => this.handleCertical(index)} />
                  </div>
                );
              })}
            </div>

            {this.props.taskList.list.map((vender, index) => {
              return (
                <div key={index} className="add-container">
                  <div className="imageSection">
                    <img
                      src="https://dummyimage.com/300"
                      width="50"
                      height="50"
                      style={{ borderRadius: 25 }}
                    />
                    <span>{vender.title}</span>
                  </div>

                  <div className="minHeight score">
                    <CircularProgressbar
                      className="circularWidth"
                      value={66}
                      width={30}
                      height={30}
                      maxValue={1}
                      text={`${66 / 100}%`}
                      styles={{ width: 30, height: 30 }}
                      className="progressBar"
                    />
                  </div>
                  <div className="minHeight">
                    <span>{vender.description}</span>
                  </div>
                  <div className="minHeight">
                    <span>{vender.fundingHistory}</span>
                  </div>
                  {this.props.taskList.criteriaList.map(({ name }, index) => {
                    return (
                      <div key={index} className="add-row minHeight">
                        <span>{vender[name] || "NA"}</span>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        <AddNewVendor
          open={open}
          handleClose={() => this.setState({ open: false, id: "" })}
        />

        <AddNewCriteria
          open={openCriteria}
          handleClose={() => this.setState({ openCriteria: false })}
        />
        {/* <DeleteTask
          open={openDelete}
          handleClose={() => this.setState({ openDelete: false, id: "" })}
          handleDelete={this.handleDelete}
        /> */}
      </div>
    );
  }
}
// get reducer state
const mapStateToProps = state => {
  return {
    taskList: state
  };
};

export default connect(mapStateToProps)(VendorList);

import React, { Component } from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Button, Modal } from "semantic-ui-react";
import { constants } from "../Helper/Constant";
import { connect } from "react-redux";

class AddNewVendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overallScore: 0,
      description: "",
      image: "",
      fundingHistory: "",
      title: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  onFileChange = event => {
    // Update the state
    this.setState({ image: event.target.files[0] });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch({
      type: constants.ADD_NEW_USER,
      payload: { message: "add new task successfully", list: this.state }
    });
    this.props.handleClose();
  };

  render() {
    const { open, handleClose, criteriaList } = this.props;
    const {
      overallScore,
      description,
      fundingHistory,
      title
    } = this.state;

    return (
      <Modal size={"mini"} open={open} onClose={handleClose}>
        <Modal.Header> Add New Vendor</Modal.Header>
        <AvForm className="p-20" onValidSubmit={this.handleSubmit}>
          <Modal.Content>
            <div className="ui form">
              <div className="field">
                <AvField
                  label="Enter Your Title"
                  type="text"
                  required
                  className="form-control"
                  name="title"
                  onChange={this.handleChange}
                  value={title || ""}
                  placeholder="Enter your Title*"
                  validate={{
                    required: {
                      value: true,
                      errorMessage: "This field is required to proceed"
                    }
                  }}
                />
              </div>
              <div className="field">
                <AvField
                  label="Enter Your Funding History"
                  type="number"
                  required
                  className="form-control"
                  name="fundingHistory"
                  onChange={this.handleChange}
                  value={fundingHistory || ""}
                  placeholder="Enter your funding History*"
                  validate={{
                    required: {
                      value: true,
                      errorMessage: "This field is required to proceed"
                    }
                  }}
                />
              </div>

              <div className="field">
                <AvField
                  label="Enter Your Overall Score"
                  type="number"
                  required
                  className="form-control"
                  name="overallScore"
                  onChange={this.handleChange}
                  value={overallScore || ""}
                  placeholder="Enter your overallScore*"
                  validate={{
                    required: {
                      value: true,
                      errorMessage: "This field is required to proceed"
                    }
                  }}
                />
              </div>

              {Array.isArray(criteriaList) &&
                criteriaList.map((item, index) => {
                  return (
                    <div className="field" key={index}>
                      <AvField
                        label={item.label}
                        required
                        className="form-control"
                        type={item.inputType || "text"}
                        name={item.name}
                        onChange={this.handleChange}
                        value=""
                        placeholder={`${item.placeholder}*`}
                        validate={{
                          required: {
                            value: true,
                            errorMessage: "This field is required to proceed"
                          }
                        }}
                      />
                    </div>
                  );
                })}

              <div className="field">
                <AvField
                  label="Enter Your Description"
                  type="textarea"
                  required
                  className="form-control"
                  name="description"
                  onChange={this.handleChange}
                  value={description || ""}
                  placeholder="Enter your Description*"
                  validate={{
                    required: {
                      value: true,
                      errorMessage: "This field is required to proceed"
                    }
                  }}
                />
              </div>
            </div>
          </Modal.Content>
          <Modal.Actions className="newTaskFooter">
            <Button onClick={handleClose}>CANCEL</Button>
            <Button type="submit" primary>
              CREATE
            </Button>
          </Modal.Actions>
        </AvForm>
      </Modal>
    );
  }
}
//get reducer state
const mapStateToProps = state => {
  return {
    criteriaList: state.criteriaList
  };
};
export default connect(mapStateToProps)(AddNewVendor);

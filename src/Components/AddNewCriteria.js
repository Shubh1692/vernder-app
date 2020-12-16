import React, { Component } from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Button, Modal } from "semantic-ui-react";
import { constants } from "../Helper/Constant";
import { connect } from "react-redux";


class AddNewCriteria extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      placeholder: "",
      label: "",
      inputType:"text",
      isDeleted: true,
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    const { name, placeholder, label,inputType } = this.state;
    const { handleClose } = this.props;
    this.props.dispatch({
      type: constants.ADD_NEW_CRITERIA,
      payload: {
        message: "add new task successfully",
        criteriaList: { name, placeholder, label, inputType }
      }
    });
    this.setState({ label: "", name: "", placeholder: "" });
    handleClose();
  };

  render() {
    const { open, handleClose } = this.props;
    const { name, placeholder, label, inputType } = this.state;

    return (
      <Modal size={"mini"} open={open} onClose={handleClose}>
        <Modal.Header> Add New Criteria</Modal.Header>
        <AvForm className="p-20" onValidSubmit={this.handleSubmit}>
          <Modal.Content>
            <div className="ui form">=
              <div className="field">
                <AvField
                  label="Enter criterica  Label"
                  type="text"
                  required
                  className="form-control"
                  name="label"
                  onChange={this.handleChange}
                  value={label || ""}
                  placeholder="Enter your Label which is shown when user fill the form*"
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
                  label="Enter criterica field  Name"
                  type="text"
                  required
                  className="form-control"
                  name="name"
                  onChange={this.handleChange}
                  value={name || ""}
                  placeholder="Enter your Label which is shown when user fill the form*"
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
              
                  required
                  className="form-control "
                  name="inputType"
                  type="select"
                  onChange={this.handleChange}
                  value={inputType || ""}
                  placeholder="Enter your Criteria field Type"
                  validate={{
                    required: {
                      value: true,
                      errorMessage: "Please select employee role"
                    }
                  }}
                >
                  <option value="text">Text</option>
                  <option value="number">Number</option>
                </AvField>
              </div>

              <div className="field">
                <AvField
                  label="Enter placeholder name"
                  type="text"
                  required
                  className="form-control"
                  name="placeholder"
                  onChange={this.handleChange}
                  value={placeholder || ""}
                  placeholder="Enter placeholder name*"
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
    taskList: state.taskReducer
  };
};
export default connect(mapStateToProps)(AddNewCriteria);

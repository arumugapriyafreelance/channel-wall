import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button, InputBox, CheckBox } from "../../components/common";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <Button />
        <InputBox />
        <CheckBox />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(Object.assign({}), dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

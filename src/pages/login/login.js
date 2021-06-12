import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button, InputBox, CheckBox } from "../../components/common";
import showpassword from '../../assets/img/pass-show.png'
import "./login.css"

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
        <div className="login-wrapper">
            {/* <h1>Login</h1>
            <Button />
            <InputBox />
            <CheckBox /> */}
            <div className="left-section">
              <div className="left-section-inner">
                <h2>Welcome to Channelwall</h2>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
            <div className="right-section">
              <span className="not-a-custo">Not a Customer? 
                <Button
                value={"Try for Free"}/>
              </span>
              <div className="right-section-inner">
                  <h2>Login Account</h2>
                  <form>
                    <div className="username-field">
                      <InputBox
                      label={"PlatformID"}
                      value={""}/>
                    </div>
                    <div className="username-field">
                      <InputBox
                      label={"Username"}
                      value={""}/>
                    </div>
                    <div className="username-field">
                      <InputBox
                      label={"Password"}
                      value={""}/>
                      <i className="show-pass">
                        <img src={showpassword}/>
                      </i>
                      <span className="forgot-pass">Forget Password?</span>
                    </div>
                    <div className="remember">
                      <CheckBox
                      label={"Remember me"}/>
                    </div>
                    <div className="btn-section">
                      <span className="use-custom">Use custom domain</span>
                      <Button
                      value={"Login"}/>
                    </div>
                  </form>
              </div>
            </div>
        </div>
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

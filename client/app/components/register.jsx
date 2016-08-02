import React,{ Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import {Link, Router} from 'react-router';

export default class RegisterComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            isError: false,
            isLoading: false,
            errMsg: null
        }
        this._handleUserChange = this._handleUserChange.bind(this);
        this._handleEmailChange = this._handleEmailChange.bind(this);
        this._handlePassChange = this._handlePassChange.bind(this);
        this._handleOnClick = this._handleOnClick.bind(this);
    }

    _handleUserChange(e){
        this.setState({
            isError: false,
            isLoading : false,
            errMsg: null
        });
    }

    _handleEmailChange(e){
        this.setState({
            isError: false,
            isLoading : false,
            errMsg: null
        });
    }

    _handlePassChange(e){
        this.setState({
            isError: false,
            isLoading: false,
            errMsg: null
        });
    }

    _handleOnClick(e){
        e.preventDefault();
        let user = this.userInput.value.trim();
        let email = this.emailInput.value.trim();
        let pass = this.passInput.value.trim();
        if(user == '' || pass == '' || email == ''){
            this.setState({
                isError: true
            });
        }
        else{
            this.setState({
                isLoading : true
            });
            let self = this;
            Accounts.createUser({username:user, email: email, password: pass}, function (err) {
                if(err){
                    console.log(err);
                    self.setState({
                        isError: true,
                        isLoading: false,
                        errMsg: err
                    });
                }
                else{
                    self.setState({
                        isLoading : false
                    });
                    Router.go("/login");
                }
            })
        }
    }


    render(){
        let divstyle = {
            maxWidth: '450px'
        };
        let gridStyle = {
            height: '100%'
        }
        let imgStyle = {
            marginTop: '-100px'
        }

        let errorMsg;
        if(this.state.isError){
            errorMsg = <div className="ui error message">{this.state.errMsg || 输入参数错误}</div>;
        }
        else{
            errorMsg = <div></div>;
        }

        let loginClass = "";
        if(this.state.isLoading){
            loginClass = "ui fluid large teal submit button loading";
        }
        else{
            loginClass = "ui fluid large teal submit button";
        }

        return(
            <div style={gridStyle}>
                <div style= {gridStyle} className="ui middle aligned center aligned grid">
                    <div style = {divstyle} className="column">
                        <h2 className="ui teal image header">
                            <img src="assets/images/logo.png" className="image" style={imgStyle}/>
                            <div className="content">
                                Register a New Account
                            </div>
                        </h2>
                        <form className="ui large form">
                            <div className="ui stacked segment">
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="user icon"></i>
                                        <input type="text" placeholder="Username"
                                               ref={(ref) => this.userInput = ref}
                                               onChange={this._handleUserChange}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="user icon"></i>
                                        <input type="text" placeholder="E-mail address"
                                               ref={(ref) => this.emailInput = ref}
                                               onChange={this._handleEmailChange}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="lock icon"></i>
                                        <input type="password" name="password" placeholder="Password"
                                               ref={(ref) => this.passInput = ref}
                                               onChange={this._handlePassChange}
                                        />
                                    </div>
                                </div>
                                <div className={loginClass}
                                     onClick={this._handleOnClick}
                                >
                                    Register
                                </div>
                            </div>
                        </form>
                        {errorMsg}

                        <div className="ui message">
                            Already has Account? <Link to="/login">Log In</Link>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}
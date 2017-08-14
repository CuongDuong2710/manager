import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
    // Call Action Creator with new text
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    // text get from 'onChangeText'
    onPasswordChange(text) {
        // this.props from 'connect'
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;

        // Pass an object has both email and password properties
        this.props.loginUser({ email, password });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                     />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

// Pull email, password & error from 'AuthReducer'
const mapStateToProps = ({ auth }) => {
    const { email, password, error } = auth;

    return { email, password, error };
};

// Giving connect action creators emailChanged, passwordChanged and loginUser to LoginFrom
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Card, CardSection, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);  
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size = "large" />;
        }

        return <Button buttonText="Login" onPress={this.onButtonPress.bind(this)} />;
    }

    render() {
        return(
            <Card>
                <CardSection >
                    <View style={styles.containerStyle}>
                    <Text style = {styles.labelStyle} >
                        Email
                    </Text>
                    <TextInput
                        placeholder="Enter your mail"
                        autoCorrect={true}
                        value={this.props.email}
                        onChangeText={this.onEmailChange.bind(this)}
                        style={styles.inputStyle}
                    />
                    </View>
                </CardSection>

                <CardSection >
                <View style={styles.containerStyle}>
                    <Text style = {styles.labelStyle} >
                        Password
                    </Text>
                    <TextInput
                        secureTextEntry={true}
                        placeholder="Enter your password"
                        autoCorrect={false}
                        value={this.props.password}
                        onChangeText={this.onPasswordChange.bind(this)}
                        style={styles.inputStyle}
                    />
                    </View>
                </CardSection>  

                <Text style={styles.errorTextStyle } >
                     {this.props.error}
                </Text>

                <CardSection >
                    { this.renderButton() }
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        paddingBottom: 10
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = state => {
    console.log(state);
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);


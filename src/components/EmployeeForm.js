import React, { Component } from 'react';
import { View, Text, TextInput, Picker } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
    render() {
        return(
            <View>
                <CardSection>
                    <View style={styles.containerStyle}>
                    <Text style = {styles.labelStyle} >
                        Name
                    </Text>
                    <TextInput
                        placeholder="Sagar"
                        autoCorrect={true}
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
                        style={styles.inputStyle}
                    />
                    </View>
                </CardSection>

                <CardSection>
                    <View style={styles.containerStyle}>
                    <Text style = {styles.labelStyle} >
                        Phone
                    </Text>
                    <TextInput
                        placeholder="555-555-5555"
                        autoCorrect={true}
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
                        style={styles.inputStyle}
                    />
                    </View>
                </CardSection>

                <CardSection >
                    <Text style = {styles.pickerTextStyle}>
                        Shift
                    </Text>
                    <Picker
                        style = {{ flex: 1 }}
                        selectedValue = {this.props.shift}
                        onValueChange = {value => this.props.employeeUpdate({ prop: 'shift', value })}
                    >
                        <Picker.Item label = "Monday" value = "Monday" />
                        <Picker.Item label = "Tuesday" value = "Tuesday" />
                        <Picker.Item label = "Wednesday" value = "Wednesday" />
                        <Picker.Item label = "Thursday" value = "Thursday" />
                        <Picker.Item label = "Friday" value = "Friday" />
                        <Picker.Item label = "Saturday" value = "Saturday" />
                        <Picker.Item label = "Sunday" value = "Sunday" />
                    </Picker>
                </CardSection>

            </View>
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
    },
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
        paddingTop: 10
    }
};

const mapStateToProps = (state) => {
    console.log(state);
    console.log("EMployee Form");
    const { name, phone, shift } = state.employeeForm;
   
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
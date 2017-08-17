import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { employeeFetch } from '../actions';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeeFetch();

        this.createDataSource(this.props);
    }

    // 'componentWillReceivedProps()' will be called whenever we are about to receive a new set of props to rerun for the component with.
    componentWillReceivedProps(nextProps) {
        // nextProps are the next set of props that this component
        // will be rendered with
        // this.props is still the old set of props
        this.createDataSource(nextProps);
    }

    createDataSource({ employess }) {
        const ds = new ListView.DataSource({
                    rowHasChanged: (r1, r2) => r1 !== r2
                 });

        this.dataSource = ds.cloneWithRows(this.props.employees);
    }

    render() {
        return (
            <View>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
            </View>
        );
    }
}

export default connect(null, { employeeFetch }) (EmployeeList);
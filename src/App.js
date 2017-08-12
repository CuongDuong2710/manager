import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';

class App extends Component {

    componentWillMount() {
         const config = {
            apiKey: 'AIzaSyDeOJu77LxkM4YUW3Syea2pV9Kti_PMX0U',
            authDomain: 'manager-8d1fe.firebaseapp.com',
            databaseURL: 'https://manager-8d1fe.firebaseio.com',
            projectId: 'manager-8d1fe',
            storageBucket: 'manager-8d1fe.appspot.com',
            messagingSenderId: '637562090503'
          };
          firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;
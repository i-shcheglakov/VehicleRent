import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Image,
} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image 
            style={styles.logo}
            source={require('../../assets/logo.png')}
          />
        </View>
        <View style={styles.formContainer}>
          <LoginForm {...this.props}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },
  formContainer: {
  },
  logo: {
    width: 150,
    height: 150
  }
});

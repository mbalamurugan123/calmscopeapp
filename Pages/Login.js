import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Input } from '@rneui/themed';
import { Button } from '@rneui/base';

export default function Login() {
  return (
    <View style={styles.container}>
      <StatusBar  translucent backgroundColor="transparent" />
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.backbottonView}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.backbotton}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
    </View>
        <View style={styles.mainContainer}>
          
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              Calm Scape
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <Input 
              containerStyle={styles.inputWrapper}
              inputContainerStyle={styles.inputField}
              inputStyle={styles.inputTextField}
              placeholder='Username'
              keyboardType='default'
            />

            <Input 
              containerStyle={styles.inputWrapper}
              inputContainerStyle={styles.inputField}
              inputStyle={styles.inputTextField}
              placeholder='Password'
              keyboardType='default'
              secureTextEntry={true}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button 
              title={"LOGIN"}
              buttonStyle={styles.loginButton}
            />

            <Text style={styles.forgottenPasswordText}>Forgotten Password</Text>
            <Text style={styles.createNewAccountText}>Create a New Account</Text>
          </View>

        </View>

      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7c6c2',
    padding: 8,
  },
  safeArea: {
    flex: 1,
  },
  mainContainer: {
    width: '100%',
    height: '100%',
    zIndex: 50,
  },
  titleContainer: {
    marginTop: 80,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  inputContainer: {
    width: '100%',
    marginTop: 116,
    paddingHorizontal: 40,
  },
  inputWrapper: {
    width: '100%',
    marginBottom: 16,
    color : 'White',
  },
  inputField: {
    paddingVertical: 8,
    color: 'White',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  loginButton: {
    borderRadius: 100,
    paddingVertical: 12,
    width: 180,
    marginTop: 16,
    backgroundColor: 'black',
  },
  forgottenPasswordText: {
    marginTop: 64,
    color: '#FFFFFF', 
  },
  createNewAccountText: {
    marginTop: 20,
    color: '#FFFFFF', 
  },
  backbotton:{
    height: 48,
    width: 48,
    // backgroundColor: '#a3a19e',
    marginTop: 50,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backbottonView:{
    width: '100%', 
    height: 64, 
    paddingHorizontal: 16 
  },
  inputTextField:{
    color:'#282929',
  },
});

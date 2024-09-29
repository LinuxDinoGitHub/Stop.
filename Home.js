import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';
import Button from './components/Button';
import Slider from '@react-native-community/slider';

export default function App({route, navigation}) {
  const [minutes, setMinutes] = useState(15)
  console.log(minutes)
  return (
    <KeyboardAvoidingView style={styles.container} enabled={false}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Stop.</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.sliderContainer}>
        <TouchableOpacity style={styles.sliderTitle} onClick>
            <TextInput  
            ref={input => {this.textInput = input}}
            style={styles.invisInput} 
            keyboardType="numeric" 
            onChangeText={val => setMinutes(val)} 
            onPressIn={val => {
                this.textInput.clear();
                setMinutes(0)}} />
            <Text style={styles.sliderText}>Interval: {minutes} minutes</Text>
        </TouchableOpacity>
        <Slider
          value={minutes}
          step={1}
          style={styles.slider}
          minimumValue={0}
          maximumValue={60}
          maximumTrackTintColor="#000000"
          thumbTintColor = "grey"
          onValueChange={val => setMinutes(val)}
        />
        <View style={styles.descContainer}>
            <Text style={styles.descText}>The interval set here determines the time between each 'Stop.' Click on the text above to set the interval manually.</Text>
        </View>
      </View>
      <Button content="Start" style={styles.start} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    position: 'absolute',
    top: 150,
  },
  title: {
    color: "black",
    fontSize: 50,
    fontFamily: 'sans-serif-thin'
  },
  start: {
    flex: 1,
    position: 'absolute',
    bottom: 150,
  },
  sliderContainer:{},
  slider: {
    width: 200, 
    height: 40,
  },
  sliderTitle: {
    alignItems: 'center'
  },
  sliderText: {
    fontFamily: 'sans-serif-thin',
    fontSize: 20
  },
  descContainer: {
    width: 190,
    alignItems: 'center'
  },
  descText:{
    fontSize: 14,
    fontFamily: 'sans-serif-light',
  },
  invisInput:{
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 99,
    opacity: 0,
  }
});

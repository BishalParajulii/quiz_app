import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation';
import { StyleSheet } from 'react-native';


export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container:{
    paddingTop : 40,
    paddingHorizontal : 16
  }
});

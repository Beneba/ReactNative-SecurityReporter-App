import { LogBox } from 'react-native';

// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();

import { StyleSheet, Text, View } from 'react-native';
// import Signup from './src/screen/Signup';
// import Login from './src/screen/Login';
import ReportUpdate from './src/screen/ReportUpdate';





export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>The beginning of the Security app</Text>
      
    // </View>
    // <Signup />
    // <Login />
    <ReportUpdate />
  );
  LogBox.ignoreLogs(['Remote debugger']);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});

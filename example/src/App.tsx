import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { WPA, multiply } from 'react-native-awesome-module';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text>Result: {result}</Text> */}
      <WPA env="develop" secretkey="123" style={{ flex: 1 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

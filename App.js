import { Routes } from './src/routes'
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Provider } from 'react-native-paper';

import { LogBox } from 'react-native';
import * as WebBrowser from "expo-web-browser";

LogBox.ignoreLogs(['Warning: ...']);
LogBox.disableYellowBox = true;
LogBox.ignoreAllLogs();//Ignore all log notifications

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  let [fontsLoaded] = useFonts({ 
    Roboto_400Regular, 
    Roboto_500Medium, 
    Roboto_700Bold
  });

  return (
    <Provider>
      {fontsLoaded && <Routes /> }
    </Provider>
  );
}

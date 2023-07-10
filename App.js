import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import entities from './entities';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <GameEngine
      entities={entities()}
      style={{
        postion: 'absolute',top: 0,right: 0,bottom: 0,left: 0}}
      >

      </GameEngine>
      <StatusBar style="auto" hidden={true}/>
    </View>
  );
}

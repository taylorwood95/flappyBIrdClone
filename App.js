import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import entities from './entities';
import Physics from './physics';
import { useState, useEffect} from 'react';


export default function App() {

  const [running, setRunning] = useState(false)
  
  useEffect(() => {
    setRunning(false)
    
  }, [])
  return (
    <View style={{flex: 1}}>
      <GameEngine
      running={running}
      systems={[Physics]}
      entities={entities()}

      style={{
        position: 'absolute',top: 0,right: 0,bottom: 0,left: 0}}
      >

      </GameEngine>
      <StatusBar style="auto" hidden={true}/>
    </View>
  );
}

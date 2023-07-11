import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import entities from './entities';
import Physics from './physics';
import { useState, useEffect} from 'react';
import { use } from 'matter-js';


export default function App() {

  const [running, setRunning] = useState(false)
  const [gameEngine, setGameEngine] = useState(null)
  const [currentPoints, setCurrentPoints] = useState(0)
  
  useEffect(() => {
    setRunning(false)
    
  }, [])
  return (
    <View style={{flex: 1}}>
      <Text style={{textAlign: 'center', fontSize:40, fontWeight: 'bold', margin: 20}}>{currentPoints}</Text>
      <GameEngine
      ref={(ref) => {setGameEngine(ref)}}
      running={running}
      onEvent={(e) => {
        switch(e.type){
          case 'game_over' :
            setRunning(false)
            gameEngine.stop()
            break;
            case 'new_point' :
              setCurrentPoints(currentPoints + 1)
              break;

        }
      }}
      systems={[Physics]}
      entities={entities()}

      style={{
        position: 'absolute',top: 0,right: 0,bottom: 0,left: 0}}
      >
        <StatusBar style="auto" hidden={true}/>

      </GameEngine>

      { ! running ? 
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => {
          setCurrentPoints(0)
          setRunning(true)
          gameEngine.swap(entities())
        }}
        style={{backgroundColor: 'black', paddingHorizontal: 30, paddingVertical: 10 }}>
          <Text style={{ fontWeight: 'bodl', color: 'white', fontSize: 30}}>
            START GAME
          </Text>

        </TouchableOpacity>

      </View> : null}
      
    </View>
  );
}

import Matter from "matter-js"
import Bird from "../components/Bird";
import Floor from "../components/Floor";

import { Dimensions } from "react-native";

const WindowHeight = Dimensions.get('window').height
const WindowWidth = Dimensions.get('window').width

export default restart => {
    let engine = Matter.Engine.create({enableSleeping: false})

    let world = engine.world

    world.gravity.y = 0.4;
    
    return {
        physics: {engine, world},
        Bird: Bird(world, 'green', {x: 50, y: 200}, {height: 40, width: 40}),
        Floor: Floor(world, 'green', { x: WindowWidth/ 2, y: WindowHeight}, {height: 40, width: WindowWidth})
        

    }
}
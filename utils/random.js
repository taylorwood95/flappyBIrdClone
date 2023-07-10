import { Dimensions } from "react-native";


const WindowHeight = Dimensions.get('window').height
const WindowWidth = Dimensions.get('window').width

export const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + 1 + min)
}

export const getPipeSizePosPair = (addToPosX = 0) => {

    let yPosTop = -getRandom(300, WindowHeight - 100)

    const pipeTop = {pos: { x: WindowWidth + addToPosX, y: yPosTop} , size:  {height: WindowHeight * 2, width: 75} }

    const pipeBottom = { pos: { x: WindowWidth + addToPosX, y: WindowHeight * 2 + 200 + yPosTop }, size: { height: WindowHeight * 2, width: 75 } }

    return { pipeTop, pipeBottom}
}
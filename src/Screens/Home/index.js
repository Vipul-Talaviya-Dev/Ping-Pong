import React, {Fragment, useState, useEffect} from 'react'
import {
  View,
  Text,
  Button,
} from 'react-native'
import styles from './style'

import TextInput from '../../Component/TextInput'

const Home = ({ navigation }) => {

  const [ player1, setPlayer1 ] = useState("")
  const [ player2, setPlayer2 ] = useState("")

  const handleContinue = () => {
      console.log("Player 1", player1)
      console.log("Player 1", player2)

      navigation.navigate("game")
  }

  return (
    <View style={styles.container}>
        <View style={styles.headerWrap}>
            <Text style={styles.header} >Ping Pong</Text>
        </View>
        <View style={styles.bodyWrap}>
            <View></View>
            <Text>Player 1 name</Text>
            <TextInput 
                name={player1}
                setName={setPlayer1}
                placeholderName='Enter Player 1'
            />

            <Text>Player 2 name</Text>
            <TextInput 
                name={player2}
                setName={setPlayer2}
                placeholderName='Enter Player 2'
            />
            
            <Button
                title={'Continue'}
                style={styles.input}
                onPress={handleContinue}
            />
        </View>
    </View>
  )
}

export default Home
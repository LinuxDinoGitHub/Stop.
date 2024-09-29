import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, Alert } from 'react-native';

export default function TicTacToe({route, navigation}) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handlePress = (index) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const winner = calculateWinner(newBoard);
    if (winner) {
      Alert.alert('Winner!', `${winner} wins!`, [{ text: 'OK', onPress: resetBoard }]);
    } else if (newBoard.every(Boolean)) {
      Alert.alert('Draw!', 'The game is a draw!', [{ text: 'OK', onPress: resetBoard }]);
    }
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const renderSquare = (index) => (
    <Pressable onPress={() => handlePress(index)} style={styles.square}>
      <Text style={styles.squareText}>{board[index]}</Text>
    </Pressable>
  );
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Tic Tac Toe</Text>
        <View style={styles.board}>
          {Array.from({ length: 3 }).map((_, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {Array.from({ length: 3 }).map((_, colIndex) => (
                renderSquare(rowIndex * 3 + colIndex)
              ))}
            </View>
          ))}
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  board: {
    width: 300,
    height: 300,
    flexDirection: 'column',
  },
  row: {
    flex: 0,
    flexDirection: 'row',
  },
  square: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  squareText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

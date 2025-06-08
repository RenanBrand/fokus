import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [timerType, setTimerType] = useState(pomodoro[0])
  return (
    <View style={styles.container}>
      <Image source={timerType.image} />
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map(p => (
            <Pressable
              key={p.id}
              style={timerType.id === p.id ? styles.contextButtonActive : null}
              onPress={() => setTimerType(p)}
            >
              <Text style={styles.contextButtonText}>
                {p.display}
              </Text>
            </Pressable>
          ))}
        </View>
        <Text style={styles.timer}>
          {new Date(timerType.initialValue * 1000).toLocaleTimeString('pt-BR', { minute: '2-digit', second: '2-digit' })}
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            Começar
          </Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>
          Desenvolvido por Alura.
        </Text>
      </View>
    </View>

  );
}
const pomodoro = [
  {
    id: 'focus',
    initialValue: 25,
    image: require('../assets/images/foco.png'),
    display: 'Foco'
  },
  {
    id: 'short',
    initialValue: 5,
    image: require('../assets/images/descanso_curto.png'),
    display: 'Pausa curta'
  },
  {
    id: 'long',
    initialValue: 15,
    image: require('../assets/images/descanso_longo.png'),
    display: 'Pausa longa'
  },
]
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40,
  },
  text: {
    color: "#FFF",
  },
  actions: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32
  },
  timer: {
    fontSize: 54,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: '#021123',
    fontSize: 18
  },
  button: {
    backgroundColor: "#B872FF",
    borderRadius: 32,
    padding: 10,
  },
  footer: {
    width: '80%',
  },
  footerText: {
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.5
  },
  context: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  contextButtonText: {
    fontSize: 12.5,
    color: '#FFF',
    padding: 8
  },
  contextButtonActive: {
    backgroundColor: '#144480',
    borderRadius: 8
  },
});

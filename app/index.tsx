import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FokusButton } from "./components/buttons/FokusButton";
import { ActionButton } from "./components/buttons/ActionButton";
import { Timer } from "./components/Timer";

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
export default function Index() {
  const [timerType, setTimerType] = useState(pomodoro[0])
  return (
    <View style={styles.container}>
      <Image source={timerType.image} />
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map(p => (
            <ActionButton
              key={p.id}
              active={timerType.id === p.id}
              OnPress={() => setTimerType(p)}
              display={p.display}
            />
          ))}
        </View>
        <Timer totalSeconds={timerType.initialValue} />
        <FokusButton />
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
  }
});

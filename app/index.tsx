import { useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FokusButton } from "./components/buttons/FokusButton";
import { ActionButton } from "./components/buttons/ActionButton";
import { Timer } from "./components/Timer";
import { IconPause, IconPlay } from "./components/Icons/index";

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25 * 60,
    image: require('../assets/images/foco.png'),
    display: 'Foco'
  },
  {
    id: 'short',
    initialValue: 5 * 60,
    image: require('../assets/images/descanso_curto.png'),
    display: 'Pausa curta'
  },
  {
    id: 'long',
    initialValue: 15 * 60,
    image: require('../assets/images/descanso_longo.png'),
    display: 'Pausa longa'
  },
]
export default function Index() {

  const [timerType, _setTimerType] = useState(pomodoro[0]);

  const [_seconds, setSeconds] = useState(pomodoro[0].initialValue)

  const [timerRunning, setTimerRunning] = useState(false)


  const timerRef = useRef<number | null>(null);

const toggleTimerType = (newTimerType: any) => {
    timerRef.current = null
    setSeconds(newTimerType.initialValue)
    clear()
}

  const clear = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current)
      timerRef.current = null
      setTimerRunning(false)
    }
  }

  const toggleTimer = () => {
    if (timerRef.current) {
      clear()
      return
    }

    setTimerRunning(true)

    const id = setInterval(() => {
      setSeconds((oldState: any) => {
        if (oldState === 0) {
          clear()
          return timerType.initialValue
        }
        return oldState - 1
      })
    }, 1000);

    timerRef.current = id;
  };

  return (
    <View style={styles.container}>
      <Image source={timerType.image} />
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map(p => (
            <ActionButton
              key={p.id}
              active={timerType.id === p.id}
              onPress={() => toggleTimerType(p)}
              display={p.display}
            />
          ))}
        </View>
        <Timer totalSeconds={timerType.initialValue} />
        <FokusButton
          title={timerRunning ? 'Pausar' : 'Começar'}
          icon={timerRunning ? <IconPause /> : <IconPlay />}
          onPress={toggleTimer}
        />
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

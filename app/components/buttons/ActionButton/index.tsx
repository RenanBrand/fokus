import { Pressable, StyleSheet, Text } from "react-native"
type ActionButtonProps = {
    active: boolean;
    OnPress: () => void;
    display: string;
};
export const ActionButton = ({ active, OnPress, display }: ActionButtonProps) => {
    return (
        <Pressable
            style={active ? styles.contextButtonActive : null}
            onPress={OnPress}
        >
            <Text style={styles.contextButtonText}>
                {display}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    contextButtonActive: {
        backgroundColor: '#144480',
        borderRadius: 8
    },
    contextButtonText: {
        fontSize: 12.5,
        color: '#FFF',
        padding: 8
    }
})
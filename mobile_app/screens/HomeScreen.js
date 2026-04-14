import { View, Text, StyleSheet, Video } from "react-native"

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Video
        source={require("../assets/smoke.mp4")}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
        shouldPlay
        isLooping
      />

      <View style={styles.overlay} />

      <View style={styles.content}>
        <Text style={styles.title}>Starry Nights</Text>
        <Text style={styles.subtitle}>Luxury Shopping</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)"
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: { color: "#fff", fontSize: 32 },
  subtitle: { color: "#fff", opacity: 0.7 }
})

import { View } from "react-native";
import euulinda from "../assets/euulinda.jpg"
import InfoProfile from "../components/InfoProfile"
export default function Profile() {
  return (
    <View
      style={{
        flex: 1,
        marginVertical: 32,
        marginHorizontal: 16,
      }}
    >
      <InfoProfile
        image={euulinda}
        publi={5}
        followers={1105}
        following={615}
        description="Happiness is a butterfly 
      18y | ADS"
      />
    </View>
  );
}

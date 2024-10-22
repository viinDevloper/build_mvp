import { ScrollView, View } from "react-native";
import Localization from "@/src/components/home/localization";
import { Search } from "@/src/components/home/search";
import Constants from "expo-constants";

type Props = {};
const StatusBarHeight = Constants.statusBarHeight;

const HomeScreen = (props: Props) => {
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View className="w-full px-4" style={{ marginTop: StatusBarHeight + 8 }}>
        <Search />
        <Localization />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

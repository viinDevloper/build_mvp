import { ScrollView, View } from "react-native";
import Localization from "@/src/components/home/localization";
import { Search } from "@/src/components/home/search";
import Constants from "expo-constants";
import { Banner } from "@/src/components/home/banner";
import { Section } from "@/src/components/home/section";
import Categories from "@/src/components/home/categories";

type Props = {};
const StatusBarHeight = Constants.statusBarHeight;

const HomeScreen = (props: Props) => {
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View className="w-full px-4" style={{ marginTop: StatusBarHeight + 8 }}>
        <Search />
        <Localization />
        <Banner />
        <Section name="Categorias" size="text-xl"/>
        <Categories/>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

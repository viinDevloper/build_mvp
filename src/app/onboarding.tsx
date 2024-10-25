import { useState, useRef } from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import Onboarding1 from '../../assets/Onboarding-1.png'
import Onboarding2 from '../../assets/Onboarding-2.png'
import Onboarding3 from '../../assets/Onboarding-3.png'
import { Button } from '../components/button';
import { Link } from 'expo-router';

interface DataProps {
  image: string;
  title: string;
}

const DATA: DataProps[] = [
  {
    image: Onboarding1,
    title: 'String'
  },
  {
    image: Onboarding2,
    title: 'String'
  },
  {
    image: Onboarding3,
    title: 'String'
  },
];

const Onboarding = () => {
  const [activeBanner, setActiveBanner] = useState<number>(0);
  const FlatlistRef = useRef<FlatList>(null);

  const viewRef = useRef<View | null>(null);
  const [width, setWidth] = useState(0);

  const onLayout = () => {
    if (viewRef.current) {
      viewRef.current.measure((x, y, width,) => {
        setWidth(width);
      });
    }
  };

  const onViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems[0] !== undefined) {
      setActiveBanner(viewableItems[0]?.index);
    }
  };

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        itemVisiblePercentThreshold: 80,
      },
      onViewableItemsChanged,
    },
  ]);
  
  function handlePress () {
    FlatlistRef.current?.scrollToIndex({
      index: activeBanner + 1,
      animated: true,
    });
    setActiveBanner((old) => old + 1);
  }

  return (
    <View ref={viewRef} onLayout={onLayout} className='flex-1 items-center justify-end p-6'>
      <FlatList
        ref={FlatlistRef}
        data={DATA}
        renderItem={({ item, index }) => (
          <View
          key={index}
          className='flex flex-col items-center justify-center mb-12'
          style={{
            width: width - 48,
          }}
          >
            <Image
              source={item.image}
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover'
              }}
              resizeMode='contain'
            />

            <Text>{item.title}</Text>
          </View>
        )}
        style={{
          paddingTop: 20,
          height: 1,
        }}
        pagingEnabled
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        horizontal
        keyExtractor={(item, index) => String(index)}
        showsHorizontalScrollIndicator={false}
      />

      <FlatList
        data={DATA}
        renderItem={({ item, index }) => (
          <View
            className={`rounded-2xl h-2 ${activeBanner === index ? 'w-4 bg-primary100' : 'w-9 bg-bg300'}`}
          />
        )}
        contentContainerStyle={{
          gap: 6
        }}
        scrollEnabled={false}
        horizontal
        keyExtractor={(item, index) => String(index)}
      />

      {activeBanner !== DATA.length - 1 ?
        <Button onPress={handlePress} variant='PRIMARY' title='Próximo'/>
        :
        <Link href='/(auth)/welcome' asChild>
          <Button title='Continuar'/>
        </Link>
      }
    </View>
  );
};

export default Onboarding
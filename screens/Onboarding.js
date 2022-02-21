import React, {useState, useRef} from 'react';
import {View, StyleSheet, FlatList, Animated, Button} from 'react-native';

import SlideData from '../onboard/slides';
import OnboardingItem from '../onboard/OnboardingItem';
import Paginator from '../onboard/Paginator';

export default function Onboarding({navigation}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  });

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const navigate = () => {
    navigation.navigate('signIn');
    console.log(navigation.navigate);
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 0.9}}>
        <FlatList
          data={SlideData}
          renderItem={({item}) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={32}
          // ERROR  TypeError: onViewableItemsChanged is not a function. (In 'onViewableItemsChanged(info)', 'onViewableItemsChanged' is an instance of Object)
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
        <Paginator
          style={styles.paginator}
          data={SlideData}
          scrollX={scrollX}
        />
        <Button style={styles.btn} title="Get Started" onPress={() => navigation.navigate('SignIn')} />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginator: {
    marginTop: 10,
  },
  btn: {
    flex: 0.3,
    marginTop: 0,
  },
});

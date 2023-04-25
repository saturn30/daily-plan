import styled from '@emotion/native';
import { type BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

export const MyTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  return (
    <S.Wrap style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title !== undefined ? options.title : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <S.Button
            key={label}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </S.Button>
        );
      })}
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.SafeAreaView`
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  `,
  Button: styled.TouchableOpacity`
    flex: 1;
    height: 60px;
    align-items: center;
    justify-content: center;
  `,
};

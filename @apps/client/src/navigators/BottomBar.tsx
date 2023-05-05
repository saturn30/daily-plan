import styled from '@emotion/native';
import { Feather } from '@expo/vector-icons';
import { type BottomTabBarProps } from '@react-navigation/bottom-tabs';

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
            <S.Icon
              name={options.tabBarLabel as any}
              size={20}
              isFocused={isFocused}
            />
          </S.Button>
        );
      })}
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.SafeAreaView`
    border-top-width: 1px;
    border-color: ${({ theme }) => theme.color.tintLine};
    background-color: ${({ theme }) => theme.color.background};
  `,
  Button: styled.TouchableOpacity`
    flex: 1;
    height: 50px;
    align-items: center;
    justify-content: center;
  `,
  Icon: styled(Feather)<{ isFocused: boolean }>`
    color: ${({ theme, isFocused }) =>
      isFocused ? theme.color.primaryText : theme.color.secondaryText};
  `,
};

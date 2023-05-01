import Lottie from 'lottie-react-native';

export const CircleLoader = () => {
  return (
    <Lottie
      source={require('../../../../assets/lottie/circleLoader.json')}
      autoPlay
      loop
      style={{ width: 300, height: 300 }}
    />
  );
};

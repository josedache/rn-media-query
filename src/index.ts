import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

export function useDimensions() {
  const [dimension, setDimension] = useState({
    window: Dimensions.get('window'),
    screen: Dimensions.get('screen'),
  });

  useEffect(() => {
    Dimensions.addEventListener('change', setDimension);
    return () => Dimensions.removeEventListener('change', setDimension);
  }, []);
  return dimension;
}

export function useScreenDimension() {
  return useDimensions().screen;
}

export function useWindowDimension() {
  return useDimensions().window;
}

export function useDeviceRotationState() {
  const {width, height} = useScreenDimension();
  return width > height ? 'Landscape' : 'Potrait';
}

export function useIsDeviceLandscape() {
  return useDeviceRotationState() === 'Landscape';
}

export function useIsDevicePotrait() {
  return useDeviceRotationState() === 'Potrait';
}

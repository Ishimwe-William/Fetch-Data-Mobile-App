import { Dimensions } from 'react-native';

export const isTabletDevice = () => {
    const { width, height } = Dimensions.get("window");
    const aspectRatio = height / width;
    return width >= 768 && aspectRatio <= 1.6;
};

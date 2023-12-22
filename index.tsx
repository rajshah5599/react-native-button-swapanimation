import React, { useRef } from 'react';
import { View, PanResponder, Animated, Dimensions, Image, ImageSourcePropType } from 'react-native';
import AssetsImages from './Config/Images';

interface ButtonSwapAnimationProps {
    backgroundColor?: string;
    circleColor?: string;
    imageUrl?: ImageSourcePropType;
    onPress?: () => void;
}

const ButtonSwapAnimation: React.FC<ButtonSwapAnimationProps> = ({ backgroundColor, circleColor, imageUrl, onPress }) => {
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gestureState) => {
                // Update the position of the circle based on the user's swipe
                // Limit the movement to 90% completion
                if (gestureState.moveX < DEVICE_WIDTH * 0.9) {
                    animatedValue.setValue(gestureState.moveX);
                }
            },
            onPanResponderRelease: (event, gestureState) => {
                // Check if the swipe is more than 90% completed
                if (gestureState.moveX >= DEVICE_WIDTH * 0.9) {
                    // Perform your action when the swipe is completed
                    onPress && onPress(); // Ensure onPress is a function before calling
                    // You can add additional logic or trigger functions here
                } else {
                    // Reset the circle position if the swipe is not completed
                    Animated.spring(animatedValue, {
                        toValue: 0,
                        useNativeDriver: false,
                    }).start();
                }
            },
        })
    ).current;

    const animatedValue = useRef(new Animated.Value(0)).current;

    const DEVICE_WIDTH = Dimensions.get('window').width;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* Swipe button container */}
            <View
                style={{
                    width: DEVICE_WIDTH * 0.9,
                    height: 55,
                    borderRadius: 25,
                    backgroundColor: backgroundColor || 'grey', // Use the passed color or default to grey
                    borderWidth: 2,
                    borderColor: 'black',
                    overflow: 'hidden',
                }}
            >
                {/* Circle that the user can swipe */}
                <Animated.View
                    {...panResponder.panHandlers}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: circleColor || 'white', // Use the passed color or default to white
                        position: 'absolute',
                        left: animatedValue,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Image source={imageUrl || AssetsImages.ImgNext} style={{ width: 20, height: 20 }} />
                </Animated.View>
            </View>
        </View>
    );
};

export default ButtonSwapAnimation;

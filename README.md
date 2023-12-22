# Button Swap Animation

Button Swap Animation is a React Native component that allows users to perform an action by swiping a button. It provides a visually appealing way to engage users.

## Installation

Install the Button Swap Animation component in your React Native project using npm or yarn:

```bash
npm install --save react-native-button-swap-animation
# or
yarn add react-native-button-swap-animation
```

## Usage

Import the component in your React Native file and use it as follows:

```jsx
import React from 'react';
import ButtonSwapAnimation from 'react-native-button-swap-animation';

const MyComponent = () => {
  const handleSwipeComplete = () => {
    // Your action to perform when the swipe is completed
    console.log('Swipe completed!');
  };

  return (
    <ButtonSwapAnimation
      backgroundColor="blue"
      circleColor="red"
      imageUrl={require('./path/to/your/image.png')}
      onPress={handleSwipeComplete}
    />
  );
};

export default MyComponent;
```

## Props

- `backgroundColor` (optional): Background color of the swipe button container. Defaults to 'grey'.
- `circleColor` (optional): Color of the swiping circle. Defaults to 'white'.
- `imageUrl` (optional): Image source for the content inside the swiping circle.
- `onPress` (optional): Callback function to be executed when the swipe is completed.

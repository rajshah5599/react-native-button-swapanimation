# reactnative-button-swapanimation

# Button Swap Animation

This is a React Native component that provides a button with a swiping animation. The button has a customizable background color, active opacity, and text content. When pressed, the button smoothly swipes to the right and changes its text content.

## Usage

```jsx
import React from "react";
import ButtonSwapAnimation from "./ButtonSwapAnimation"; // Replace with the correct path

const App = () => {
  return (
    <ButtonSwapAnimation
      PressTitle="Press me"
      onPressTitle="Confirmed"
      bgColorName="blue"
      activeOpacity={0.8}
    />
  );
};

export default App;
```

## Props

- **PressTitle** (string, required): The initial text content of the button.
- **onPressTitle** (string, optional): The text content to be displayed after the button is pressed. If not provided, the default value is "Confirmed."
- **bgColorName** (string, optional): The background color of the button. Default is "blue."
- **activeOpacity** (number, optional): The opacity of the button when it is pressed. Default is 0.8.

## Example

```jsx
<ButtonSwapAnimation
  PressTitle="Press me"
  onPressTitle="Confirmed"
  bgColorName="blue"
  activeOpacity={0.8}
/>
```

## Styles

- **container**: Style for the main container of the component.
- **buttonText**: Style for the text inside the button.

Feel free to customize the styles and use this component in your React Native project.

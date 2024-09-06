# React Native Project - HoHoangVanAnh

## Overview

This project is a React Native application developed as part of Week 03 coursework. It aims to provide a comprehensive demonstration of React Native components and styling.

## Project Structure

- **`App.tsx`**: The main entry point of the application. Contains the primary component rendering the UI.
- **`assets/`**: Directory containing image assets used in the project.
- **`components/`**: Contains reusable React Native components.
- **`screens/`**: Contains different screen components for navigation.

## Features

- **Gradient Background**: Utilizes `react-native-linear-gradient` to apply a gradient background.
- **Responsive Design**: Adapts to different screen sizes using flexbox for layout.
- **Button Styling**: Customizes button appearance and adds spacing between text components.

## Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yw07761/ReactNative_HoHoangVanAnh_20098521_Week03.git

2. **Navigate to the project directory**:
    ```sh
    cd ReactNative_HoHoangVanAnh_20098521_Week03
    Install dependencies:

    ```sh
    npm install
    
3. **Run the project**:
   ```sh
   npx react-native run-android # For Android
   npx react-native run-ios     # For iOS (requires a Mac with Xcode)

## Usage
- Main Screen: Displays a gradient background with a centered image and text.
- Buttons: Includes LOGIN and SIGN UP buttons styled with custom colors.
  
## Troubleshooting
- Linear Gradient Issue: If encountering issues with react-native-linear-gradient, ensure the package is correctly linked and dependencies are properly installed.
- Module Not Found Errors: Verify that all dependencies are correctly installed and up-to-date. If issues persist, try clearing the cache:
  ```sh
  npx react-native start --reset-cache

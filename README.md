# Ionic React Camera & Satisfaction App

This is a mobile application built with **Ionic React** and **Capacitor**, designed to demonstrate camera functionality and a user satisfaction evaluation feature. The app allows users to take photos and rate their satisfaction using an emoji-based interface.

## Features
- **Camera Functionality**: Capture photos using the device's camera and display them instantly with an option to delete.
- **Satisfaction Evaluation**: Rate satisfaction on a 1-5 scale using emojis (😞 to 😍), with feedback submission via an Ionic Alert.
- **Cross-Platform**: Built with Ionic and Capacitor, deployable as an Android APK (and potentially iOS with additional setup).

## Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Ionic CLI](https://ionicframework.com/docs/cli): `npm install -g @ionic/cli`
- [Android Studio](https://developer.android.com/studio) (for Android APK build)
- Git (for cloning and version control)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   
2. **Install Dependencies**:
   ```bash
   npm install
   
3. **Sync Capacitor Plugins**:
   ```bash
   npx cap sync

## Usage

1. **Run Locally (Web)**:
   ```bash
   ionic serve

   Open your browser at http://localhost:8100 to test the app.

2. **Build for Android**:
     ```bash
     npm run build
   
  - Sync with Android
       ```bash
       npx cap sync android
   
  - Open in Android Studio
       ```bash
       npx cap open android

  - Build the APK in Android Studio **(via Build > Build Bundle(s) / APK(s) > Build APK)** or use:

## Project Structure
src/
├── components/
│   ├── CameraComponent.tsx   # Camera functionality component
│   └── SatisfactionComponent.tsx  # Satisfaction evaluation component
├── pages/                   # (Optional) Pages if using routing
├── App.tsx                  # Main app component and routing
└── assets/                  # Static assets (e.g., icons)
android/                     # Android native project files
resources/                   # App icon and splash screen files

## Dependencies
Before you begin, ensure you have the following installed:
- [@ionic/react](https://ionicframework.com/docs): Core Ionic components and framework
- [@capacitor/core](https://ionicframework.com/docs/cli): Capacitor core for native functionality
- [@capacitor/camera](https://ionicframework.com/docs/native/camera): Camera plugin for photo capture
- ionicons : Icons used in the app


 ## Install them with:
    ```bash
    npm install @ionic/react @capacitor/core @capacitor/camera ionicons

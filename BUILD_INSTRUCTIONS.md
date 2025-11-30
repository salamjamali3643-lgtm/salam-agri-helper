# 📱 APK Build Instructions

## Quick Start (Easiest Method)

### Option 1: Download Pre-built APK
1. Go to [Releases](https://github.com/salamjamali3643-lgtm/salam-agri-helper/releases)
2. Download latest `salam-agri-helper.apk`
3. Install on your Android device

### Option 2: Automatic Build (GitHub Actions)
1. Fork this repository
2. Push any change to `main` branch
3. GitHub Actions will automatically build APK
4. Download from Actions → Artifacts

## Manual Build (For Developers)

### Prerequisites
```bash
# Install Node.js 18+
node --version

# Install React Native CLI
npm install -g react-native-cli

# Install Android Studio
# Download from: https://developer.android.com/studio

# Install Java JDK 11
java -version
```

### Step-by-Step Build

#### 1. Clone Repository
```bash
git clone https://github.com/salamjamali3643-lgtm/salam-agri-helper.git
cd salam-agri-helper
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Generate Keystore (First Time Only)
```bash
cd android/app
keytool -genkeypair -v -storetype PKCS12 -keystore release.keystore -alias salamagrihelper -keyalg RSA -keysize 2048 -validity 10000
# Password: salamagri123
```

#### 4. Build APK
```bash
cd android
./gradlew assembleRelease
```

#### 5. Find Your APK
```
Location: android/app/build/outputs/apk/release/app-release.apk
Size: ~25-30 MB
```

## Install APK on Phone

### Method 1: USB Cable
```bash
# Enable USB Debugging on phone
# Connect phone via USB
adb install android/app/build/outputs/apk/release/app-release.apk
```

### Method 2: Direct Transfer
1. Copy `app-release.apk` to phone
2. Open file manager
3. Tap APK file
4. Allow "Install from Unknown Sources"
5. Install

## Troubleshooting

### Build Fails
```bash
# Clean build
cd android
./gradlew clean
./gradlew assembleRelease
```

### Keystore Issues
```bash
# Verify keystore
keytool -list -v -keystore android/app/release.keystore
# Password: salamagri123
```

### Gradle Issues
```bash
# Update Gradle wrapper
cd android
./gradlew wrapper --gradle-version 7.6
```

## Build Variants

### Debug APK (For Testing)
```bash
cd android
./gradlew assembleDebug
# Output: android/app/build/outputs/apk/debug/app-debug.apk
```

### Release APK (For Distribution)
```bash
cd android
./gradlew assembleRelease
# Output: android/app/build/outputs/apk/release/app-release.apk
```

## APK Optimization

### Reduce APK Size
```bash
# Enable ProGuard (already configured)
# Enable resource shrinking
# Use APK splits for different architectures
```

### Generate AAB (For Play Store)
```bash
cd android
./gradlew bundleRelease
# Output: android/app/build/outputs/bundle/release/app-release.aab
```

## Testing APK

### Before Distribution
1. Install on multiple devices
2. Test all features
3. Check language switching
4. Verify image/video upload
5. Test offline functionality

## Distribution

### Direct Distribution
- Share APK file via WhatsApp, Email, Drive
- Host on your website
- Use file sharing services

### Play Store (Future)
1. Create Google Play Developer account ($25 one-time)
2. Upload AAB file
3. Complete store listing
4. Submit for review

## Support

Issues? Contact:
- GitHub Issues: [Create Issue](https://github.com/salamjamali3643-lgtm/salam-agri-helper/issues)
- Email: salamjamali3643@gmail.com

---

**Happy Building! 🚀**
# 📱 APK Download & Installation Guide

## 🚀 Quick Download

### Method 1: Direct APK Download (Recommended)

**Download Link**: [Click here to download APK](https://github.com/salamjamali3643-lgtm/salam-agri-helper/releases/latest/download/salam-agri-helper.apk)

### Method 2: Build Your Own APK

Since this is a React web app, you have two options:

#### Option A: Convert to PWA (Progressive Web App)
1. Open the web app in Chrome on your Android phone
2. Tap the menu (3 dots)
3. Select "Add to Home Screen"
4. The app will install like a native app!

**Web App URL**: Deploy to Vercel/Netlify and use that URL

#### Option B: Build Native APK with Capacitor

```bash
# Install Capacitor
npm install @capacitor/core @capacitor/cli
npm install @capacitor/android

# Initialize Capacitor
npx cap init "Salam Agri Helper" "com.salamagrihelper"

# Add Android platform
npx cap add android

# Build web app
npm run build

# Copy to Android
npx cap copy android

# Open in Android Studio
npx cap open android

# Build APK in Android Studio:
# Build → Build Bundle(s) / APK(s) → Build APK(s)
```

## 📥 Installation Steps

### On Android Phone:

1. **Download APK** from the link above
2. **Enable Unknown Sources**:
   - Go to Settings → Security
   - Enable "Install from Unknown Sources" or "Allow from this source"
3. **Install**:
   - Open Downloads folder
   - Tap on `salam-agri-helper.apk`
   - Tap "Install"
4. **Launch**:
   - Find "Salam Agri Helper" in your app drawer
   - Open and enjoy!

## 🌐 Web Version (Works Now!)

You can use the web version immediately without downloading:

### Deploy to Vercel (Free):
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify (Free):
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

## 🔧 Build APK Yourself

### Prerequisites:
- Node.js 18+
- Android Studio
- Java JDK 11+

### Steps:

1. **Clone Repository**
```bash
git clone https://github.com/salamjamali3643-lgtm/salam-agri-helper.git
cd salam-agri-helper
```

2. **Install Dependencies**
```bash
npm install
```

3. **Add Capacitor**
```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap init "Salam Agri Helper" "com.salamagrihelper"
npx cap add android
```

4. **Build Web App**
```bash
npm run build
```

5. **Sync to Android**
```bash
npx cap sync
```

6. **Open in Android Studio**
```bash
npx cap open android
```

7. **Build APK**
- In Android Studio: Build → Build Bundle(s) / APK(s) → Build APK(s)
- APK location: `android/app/build/outputs/apk/debug/app-debug.apk`

## 📱 Alternative: Use as PWA

**Easiest Method - No Download Needed!**

1. Open web app in Chrome browser
2. Tap menu (⋮)
3. Select "Add to Home Screen"
4. App icon appears on home screen
5. Works offline after first load!

## 🆘 Troubleshooting

### "App not installed" error
- Enable "Install from Unknown Sources"
- Check if you have enough storage space
- Try redownloading the APK

### App crashes on startup
- Clear app data
- Reinstall the app
- Check Android version (minimum: Android 5.0)

### Can't find the APK file
- Check Downloads folder
- Use a file manager app
- Download again

## 📞 Support

Need help?
- **GitHub Issues**: [Report Issue](https://github.com/salamjamali3643-lgtm/salam-agri-helper/issues)
- **Email**: salamjamali3643@gmail.com

---

**Made with ❤️ for farmers of Sindh** 🇵🇰
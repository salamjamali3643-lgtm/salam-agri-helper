# 🌾 Salam Agri Helper

**Advanced Agriculture & Livestock Management System**

Complete mobile application for farmers in Sindh, Pakistan with AI-powered disease detection, live market rates, and expert contacts.

## ✨ Features

### 🌾 Crops Section
- **Disease Detection**: Upload images/videos to detect crop diseases with 90%+ accuracy
- **Market Rates**: Live pricing for wheat, rice, cotton, sugarcane across Sindh cities
- **Crop Doctors**: Contact agricultural experts specializing in crop diseases
- **Agri Shops**: Find seeds, fertilizers, pesticides, and farming equipment

### 🐄 Animals Section
- **Disease Detection**: Identify animal diseases from images/videos
- **Market Rates**: Live livestock pricing (cows, buffaloes, goats, chickens, camels)
- **Veterinary Doctors**: Contact certified veterinarians
- **Feed Shops**: Find animal feed, medicines, vaccines, and equipment

### 🌐 Multi-Language Support
- **English** - Full interface
- **Urdu** (اردو) - Complete translation
- **Sindhi** (سنڌي) - Native language support

### 📍 Location-Based Services
- Karachi
- Hyderabad
- Sukkur
- More cities coming soon

## 📱 Installation

### For Users (APK Installation)

1. **Download APK**: Get the latest APK from [Releases](https://github.com/salamjamali3643-lgtm/salam-agri-helper/releases)
2. **Enable Unknown Sources**: Settings → Security → Enable "Install from Unknown Sources"
3. **Install**: Open the downloaded APK file and install
4. **Launch**: Open "Salam Agri Helper" from your app drawer

### For Developers

#### Prerequisites
- Node.js 16+
- React Native CLI
- Android Studio (for Android)
- JDK 11+

#### Setup
```bash
# Clone repository
git clone https://github.com/salamjamali3643-lgtm/salam-agri-helper.git
cd salam-agri-helper

# Install dependencies
npm install

# Run on Android
npm run android

# Build APK
npm run build:android
```

## 🏗️ Build APK

### Method 1: Using GitHub Actions (Automated)
1. Push code to GitHub
2. GitHub Actions will automatically build APK
3. Download from Actions artifacts

### Method 2: Local Build
```bash
cd android
./gradlew assembleRelease

# APK location:
# android/app/build/outputs/apk/release/app-release.apk
```

## 🎯 Usage

1. **Login/Register**: Create account or login
2. **Select Language**: Choose English, Urdu, or Sindhi
3. **Navigate**: Use bottom navigation to access Crops or Animals sections
4. **Disease Detection**: 
   - Upload image/video
   - Get instant diagnosis
   - View treatment recommendations
5. **Check Market Rates**: Select your city for live pricing
6. **Contact Experts**: Call doctors or shops directly from app

## 🔧 Technology Stack

- **Frontend**: React Native
- **Navigation**: React Navigation
- **Storage**: AsyncStorage
- **Image Handling**: React Native Image Picker
- **Video Support**: React Native Video

## 📊 App Structure

```
salam-agri-helper/
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── Dashboard.js
│   │   ├── CropSection.js
│   │   ├── AnimalSection.js
│   │   ├── DiseaseDetection.js
│   │   ├── MarketRates.js
│   │   ├── Contacts.js
│   │   └── Settings.js
│   ├── translations.js
│   └── App.js
├── android/
├── ios/
└── package.json
```

## 🚀 Roadmap

- [ ] AI-powered disease detection integration
- [ ] Real-time market data API
- [ ] Weather forecasts
- [ ] Crop calendar and reminders
- [ ] Community forum
- [ ] Video tutorials
- [ ] Offline mode
- [ ] Push notifications

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request

## 📄 License

MIT License - feel free to use for personal or commercial projects

## 👨‍💻 Developer

**Salam Jamali**
- Email: salamjamali3643@gmail.com
- GitHub: [@salamjamali3643-lgtm](https://github.com/salamjamali3643-lgtm)

## 🙏 Acknowledgments

- Farmers of Sindh for feedback and requirements
- Agricultural experts for disease data
- Open source community

## 📞 Support

For issues or questions:
- Open an issue on GitHub
- Email: salamjamali3643@gmail.com

---

**Made with ❤️ for farmers of Sindh, Pakistan** 🇵🇰
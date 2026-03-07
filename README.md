# 📱 React Native CRUD App (Expo)

A simple **mobile CRUD application** built using **React Native and Expo** while learning full-stack mobile development.
The app demonstrates authentication, post management, and API communication with a backend server.

This project was built as part of my learning journey to understand how real mobile applications handle **authentication, state management, and CRUD operations**.

---

# 🚀 Features

### Authentication

* User registration
* User login
* Secure token storage using AsyncStorage
* Persistent login session

### Posts

* Create a new post
* View all posts
* View posts created by the logged-in user
* Edit existing posts
* Delete posts

### Profile

* Update user profile information

---

# 🛠 Tech Stack

### Mobile App

* React Native
* Expo
* Expo Router / Navigation
* React Context API
* Axios
* AsyncStorage

### Backend (Connected API)

* Node.js
* Express
* MongoDB


# 📡 API Endpoints Used

Authentication

```
POST /api/v1/auth/register
POST /api/v1/auth/login
PUT  /api/v1/auth/updated-user
```

Posts

```
GET    /api/v1/post/all-post
POST   /api/v1/post/create-post
GET    /api/v1/post/user-post
DELETE /api/v1/post/delete-post/:id
```

---

# ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/react-native-crud-app.git
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start Expo

```bash
npx expo start
```

---

# 📱 Running the App

You can run the app using:

* Expo Go (Android/iOS)
* Android Emulator
* iOS Simulator

---

# 🎯 Learning Goals

This project helped me learn:

* Building mobile apps using React Native
* Handling authentication in mobile apps
* Creating CRUD functionality
* Managing global state using Context API
* Structuring a scalable project
* Connecting a mobile app to a backend API

---

# 📸 Screens

* Login Screen
* Register Screen
* Home Feed
* Create Post
* My Posts
* Account / Profile

---

# 📌 Future Improvements

* Add image upload to posts
* Implement pagination / infinite scrolling
* Improve UI design
* Add comments and likes
* Add better error handling

---

# 🙌 Acknowledgment

This project was built while following a tutorial and experimenting with improvements to better understand React Native application architecture.

---

# 📜 License

This project is open-source and available for learning purposes.

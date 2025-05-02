# My Auth Project

This is a simple authentication system built with **Next.js** and **MongoDB**, featuring:

- User registration
- Login with JWT-based authentication
- Protected dashboard
- Logout functionality

## 🚀 Technologies Used

- Next.js
- React
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- Tailwind CSS (optional for styling)

## 📁 Project Structure

```
my-auth-project/
├── pages/
│   ├── auth/         # Login & Register page
│   ├── dashboard/    # Protected dashboard page
│   └── api/          # API routes for auth (register, login)
├── models/           # Mongoose user model
├── utils/            # Helper functions (e.g., auth middleware, JWT)
├── .env.local        # Environment variables (MongoDB URI, JWT secret)
├── package.json
└── README.md
```

## 🛠️ Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/your-username/my-auth-project.git
cd my-auth-project
```

2. **Install Dependencies**

```bash
npm install
```

3. **Set up Environment Variables**

Create a `.env.local` file:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. **Run the Development Server**

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

## 🔐 Features

- User signup and login
- Secure password hashing with bcrypt
- JWT token generation and verification
- Protected routes for logged-in users

## 🙋‍♀️ Author

Made with ❤️ by Maithri  


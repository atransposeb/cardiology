# Cardiology - Virtual Business Card App

A React application for creating and managing virtual business cards with Supabase backend integration.

## Features

- User authentication (Sign up/Sign in)
- Automatic unique card number generation
- User profile management
- Real-time card display
- Responsive design

## Backend Setup

### 1. Supabase Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Go to your project dashboard
3. Navigate to Settings > API to get your project URL and anon key

### 2. Database Setup

1. In your Supabase dashboard, go to the SQL Editor
2. Copy and paste the contents of `database/schema.sql` 
3. Run the SQL script to create the necessary tables and policies

The script will create:
- `user_profiles` table with columns: id, user_id, email, name, card_number, created_at, updated_at
- Row Level Security (RLS) policies
- Indexes for better performance
- Triggers for automatic timestamp updates

### 3. Environment Configuration

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your Supabase credentials:
   ```
   REACT_APP_SUPABASE_URL=your_supabase_project_url_here
   REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   ```

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── AuthModal.js          # Authentication modal component
│   └── Auth.css              # Authentication styles
├── contexts/
│   └── AuthContext.js        # Authentication context and state management
├── lib/
│   ├── supabase.js          # Supabase client configuration
│   └── authService.js       # Authentication and database operations
├── App.js                   # Main application component
├── App.css                  # Main application styles
└── index.js                 # Application entry point

database/
└── schema.sql               # Database schema and setup script
```

## API Functions

### Authentication Service (`src/lib/authService.js`)

- `signUp(email, password, name)` - Register new user with profile
- `signIn(email, password)` - Sign in existing user
- `signOut()` - Sign out current user
- `getUserProfile(userId)` - Get user profile data
- `updateUserProfile(userId, updates)` - Update user profile
- `getAllUserCards()` - Get all user cards for display
- `getCurrentSession()` - Get current authentication session
- `onAuthStateChange(callback)` - Listen to auth state changes

### Unique Card Generation

Card numbers are automatically generated in the format: `XXXX-XXXX-XXXX` where X can be any alphanumeric character.

## Usage

### User Registration
1. Click the "Login" button in the navigation
2. Switch to "Sign Up" mode
3. Enter name, email, and password
4. A unique card number is automatically generated upon successful registration

### User Authentication
- Users can sign in with their email and password
- Authentication state is managed globally using React Context
- Users remain signed in across browser sessions

### Card Display
- All registered users' cards are displayed on the main page
- Real user data is loaded from the Supabase database
- Falls back to mock data if database is unavailable

## Security Features

- Row Level Security (RLS) enabled on user profiles
- Users can only access and modify their own data
- Public read access for card display (configurable)
- Secure authentication using Supabase Auth

## Available Scripts

- `npm start` - Run the app in development mode
- `npm test` - Launch the test runner
- `npm run build` - Build the app for production
- `npm run eject` - Eject from Create React App (not recommended)

## Environment Variables

- `REACT_APP_SUPABASE_URL` - Your Supabase project URL
- `REACT_APP_SUPABASE_ANON_KEY` - Your Supabase anon/public key

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `build` folder to your hosting service (Netlify, Vercel, etc.)

3. Make sure to set the environment variables in your hosting platform

## Troubleshooting

### Common Issues

1. **Authentication not working**: Check that your Supabase URL and anon key are correct in the `.env` file

2. **Database errors**: Ensure you've run the SQL schema script in your Supabase project

3. **Cards not loading**: Check the browser console for errors and verify your database policies are set up correctly

4. **Environment variables not loading**: Make sure your `.env` file is in the root directory and variable names start with `REACT_APP_`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

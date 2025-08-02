#!/bin/bash

# Supabase Setup Helper Script
# This script helps you set up your Cardiology app with Supabase

echo "🏥 Cardiology App - Supabase Setup Helper"
echo "=========================================="
echo ""

# Check if .env file exists
if [ ! -f .env ]; then
    echo "📝 Creating .env file from template..."
    cp .env.example .env
    echo "✅ .env file created!"
else
    echo "📄 .env file already exists"
fi

echo ""
echo "🔧 Next steps to complete setup:"
echo ""
echo "1. Create a Supabase project at https://supabase.com"
echo "2. Go to Settings > API in your Supabase dashboard"
echo "3. Copy your Project URL and anon public key"
echo "4. Update the .env file with your credentials:"
echo "   - REACT_APP_SUPABASE_URL=your_project_url"
echo "   - REACT_APP_SUPABASE_ANON_KEY=your_anon_key"
echo ""
echo "5. In Supabase SQL Editor, run the commands from:"
echo "   database/schema.sql"
echo ""
echo "6. Install dependencies and start the app:"
echo "   npm install"
echo "   npm start"
echo ""
echo "📚 For detailed instructions, see BACKEND_README.md"
echo ""
echo "Happy coding! 🚀"

# Netlify Deploy Instructions

## Upload the Prototype Package

1. **Go to Netlify**: Visit [netlify.com](https://netlify.com) and sign in to your account

2. **Deploy Manually**:
   - Click "Add new site" → "Deploy manually"
   - Drag and drop the `kids-dds-prototype-netlify.zip` file from your project root
   - Or click "Choose a file" and select the zip

3. **Configure Build Settings** (if needed):
   - **Build command**: `npm install && npm run build` (should auto-detect)
   - **Publish directory**: `.next` (should auto-detect)
   - **Node version**: 18+ (recommended)

4. **Deploy**:
   - Click "Deploy site"
   - Wait for the build to complete (usually 2-3 minutes)

5. **View Your Site**:
   - Once deployed, you'll get a random URL like `https://random-name.netlify.app`
   - Click the URL to view the Kids Dentist prototype

## What's Included in This Prototype

- **Homepage** with organic hero section and service grid
- **About page** with practice information
- **Services page** with pediatric dental offerings
- **Contact page** with office details and form
- **Blog page** (placeholder for future content)
- **Studio page** (placeholder for content management)

## Next Steps

- **Custom Domain**: Add your domain in Site Settings → Domain management
- **Environment Variables**: Add any needed API keys in Site Settings → Environment variables
- **Forms**: Enable form handling in Site Settings → Forms if you add contact forms
- **Analytics**: Add Google Analytics or other tracking in Site Settings → Site settings

The prototype is ready to show Sara! 🎉
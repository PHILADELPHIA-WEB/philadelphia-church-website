# Philadelphia Church Website

A modern, responsive church website built with React, TypeScript, and Tailwind CSS.

## Features

✨ **Pages & Features**
- **Home**: Hero section with welcome message and quick links
- **About**: Church history, mission, vision, and leadership
- **Services**: Service times and ministry descriptions
- **Sermons**: Video library with sermon messages
- **Events**: Calendar of upcoming events
- **News**: Latest church news and updates
- **Giving**: Donation information and options
- **Join Us**: Member connection form (connects to Azure Forms)
- **Contact**: Contact information and message form
- **Prayer Requests**: Submit prayer requests to the prayer team

🎨 **Design**
- Fully responsive (mobile, tablet, desktop)
- Modern, clean design
- Accessible components
- Tailwind CSS styling

⚡ **Performance**
- Fast page loads with Vite
- Optimized bundle sizes
- SEO friendly

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Build Tool**: Vite
- **Icons**: Lucide React
- **State Management**: React Query
- **HTTP Client**: Axios

## Project Structure

```
src/
├── components/
│   ├── Header/          # Navigation header
│   ├── Footer/          # Footer component
│   ├── Hero/            # Hero section template
│   ├── Services/        # Service-specific components
│   ├── Events/          # Event-specific components
│   └── Common/          # Reusable components (Card, Button, etc)
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Sermons.tsx
│   ├── Events.tsx
│   ├── News.tsx
│   ├── Giving.tsx
│   ├── JoinUs.tsx
│   ├── Contact.tsx
│   ├── Prayer.tsx
│   └── NotFound.tsx
├── styles/
│   └── globals.css      # Global Tailwind styles
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
├── hooks/               # Custom React hooks
├── context/             # React Context for state
├── App.tsx              # Main app with routing
└── main.tsx             # Entry point
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd philadelphia-church-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## Development

### Running the Dev Server
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Customization

### Colors & Branding

Edit `tailwind.config.ts` to customize colors:

```typescript
colors: {
  primary: {
    600: '#7c3aed',    // Change to your church color
    // ...
  }
}
```

### Images

Place your church images in the `public/images/` folder:
- `logo.png` - Church logo
- `about-image.jpg` - About section image
- `pastor-1.jpg`, `pastor-2.jpg` - Leadership photos
- `news-1.jpg`, `news-2.jpg`, `news-3.jpg` - News images

### Church Information

Update contact details in:
- `src/components/Footer/Footer.tsx` - Footer contact info
- `src/pages/Contact.tsx` - Contact page details

### Content

Edit content in individual page files:
- `src/pages/Home.tsx`
- `src/pages/About.tsx`
- etc.

## Azure Integration

### Form Submissions (Join Us, Contact, Prayer Requests)

**TODO**: Connect form submissions to Azure Forms:

1. Create Azure Forms form
2. Replace the console.log in form submission handlers
3. Add environment variables for Azure Form URLs

Locations to update:
- `src/pages/JoinUs.tsx` - handleSubmit function
- `src/pages/Contact.tsx` - handleSubmit function
- `src/pages/Prayer.tsx` - handleSubmit function

Example:
```typescript
// In handleSubmit function
const response = await axios.post(
  import.meta.env.VITE_AZURE_FORM_URL,
  formData
);
```

### Deployment to Azure Static Web Apps

1. Create an Azure Static Web Apps resource
2. Connect your GitHub repository
3. Set build configuration:
   - Build folder: `dist`
   - App location: `/`

4. Create `.env` files:
```
.env.local         # Local development
.env.production    # Production
```

Add environment variables:
```
VITE_API_URL=https://your-api.azurewebsites.net
VITE_AZURE_FORM_URL=https://your-form-endpoint
```

## Future Enhancements

- [ ] Backend API integration (Azure App Service)
- [ ] Database integration (Cosmos DB)
- [ ] Sermon video player
- [ ] Blog/news admin panel
- [ ] Member directory
- [ ] Online giving with Stripe integration
- [ ] Email newsletter system
- [ ] Social media integration
- [ ] Search functionality
- [ ] Analytics dashboard

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For issues, questions, or suggestions, please contact info@philadelphiachurch.org

---

**Ready to Deploy?** 🚀

Next Steps:
1. Upload church images to `public/images/`
2. Update church information in footer and contact pages
3. Connect Azure Forms for form submissions
4. Deploy to Azure Static Web Apps

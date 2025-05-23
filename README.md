# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Shadcn UI.

## Features

- 🎨 Modern and clean design using Shadcn UI components
- 📱 Fully responsive layout
- 🚀 Built with Next.js 14 and TypeScript
- 🎯 SEO optimized
- 📝 Easy to customize and extend
- 🌐 Automated deployment to GitHub Pages

## Pages

- **About**: Personal information and skills showcase
- **Projects**: Portfolio of work and projects
- **Contact**: Contact information and social media links

## Tech Stack

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This portfolio is configured for automatic deployment to GitHub Pages. To deploy:

1. Create a new repository on GitHub
2. Push your code to the repository:
   ```bash
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

3. In your GitHub repository settings:
   - Go to "Pages"
   - Under "Build and deployment", select "GitHub Actions" as the source
   - Your site will be deployed automatically on every push to the main branch

The site will be available at: `https://yourusername.github.io/portfolio`

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── projects/          # Projects page
│   ├── contact/           # Contact page
│   └── layout.tsx         # Root layout with navigation
├── components/            # React components
│   └── ui/               # Shadcn UI components
└── lib/                  # Utility functions
```

## Customization

1. Update the content in each page component (`src/app/*/page.tsx`)
2. Modify the theme in `tailwind.config.ts`
3. Add or remove components from `src/components/ui/`
4. Update metadata in `src/app/layout.tsx`

## Contributing

Feel free to submit issues and pull requests.

## License

MIT License - feel free to use this project as a template for your own portfolio.

## Author

Your Name
- GitHub: [@sahil101](https://github.com/sahil101)
- LinkedIn: [Sahil Agarwal](https://www.linkedin.com/in/agarwalsahil97/)

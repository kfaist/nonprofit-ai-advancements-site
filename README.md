# Nonprofit AI Advancements Site

Welcome to the **Nonprofit AI Advancements Site**! This project is built with [Astro](https://astro.build/) and serves as a minimal blog demonstrating how artificial intelligence can support nonprofit organizations.

## 📦 Features

- **Blog with Markdown content**: Write posts in the `content/posts/` folder using frontmatter (`title`, `description`, `date`, `tags`).
- **RSS feed & sitemap**: Automatically generated at `/rss.xml` and `/sitemap.xml`.
- **SEO meta tags**: Basic SEO and social share metadata included via the base layout.
- **GitHub Pages deploy**: A GitHub Actions workflow builds the site and publishes the `dist` folder to the `gh-pages` branch on every push to `main`.
- **Ready for Vercel** (optional): Can also be deployed to Vercel with minimal configuration.

## 🚀 Getting Started Locally

Assuming you have [Node.js](https://nodejs.org/) (v18+) installed:

1. **Clone the repository** (or download as ZIP and extract):
   ```bash
   git clone https://github.com/kfaist/nonprofit-ai-advancements-site.git
   cd nonprofit-ai-advancements-site
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Visit `http://localhost:4321/nonprofit-ai-advancements-site/` (or the URL shown in your terminal) to view the site with live reload.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The built files will be in the `dist/` directory.

5. **Preview the build locally** (optional):
   ```bash
   npm run preview
   ```

## 📬 Publishing New Blog Posts

To add a new article:

1. Create a new file in `content/posts/` with a filename like `my-post.md`.
2. Include frontmatter at the top:
   ```md
   ---
   title: "Your Post Title"
   description: "A short summary for SEO and social cards."
   date: "2025-10-05"
   tags: ["tag1", "tag2"]
   ---
   Content goes here.
   ```
3. Commit your new post on a branch (e.g., `post/my-post`) and open a pull request.
4. After the PR is merged, the GitHub Action will automatically rebuild and deploy the site.

## 🛫# Nonprofit AI Advancements Site

Welcome to the **Nonprofit AI Advancements Site**! This project is built with [Astro](https://astro.build/) and serves as a minimal blog demonstrating how artificial intelligence can support nonprofit organizations.

## 📦 Features

- **Blog with Markdown content**: Write posts in the `content/posts/` folder using frontmatter (`title`, `description`, `date`, `tags`).
- **RSS feed & sitemap**: Automatically generated at `/rss.xml` and `/sitemap.xml`.
- **SEO meta tags**: Basic SEO and social share metadata included via the base layout.
- **GitHub Pages deploy**: A GitHub Actions workflow builds the site and publishes the `dist` folder to the `gh-pages` branch on every push to `main`.
- **Ready for Vercel** (optional): Can also be deployed to Vercel with minimal configuration.

## 🚀 Getting Started Locally

Assuming you have [Node.js](https://nodejs.org/) (v18+) installed:

1. **Clone the repository** (or download as ZIP and extract):
   ```bash
   git clone https://github.com/kfaist/nonprofit-ai-advancements-site.git
   cd nonprofit-ai-advancements-site
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Visit `http://localhost:4321/nonprofit-ai-advancements-site/` (or the URL shown in your terminal) to view the site with live reload.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The built files will be in the `dist/` directory.

5. **Preview the build locally** (optional):
   ```bash
   npm run preview
   ```

## 🛈 Publishing New Blog Posts

To add a new article:

1. Create a new file in `content/posts/` with a filename like `my-post.md`.
2. Include frontmatter at the top:
   ```md
   ---
   title: "Your Post Title"
   description: "A short summary for SEO and social cards."
   date: "2025-10-05"
   tags: ["tag1", "tag2"]
   ---
   Content goes here.
   ```
3. Commit your new post on a branch (e.g., `post/my-post`) and open a pull request.
4. After the PR is merged, the GitHub Action will automatically rebuild and deploy the site.

## 🛬 Deployment via GitHub Pages

This repository includes a workflow (`.github/workflows/pages.yml`) that uses [`peaceiris/actions-gh-pages`](https://github.com/peaceiris/actions-gh-pages) to publish the site.

1. Push changes to the `main` branch. GitHub Actions will build the site and push the generated `dist/` folder to the `gh-pages` branch.
2. **Enable GitHub Pages**: Navigate to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**. Select `gh-pages` as the branch and `/` as the folder. Save.
3. Your site will be available at:
   ```
   https://kfaist.github.io/nonprofit-ai-advancements-site
   ```

## 🌐 Connect to Vercel (Optional)

If you’d like to deploy on Vercel instead of or in addition to GitHub Pages:

1. Install the [Vercel GitHub App](https://vercel.com/docs/git/vercel-for-github) and import this repository.
2. During import, set **Project Settings → Root Directory** to `/` and confirm.
3. Optionally add environment variables in Vercel:
   - `PUBLIC_SITE_NAME`: `Nonprofit AI Advancements`
   - `PUBLIC_SITE_TAGLINE`: `Exploring how AI can help nonprofits`
4. Trigger a deployment. Vercel will build the site and provide a live URL.

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome! Feel free to open issues or pull requests.

## 👍 License

This project is released under the MIT License. See the [LICENSE](LICENSE) file for details.
 Deployment via GitHub Pages

This repository includes a workflow (`.github/workflows/pages.yml`) that uses [`peaceiris/actions-gh-pages`](https://github.com/peaceiris/actions-gh-pages) to publish the site.

1. Push changes to the `main` branch. GitHub Actions will build the site and push the generated `dist/` folder to the `gh-pages` branch.
2. **Enable GitHub Pages**: Navigate to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**. Select `gh-pages` as the branch and `/` as the folder. Save.
3. Your site will be available at:
   ```
   https://kfaist.github.io/nonprofit-ai-advancements-site
   ```

## 🌐 Connect to Vercel (Optional)

If you’d like to deploy on Vercel instead of or in addition to GitHub Pages:

1. Install the [Vercel GitHub App](https://vercel.com/docs/git/vercel-for-github) and import this repository.
2. During import, set **Project Settings → Root Directory** to `/` and confirm.
3. Optionally add environment variables in Vercel:
   - `PUBLIC_SITE_NAME`: `Nonprofit AI Advancements`
   - `PUBLIC_SITE_TAGLINE`: `Exploring how AI can help nonprofits`
4. Trigger a deployment. Vercel will build the site and provide a live URL.

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome! Feel free to open issues or pull requests.

## 📄 License

This project is released under the MIT License. See the [LICENSE](LICENSE) file for details.

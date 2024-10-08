# BN Astro Test

This project is a **static website** built using [Astro](https://astro.build/), a fast, content-focused static site generator. It features a responsive and fluid design powered by **Tailwind CSS**, and includes dynamic data handling using **JSON** files for content management.

## Table of Contents

1.  [Overview](#overview)
2.  [Project Structure](#project-structure)
3.  [Features](#features)
4.  [Dynamic Content](#dynamic-content)
5.  [Tailwind CSS](#tailwind-css)
6.  [Astro Icon](#astro-icon)
7.  [Flow of the Project](#flow-of-the-project)
8.  [Customization](#customization)
9.  [Conclusion](#conclusion)

## Overview

The site contains several components, such as a **Hero section**, **About section**, and **Header**, with each component leveraging Tailwind CSS for layout and style. The site is designed to be easily extensible with additional components and sections.

The website pulls in content dynamically from JSON files for flexibility and easy content updates.

## Project Structure

The project follows a modular approach, with components, layouts, and content data separated for ease of maintenance and scalability. Here’s a breakdown of the directory structure:

    `src/
    ├── components/
    │   ├── About.astro           # About section component
    │   ├── Header.astro          # Header component
    │   ├── HeroHome.astro        # Hero section component
    ├── content/
    │   ├── general/
    │   │   └── general.json      # General information about the company (e.g., name, location)
    │   ├── pages/
    │   │   └── home.json         # Content for the home page, including hero and about section
    ├── layouts/
    │   └── MainLayout.astro      # Main layout for all pages
    ├── pages/
    │   └── index.astro           # Home page pulling in all components and data
    ├── styles/
    │   └── global.css            # Global styles including fluid typography using clamp()`

## Features

### Dynamic Content

The content for various sections (like the hero section, about section, and header) is pulled dynamically from JSON files stored in the `/content` directory. This allows for easy updates to the website’s text, images, and metadata without changing the code itself.

### Tailwind CSS

Tailwind CSS is used throughout the project to provide utility-first styling. It allows for rapid UI development and ensures that the site is responsive across different devices. The project also includes **fluid typography** implemented with the `clamp()` function to create responsive, scalable text sizes.

### Astro Icon

Icons throughout the site are managed using **astro-icon**, a convenient icon management tool that integrates with Astro for SVG-based icons.

## Flow of the Project

1.  **Main Layout**: The layout (`MainLayout.astro`) wraps the entire site, providing a consistent header, footer, and structure across all pages.
2.  **Home Page**: The `index.astro` file imports content data from JSON files and injects it into components like `HeroHome` and `About`.
3.  **Components**:

    - **HeroHome.astro**: Displays the hero section, pulling in dynamic content such as the company location and features from `home.json`.
    - **About.astro**: Displays the about section, pulling text and images from `home.json`.

4.  **Data Handling**: All content is stored in the `/content` directory, where `general.json` contains information like the company name, logo, and location. The `home.json` file contains data specific to the homepage (hero and about sections).

## Customization

To customize the content of the website we can:

- **Update Text/Images**: Modify the JSON files in the `/content` directory.
- **Update Global Styles**: Modify `global.css` for typography or color changes across the site.
- **Add New Components**: Create new `.astro` components in the `/components` directory, and import them into the relevant pages.

## Conclusion

This project is a **static website** built using [Astro](https://astro.build/), a fast, content-focused static site generator. It features a responsive and fluid design powered by **Tailwind CSS**, and includes dynamic data handling using **JSON** files for content management.

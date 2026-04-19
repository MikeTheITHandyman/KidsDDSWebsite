# CLAUDE.md

# Project Overview
This project is a modern, mobile-first marketing website for "Kids Dentist" located in Grayslake, IL. 
The primary goals are dominating local SEO for pediatric dentistry, providing a warm and inviting digital presence, and driving patient conversions (appointment requests and insurance verification).

## Business Details (kidsdds.com)
- **Practice Name:** Kids Dentist
- **Location:** 160 Commerce Dr #100, Grayslake, IL 60030
- **Phone:** (847) 223-1400
- **Doctors:** Sonia Gutierrez, DDS; Dave Rutcosky, DDS; Sahar Alrayyes, DDS; Anne-Ashley Compton, DDS.
- **Focus:** Practice strictly limited to Pediatric Dentistry.

## Design Guidelines
- **Target Audience:** Parents looking for a safe, expert, and friendly environment, and children who need to feel at ease.
- **Colors:** Soft, calming blues and greens (trust, serenity) with warm neutral backgrounds (ivory, beige). No cold, clinical white.
- **Accent Colors:** Use energetic yellow or warm orange (max 10-15%) for primary Calls to Action.
- **Vibe:** Welcoming, empathetic, playful, but highly professional.

## Core Website Features & Architecture
- **Hero Section:** Clear, welcoming headline with prominent "Request an Appointment" and "Call Us" buttons. 
- **My First Visit:** A dedicated, highly visible section/page designed to put both parents and children at ease before their first appointment.
- **Insurance & Forms:** A clear section outlining accepted insurances and easy access to patient forms.
- **Monthly Blog:** A dedicated `/blog` route built to handle dynamic content pushes. Must be highly optimized for SEO.
- **Services:** Highlight Preventive, Restorative, Special Needs, and Sedation Dentistry.

## Tech Stack & SEO Guidelines
- **Framework:** Next.js 15 (App Router) with React 19 and TypeScript.
- **Styling:** Tailwind CSS v4.
- **SEO First:** - ALWAYS use semantic HTML (`<header>`, `<main>`, `<article>`, `<section>`).
  - Ensure all pages have proper `<title>`, `<meta name="description">`, and OpenGraph tags.
  - Ensure all images use the `next/image` component with highly descriptive `alt` tags.
- **Responsive:** Strict mobile-first development. The site must look perfect on smartphones.

## Claude Code Rules
- **Design Skill:** ALWAYS invoke the front-end design skill before writing any front-end code to ensure a beautiful, non-"AI-vibe" result.
- **Components:** Maintain a clean component structure. Keep reusable UI (buttons, cards) separate from page layouts.
- **Images:** Assume brand assets (logo, team photos, office tours) will be placed in the `public/brand_assets` directory.
- **Clarity:** If a request impacts the site's SEO or Core Web Vitals negatively, warn the developer before proceeding.
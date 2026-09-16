This document serves as the technical operations guide for the Kids Dentist website. It explains how the infrastructure is connected, how to manage content, and how to maintain the Next.js 15 application.

## 1. Infrastructure Map
All mission-critical infrastructure is consolidated under the master admin account: `mike@kidsdds.com`.

*   **Version Control (GitHub):** The source code is hosted in a private repository at `MikeTheITHandyman/KidsDDSWebsite`.
*   **Hosting (Netlify):** Hosted on Netlify's Free/Starter Tier. The Netlify account is connected to the GitHub repository via SSO for manual deployments.
*   **CMS (Sanity.io):** A headless CMS managing Blog Posts, Parent Reviews, and Practice Events. Accessible via `/studio`.
*   **Email Routing (Resend):** Handles form submissions, sending internal alerts to the office and branded auto-responders to patients from `noreply@kidsdds.com`.
*   **Analytics (Google Analytics 4):** Tracks conversions, phone clicks, and site traffic.
*   **Domain & DNS (GoDaddy):** Manages the `kidsdds.com` domain. Web traffic routes to Netlify; MX records route email to the practice's email provider.

## 2. Local Development Setup
To run this site on a local machine for development or styling updates:

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/MikeTheITHandyman/KidsDDSWebsite.git](https://github.com/MikeTheITHandyman/KidsDDSWebsite.git)
    cd KidsDDSWebsite
    ```
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
3.  **Environment Variables:**
    Create a `.env.local` file in the root directory. You will need to securely obtain these values:
    *   `NEXT_PUBLIC_SANITY_PROJECT_ID`
    *   `NEXT_PUBLIC_SANITY_DATASET=production`
    *   `SANITY_API_READ_TOKEN`
    *   `SANITY_API_WRITE_TOKEN`
    *   `RESEND_API_KEY`
    *   `CONTACT_EMAIL_TO`
    *   `CONTACT_EMAIL_FROM=Kids Dentist <noreply@kidsdds.com>`
    *   `NEXT_PUBLIC_GA_ID`
4.  **Start the Server:**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:3000`.

## 3. Deployment Workflow (Manual)
To conserve Netlify build minutes and allow for local batch testing, Netlify "auto-publishing" is disabled.

**To push updates live:**
1.  Save your local changes to GitHub using the terminal:
    ```bash
    git add .
    git commit -m "Description of changes"
    git push
    ```
2.  Log into the Netlify Dashboard (under `mike@kidsdds.com`).
3.  Navigate to the **Deploys** tab.
4.  Click **Trigger deploy** > **Deploy site**.

## 4. Content Management Workflow
Staff can manage dynamic content without touching the code.

1.  Navigate to `https://www.kidsdds.com/studio`.
2.  Log in using authorized credentials.
3.  **To add a Blog Post:** Select "Blog Post", fill out the title, author, publish date, and content. Add a cover image. Click "Publish".
4.  **To add a Review:** Select "Parent Review". Fill in the details and toggle the "Featured" switch to true to display it on the homepage carousel. Click "Publish".
5.  Changes will automatically rebuild and propagate to the live site.

## 5. Troubleshooting & Maintenance

*   **Netlify Duplicate File Errors:** If Netlify throws a build error regarding duplicate files, ensure hidden folders (like stray `.git` folders inside subdirectories) are completely removed from the project before pushing.
*   **Missing API Keys:** If the contact forms fail or Sanity data is missing, check the Netlify **Site configuration > Environment variables** to ensure all keys match the `.env.local` file.
*   **Stray package-lock.json:** If terminal warnings appear regarding files outside the project root, check `C:\\Users\\miken\\` for stray `package-lock.json` or `node_modules` folders and delete them.
*   **DNS Protection:** NEVER change the GoDaddy Nameservers. Only update the A Record (`75.2.60.5`) and the CNAME (`www`) to protect the practice's MX email records.

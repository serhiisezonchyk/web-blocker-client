# Client - Chrome Extension for Blocking Sources by URL

This is the client-side of the Chrome extension for blocking sources by URL. Built with Next.js, this part of the application handles the user interface and interacts with the backend API.

## Project Structure

- **Next.js**: Frontend framework for React applications.
- **TypeScript**: Type-checking and static analysis.
- **Tailwind CSS**: Styling.
- **React Query**: Data fetching and caching.
- **React Hook Form**: Form management.
- **Zod**: Schema validation.

## Requirements

- **Node.js**: Ensure you have Node.js installed.

## Scripts

| Command               | Description                                      |
|-----------------------|--------------------------------------------------|
| `npm run dev`         | Starts the development server                    |
| `npm run build`       | Builds the application for production            |
| `npm run start`       | Starts the production server                     |
| `npm run lint`        | Lints the codebase using ESLint                  |
| `npm run format`      | Formats code using Prettier                      |
| `npm run api:download`| Downloads the latest API schema                  |
| `npm run api:generate`| Generates API client using Orval                 |

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
2. **Environment Variables**
- Set up any required environment variables in a .env file at the root of your project.
3. **Run the Development Server**
    ```bash
    npm run dev
4. **Generate API Client**
- To generate the API client based on the latest API schema, first download the schema, then generate the client:
    ```bash
    npm run api:download
    npm run api:generate
## Linting and Formatting
- **Linting:** Run npm run lint to check code quality.
- **Formatting:** Use npm run format to format code with Prettier.
## Libraries Used
- **Shadcn UI:** Dropdowns, labels, selects, etc.
- **Framer Motion:** Animations.
- **React Hook Form:** Efficient form handling.
- **Zod:** Schema validation.

## Additional Notes
- **API Schema:** Ensure the backend server is running before executing npm run api:download.
- **Localization:** Uses next-intl for multi-language support.

For any issues, please refer to the documentation for each package used or consult the Next.js and TypeScript documentation.
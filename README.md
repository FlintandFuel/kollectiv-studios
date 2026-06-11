# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## GCP deployment

This project can deploy as a static site or as a container on Google Cloud Platform.

### Cloud Run

1. Install and authenticate the Google Cloud SDK.
2. Set your project:
   `gcloud config set project YOUR_PROJECT_ID`
3. Deploy:
   `npm run deploy:cloudrun`

The `Dockerfile` in this repository builds the app and serves `dist/` with Nginx.

### Static hosting with Cloud Storage

1. Build the app:
   `npm run build`
2. Upload the `dist/` folder to a GCS bucket:
   `GCS_BUCKET=your-bucket-name npm run deploy:gcs`
3. Configure bucket website hosting with `index.html` as the main page and fallback.

### Notes

- `vite.config.js` is configured with `base: '/'` for root deployment.
- For Cloud Run, the container listens on port `80`.

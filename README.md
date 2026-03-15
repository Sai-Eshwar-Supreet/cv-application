# cv-application

A browser-based CV builder built with **React**.  
The app lets users enter personal details, education, and work experience while generating a live resume preview.

## Live Demo

[View live page](https://cv-app-theta-liard.vercel.app)

## Overview

The application is split into two panels:

- **Editor** – interface used to input CV data
- **Preview** – real-time rendered resume

## Core capabilities:

- Dynamic education and experience entries
- Entry reordering
- Collapsible editing sections
- Live preview rendering
- Example data loading
- PDF export

All inputs are **controlled React components**, with application state driving both the editor and preview.

## Tech

- React
- JavaScript
- CSS
- react-to-print

## Run Locally

Clone the repository and install dependencies.

```bash
git clone https://github.com/Sai-Eshwar-Supreet/cv-application.git
cd cv-application
npm install
npm run dev
```

Open the local server shown in the terminal.

## Deployment

- The project is deployed using Vercel.
- Every push to the main branch automatically triggers a new deployment.

## Acknowledgements

- This project was completed as part of **[The Odin Project – React Course](https://www.theodinproject.com/)**
- Icons are sourced from **[Material Design Icons](https://materialdesignicons.com/)**

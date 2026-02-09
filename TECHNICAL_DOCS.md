# VersoKit Technical Documentation

VersoKit is a comprehensive collection of privacy-first, offline-ready web tools built with Next.js, React, Tailwind CSS, and Zustand. All data is processed locally on the user's device.

## System Overview

| Feature | Implementation |
|---------|----------------|
| **Framework** | Next.js 15 (App Router) |
| **State Management** | Zustand (Persistent) & useLocalStorage |
| **Styling** | Tailwind CSS + ShadCN UI |
| **Internationalization** | Custom Context Provider (7 Languages) |
| **Data Privacy** | 100% Client-side processing |

---

## Tool Modules

### 1. Sports & Tournament Tools

#### Americano Generator (`/tools/americano`)
*   **Tech Details:** Zustand (`store.ts`) with local storage persistence.
*   **Features:**
    *   Supports Padel, Pickleball, and Tennis Americano formats.
    *   **Anchor Shift Algorithm:** Ensures fair partner rotation across rounds.
    *   **Contextual Scoring:** Fixed-sum scoring for Padel/Tennis; Race-to-X for Pickleball.
    *   Automated individual leaderboard tracking.

#### Tennis Match Generator (`/tools/tennis`)
*   **Tech Details:** Zustand, Skill-balancing logic.
*   **Features:**
    *   **Skill-Based Matchmaking:** Balances doubles teams based on 1-5 skill levels.
    *   **Fair Play Algorithm:** Prioritizes players with the least matches played.
    *   Manual match overrides and roster management.

#### Football Lineup Builder (`/tools/lineup-builder`)
*   **Tech Details:** `html2canvas` for export, CSS Absolute Positioning.
*   **Features:**
    *   Drag-and-drop player positioning on a virtual pitch.
    *   Customizable jersey colors and player names.
    *   Export as high-resolution PNG for social media sharing.

#### Universal Scoreboard (`/tools/scoreboard`)
*   **Tech Details:** `useLocalStorage` for state recovery.
*   **Features:**
    *   Supports Volleyball, Badminton, and Table Tennis scoring.
    *   Tracks sets won and individual points with a "Victory Target" alert.
    *   "Swap Sides" feature for match half-time.

---

### 2. Financial Tools

#### Budget Planner (`/tools/budget-planner`)
*   **Tech Details:** Zustand, `Intl.NumberFormat` for currency localization.
*   **Features:**
    *   **Zero-Based Budgeting:** Forces every unit of income to be assigned to a category.
    *   **Cover Overspending:** Advanced logic to move funds between "envelopes" when a category goes red.
    *   **Transaction Tracking:** Link expenses to specific categories to see real-time "Available" balances.
    *   **Data Management:** Local JSON backup/restore and CSV export for Excel.

#### Split Bill Calculator (`/tools/split-bill`)
*   **Tech Details:** React state, Web Clipboard API.
*   **Features:**
    *   Calculates individual shares including Tax and Service charges.
    *   **WhatsApp Sharing:** Generates a formatted text summary for group chats.
    *   Dynamic currency localization (Rp, $, €, R$).

---

### 3. Business & Productivity Tools

#### Invoice Generator (`/tools/invoice`)
*   **Tech Details:** Browser Print API (CSS Media Queries for @print).
*   **Features:**
    *   Professional itemized billing with automated subtotal/tax calculation.
    *   Clean PDF output generated via system print dialog.
    *   Persistence of business/client info for recurring use.

#### Shift Scheduler (`/tools/shift`)
*   **Tech Details:** `html2canvas` for roster exports.
*   **Features:**
    *   Weekly roster view for Morning/Afternoon/Night/Off shifts.
    *   One-click randomization for quick scheduling.
    *   Export as image for staff distribution.

#### Inventory Manager (`/tools/inventory`)
*   **Tech Details:** `useLocalStorage` for lightweight database.
*   **Features:**
    *   Simple stock-in/stock-out incrementors.
    *   Search/Filter functionality for large rosters.
    *   Data persistence across sessions.

---

### 4. Utility & File Tools

#### Image Processing Suite (`/tools/image-*`)
*   **Compressor:** Uses `browser-image-compression` for client-side KB reduction.
*   **Resizer:** Uses HTML5 Canvas API for pixel-perfect dimension changes.
*   **Cropper:** Uses `react-easy-crop` for aspect ratio presets (1:1, 16:9).
*   **Image to PDF:** Uses `pdf-lib` to bundle image galleries into a single document locally.

#### PDF Merge (`/tools/pdf-merge`)
*   **Tech Details:** `pdf-lib`.
*   **Features:**
    *   Client-side PDF page combining.
    *   No file size limit (limited only by device RAM).
    *   Drag-to-order file list.

#### CSV Cleaner (`/tools/csv-helper`)
*   **Tech Details:** `papaparse`.
*   **Features:**
    *   Automatic duplicate row removal.
    *   Whitespace trimming for data sanitization.
    *   Preview of first 10 rows before processing.

---

## State Persistence Strategy

VersoKit uses a tiered persistence strategy:
1.  **Zustand Persist Middleware:** Used for complex tools requiring cross-component state (Budget, Tennis, Americano). Key: `localStorage`.
2.  **useLocalStorage Hook:** Used for single-page utility tools (Scoreboard, Kanban, Inventory).
3.  **DataPersistence Component:** A reusable UI wrapper that provides JSON backup/restore functionality to the underlying store data.

## Localization Architecture

The `Providers.tsx` file contains a custom `LanguageContext`.
*   **Supported:** EN, ID, ES, PT, DE, FR, IT.
*   **Logic:** Tools use a `UI_TEXT` dictionary mapped to the `lang` state.
*   **Currency:** Formatted using `Intl.NumberFormat` which respects the user's region for symbols and decimal separators.

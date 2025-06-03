# SwiftSign Pipeline AI Tool

*AI‑powered document‑signing workflow & audit pipeline*

---

## Data Flow & Architecture
```mermaid
flowchart TD
    subgraph Browser
        A[sign.html SPA]
        B(User Upload)
        C(Signature Wizard)
    end
    subgraph Express
        D[/index.js/]
        E[/routes/sign.js/]
        F[/routes/audit.js/]
        G[OpenAI SDK]
        H[sign_events.json]
    end

    B--POST PDF-->E
    E--ChatCompletion-->G
    G--Field Detection-->E
    E--JSON-->A

    C--POST JSON-->F
    F--Append-->H
```

---

## Project Overview
This repo bundles a **single‑page application** (SPA) and **Node.js / Express backend** that together deliver instant, AI‑assisted e‑signature flows, from upload to legally‑compliant audit trail.

The backend exposes REST endpoints that turn clinician‑ or client‑supplied PDF documents into sign‑ready envelopes using **OpenAI GPT‑4o** for field detection, then tracks every signature event in JSON for transparent auditing.

---

## Features
| Feature | Description |
|---------|-------------|
| ✒️ **Smart Field Detection** | GPT‑4o detects and tags signature, date & initials boxes in any PDF. |
| 🔍 **OCR + Search** | Full‑text search across uploaded documents for instant navigation. |
| 📄 **Audit Trail** | All signer actions recorded in **`/server/data/sign_events.json`**—no database required. |
| 🎨 **Tailwind UI** | Responsive, dark‑mode‑aware front‑end ready for print & PDF export. |
| 🔐 **.env Support** | Backend reads `OPENAI_API_KEY` from environment variables—never hard‑coded. |

---

## Directory Structure
```txt
root
└── server                  # Backend + static SPA
    ├── data
    │   └── sign_events.json       # Signature / audit logs
    ├── public              # Front‑end (served as static assets)
    │   ├── assets/logo.png # Branding
    │   ├── sign.html       # SPA (Tailwind + Vanilla JS)
    │   └── workspace.code-workspace
    ├── routes
    │   ├── sign.js         # POST /api/sign – OpenAI logic
    │   └── audit.js        # POST /api/audit – append audit JSON
    ├── index.js            # Express entry‑point
    ├── package.json        # NPM metadata
    └── .gitignore          # Node / editor ignores
```

---

### Static Asset Pipeline
```mermaid
graph LR
    CSS["Tailwind CDN<br/>(dark‑mode)"]
    JS["Vanilla JS<br/>(html2pdf, localStorage)"]
    HTML[sign.html]
    Browser((Browser))

    CSS --> Browser
    JS  --> Browser
    HTML --> Browser
```

---

## Screenshots
| Light Mode | Dark Mode |
|------------|-----------|
| ![light](server/public/assets/logo.png) | ![dark](server/public/assets/logo.png) |

---

## Contributing
1. Fork 🔧
2. Create feature branch → `git checkout -b feat/awesome‑thing`
3. Commit → `git commit -m "feat: awesome thing"`
4. Open pull request (PR template included)

Please **_never_ commit `.env`** or confidential documents.

---

## License
Distributed under the MIT License. See `LICENSE` for details.

---

> *Built with ❤️ by the SwiftSign Team – v1.0 © 2025*


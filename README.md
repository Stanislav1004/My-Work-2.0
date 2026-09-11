# Developer Learning & Portfolio Hub (My-Work 2.0)

A multi-page educational web application designed for beginner developers, featuring language documentation guides, custom UI themes, and authorization flows.

## 📌 Project Overview

* **Main Hub (`home/`)**: Landing page covering Front-end development concepts, programming definitions, and career insights.
* **Interactive Documentation (`Progr.html/`, `Progr.css/`, `Progr.js/`)**: Dedicated pages for Python, JavaScript, Java, C++, C#, and C with dynamic time counters and interactive sidebars.
* **User Authentication (`Log/`)**: Login form with client-side JavaScript validation (`log.js`).
* **Containerized Deployment**: Ready to build and run anywhere via Docker and Nginx.

## 🚀 Quick Start with Docker

### 1. Build the Docker Image

Run the following command in the root directory:

```bash
docker build -t my-work-2 .
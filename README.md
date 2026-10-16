# ITUE301 - Advanced Web Development Frameworks
## Practical 1: Introduction to React and Component Architecture

### Student Details
- **Student ID:** 24CS051
- **Student Name:** Aayush Malhotra
- **Subject Code & Name:** CSE304 / ITUE301: Advanced Web Development Frameworks
- **Department:** Department of Computer Science and Engineering
- **Institution:** Chandubhai S Patel Institute of Technology (CSPIT), CHARUSAT
- **Academic Year:** 2025-26

---

### Aim
To set up a modern React development environment using Vite and build a modular student portfolio single-page application using independently structured, reusable components and props for data flow.

---

### Component Hierarchy
```text
App.jsx
 ├── NavBar.jsx     (Active section navigation)
 ├── Header.jsx     (Site title, student name, dynamic theme color prop)
 ├── About.jsx      (Student bio & academic details)
 ├── Skills.jsx     (Dynamically rendered technical skill list via props)
 ├── Projects.jsx   (Featured coursework projects connected across practicals)
 └── Footer.jsx     (Academic details, student ID, and contact links)
```

---

### Features & Implementation Details
1. **Vite + React Setup**: Fast, modern frontend tooling replacing legacy bundling.
2. **Modular Reusable Components**: Each UI unit is decoupled with single responsibility.
3. **Props Communication**:
   - `name` and `themeColor` passed from `App.jsx` to `Header.jsx`.
   - `skillList` array passed to `Skills.jsx` and rendered via `.map()`.
   - `projectList` array passed to `Projects.jsx` setting the foundation for the 13 connected practicals.
   - Academic metadata passed to `About.jsx` and `Footer.jsx`.
4. **Interactive Theme Customizer**: Demonstrates live UI re-rendering upon prop changes.

---

### Getting Started

#### Prerequisites
- Node.js (v18+)
- npm (v9+)

#### Installation & Execution
```bash
# 1. Clone repository
git clone https://github.com/24CS051Aayush/ITUE301-AWDF_Practical1.git
cd ITUE301-AWDF_Practical1

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

App runs by default at `http://localhost:5173`.

Backend template for use 
## How to Start using:
#### 1. Clone the repo:
`git clone https://github.com/avneetsingh/NEXT-Frontend-Template.git`
#### 2. Open the cloned repo:
`cd NEXT-Frontend-Template`
#### 3. Install the dependencies:
`npm install`
#### 4. Change the color theme in globals.css file (for both light and dark mode)
```
--primary-color: #7379FF;
--secondary-color: #242424;
--bg-color: #E9EBF6;
--text-color-light: #666666;
--text-color-dark: #242424;
--color-1: #FFFFFF;
--color-2: #E9EBF6;
--text-color-dark: #242424;
--lowContrastColor: #e7e7e7;
```

#### 5. Change backend url in constants.ts file
```
const BACKEND_URI="http://localhost:4000/api/v1"
```

#### 6. Run the server:
`npm run dev`   

## Presetted utilities:
1. NEXT-UI: Awesome UI components
2. Tailwind CSS: CSS framework
3. Redux Toolkit: State management
4. Aceternity UI: Awesome UI components
5. ShadCN: Adaptable UI components
6. Themes: Basic theme structure for applications
7. Next Themes: For dark and light mode
8. Vercel Analytics: For analytics if vercel deployed
9. Cookie handling: For storing cookies
10. React-Toastify: For toast notifications

## Directory Structure: 
```
Frontend
├── .next
├── .vscode
├── app
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   └── ui
├── Helpers
│   ├── apiCalls.ts
│   ├── cookieHandling.ts
│   └── toastError.ts
├── lib
│   └── utils.ts
├── my_components
├── public
│   ├── Fonts
│   ├── icons
│   ├── images
│   └── Videos
├── RTK
│   ├── features
│   ├── provider.tsx
│   └── store.ts
├── utils
│   ├── axios.ts
│   ├── cn.ts
├── .gitignore
├── .prettierrc
├── components.json
├── CONSTANTS.ts
├── Interfaces.ts
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```


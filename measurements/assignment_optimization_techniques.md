# Optimization of Font Loading for a Next.js Website

## Overview

In this documentation, I outline the steps taken to optimize the font loading for a Next.js website, including:
1. Removing the default `@next/font` Inter import.
2. Subsetting my manually provided fonts.
3. Conducting a Lighthouse performance test.

---

## Steps to Optimize Font Loading

### 1. Removal of Default `@next/font` Inter Import
- **Before:** The Next.js website imported the Inter font using the built-in `@next/font` package. While convenient, this approach limited customization and resulted in additional JavaScript as Woff2 payload as this font was never used.
- **Action Taken:** Removed the Inter font import and its related usage in the application.

```js
// Removed the following lines from layout.js
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
```

### 2. Using a subset of manually provided fonts
- Installed required tools for font subsetting:
  - `glyphhanger` (via npm): `npm install -g glyphhanger`
    - Python dependencies for subsetting:
        - `fonttools`: `pip install fonttools`
        - Brotli Python extension: `pip install brotli`
- **Fonts Used:**
    - Manrope (Regular, SemiBold, ExtraBold)
    - Josefin Sans (Regular)
- **Steps:**
  1. Converted the fonts to the optimized `.woff2` format using `glyphhanger` and required dependencies:
       ```bash
       glyphhanger http://localhost:3000 --subset="./public/fonts/*.ttf" --formats=woff2
       ```
  2. Added the `.woff2` files to the public directory of the Next.js project.
  3. Updated the global CSS file to load the fonts using `@font-face`:

```css
/* Content of the file fonts.scss */
@font-face {
    font-family: JosefinSans;
    src: url(/fonts/JosefinSans-Regular-subset.woff2) format('woff2');
    font-weight: 400;
}

@font-face {
    font-family: Manrope;
    src: url(/fonts/Manrope-Regular-subset.woff2) format('woff2');
    font-weight: 400;
}

@font-face {
    font-family: Manrope;
    src: url(/fonts/Manrope-Medium-subset.woff2) format('woff2');
    font-weight: 500;
}

@font-face {
    font-family: Manrope;
    src: url(/fonts/Manrope-SemiBold-subset.woff2) format('woff2');
    font-weight: 600;
}

@font-face {
    font-family: Manrope;
    src: url(/fonts/Manrope-ExtraBold-subset.woff2) format('woff2');
    font-weight: 800;
}
```

### 3. Lighthouse Performance Analysis

Performed a Lighthouse audit before and after optimizing the font loading to measure performance improvements.

#### **Before Optimization**
- **Performance Score:** 80
- **Largest Contentful Paint (LCP):** 3.7 s
- **Speed Index:** 0.9 s
- **Blocking Resources:** Multiple render-blocking resources detected: 230ms potential savings.
- **Report Source:** [Link to the Lighthouse Test](./media/lightroom-test-before.pdf)

#### **After Optimization**
- **Performance Score:** 81
- **Largest Contentful Paint (LCP):** 3.6 s
- **Speed Index:** 0.8 s
- **Blocking Resources:** No render-blocking font resources detected. Only 110 ms potential savings left.
- **Report Source:** [Link to the Lighthouse Test](./media/lightroom-test-after.pdf)

---

## Results
The optimization resulted in a slight improvement in the Lighthouse performance score (from 80 to 81). Key metrics such as LCP and Speed Index also improved marginally. These changes reduced render-blocking resources, enhancing the user experience.

| Metric                        | Before Optimization | After Optimization |
|-------------------------------|---------------------|--------------------|
| Performance Score             | 80                  | 81                 |
| Largest Contentful Paint (LCP)| 3.7 s               | 3.6 s              |
| Speed Index                   | 0.9 s               | 0.8 s              |

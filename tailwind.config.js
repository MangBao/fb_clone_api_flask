/** @type {import('tailwindcss').Config} */ 

const max = 101;
let p = 0;

// Space  padding, margin, width, height, maxHeight, gap, inset, space, and translate 
Space = {}
for (let i = 0; i < max; i++) {
  Space[i] = `${i*2}px`;
  p = i + 'p'
  Space[p] = `${i}%`;
}

// borderRadius
borderRadius = {
  '50': '50px',
}

// minHeight, minWidth
min = {
  40: '40px',
}

// Colors
Colors = {
  'cmt': '#f0f2f5',
  'secondary': '#65676B',
  'white-paper': '#ffffff',
}

// borderWidth
BorderWidth  = {
  DEFAULT: '1px',
  0: '0',
  1: '1px',
  2: '2px',
  4: '4px',
  8: '8px'
}

// flexBasis
flexBasis = {
  auto: 'auto'
}

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: Space,
      borderRadius: borderRadius,
      minHeight: min,
      minWidth: min,
      colors: Colors,
      flexBasis: flexBasis,
    },
    borderWidth: BorderWidth
  },
  plugins: [],
}
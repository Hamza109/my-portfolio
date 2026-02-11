import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '1rem',
  		screens: {
  			'2xl': '1180px'
  		}
  	},
  	extend: {
  		colors: {
  			bg: '#f8f7f4',
  			surface: '#ffffff',
  			panel: '#f3f7fe',
  			line: '#d7dfec',
  			text: '#132238',
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			brand: '#0b4f6c',
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			deep: '#10243e',
  			soft: '#e8eff9',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			display: [
  				'Iowan Old Style',
  				'Palatino Linotype',
  				'Book Antiqua',
  				'serif'
  			],
  			body: [
  				'Avenir Next',
  				'Manrope',
  				'Segoe UI',
  				'sans-serif'
  			]
  		},
  		boxShadow: {
  			card: '0 10px 28px rgba(19, 34, 56, 0.08)',
  			lift: '0 18px 38px rgba(19, 34, 56, 0.12)'
  		},
  		keyframes: {
  			floatSlow: {
  				'0%, 100%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			}
  		},
  		animation: {
  			floatSlow: 'floatSlow 11s ease-in-out infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;

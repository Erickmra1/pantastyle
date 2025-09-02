module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep Navy
        primary: {
          DEFAULT: "#1B365D", // Deep navy for trust and expertise
          50: "#F0F4F8", // Very light navy tint
          100: "#D6E4F0", // Light navy tint
          200: "#B8CCE0", // Medium light navy
          300: "#9BB4D0", // Medium navy
          400: "#7E9CC0", // Medium dark navy
          500: "#4A6FA5", // Standard navy
          600: "#2E4F7A", // Dark navy
          700: "#1B365D", // Primary deep navy
          800: "#152B4A", // Darker navy
          900: "#0F1F37", // Darkest navy
        },
        
        // Secondary Colors - Clean Canvas
        secondary: {
          DEFAULT: "#F8F9FA", // Clean canvas
          50: "#FFFFFF", // Pure white
          100: "#F8F9FA", // Clean canvas
          200: "#E9ECEF", // Light gray
          300: "#DEE2E6", // Medium light gray
          400: "#CED4DA", // Medium gray
          500: "#ADB5BD", // Standard gray
          600: "#6C757D", // Dark gray
          700: "#495057", // Darker gray
          800: "#343A40", // Very dark gray
          900: "#212529", // Darkest gray
        },

        // Accent Colors - Warm Gold
        accent: {
          DEFAULT: "#D4A574", // Warm gold for premium moments
          50: "#FDF8F3", // Very light gold tint
          100: "#F9EFDF", // Light gold tint
          200: "#F3DFBF", // Medium light gold
          300: "#EDCF9F", // Medium gold
          400: "#E7BF7F", // Medium dark gold
          500: "#D4A574", // Primary warm gold
          600: "#C1945F", // Dark gold
          700: "#A67D4A", // Darker gold
          800: "#8B6635", // Very dark gold
          900: "#704F20", // Darkest gold
        },

        // Background Colors
        background: "#FFFFFF", // Pure clarity for product focus
        surface: "#F1F3F4", // Subtle depth for content organization

        // Text Colors
        text: {
          primary: "#2D3748", // Strong readability - gray-800
          secondary: "#718096", // Clear hierarchy - gray-500
        },

        // Status Colors
        success: {
          DEFAULT: "#38A169", // Positive fit confirmations - green-600
          50: "#F0FFF4", // Very light green
          100: "#C6F6D5", // Light green
          500: "#48BB78", // Medium green
          600: "#38A169", // Primary success green
          700: "#2F855A", // Dark green
        },

        warning: {
          DEFAULT: "#D69E2E", // Size alerts - yellow-600
          50: "#FFFBEB", // Very light yellow
          100: "#FEF5E7", // Light yellow
          500: "#ED8936", // Medium yellow
          600: "#D69E2E", // Primary warning yellow
          700: "#B7791F", // Dark yellow
        },

        error: {
          DEFAULT: "#E53E3E", // Helpful guidance - red-600
          50: "#FED7D7", // Very light red
          100: "#FEB2B2", // Light red
          500: "#F56565", // Medium red
          600: "#E53E3E", // Primary error red
          700: "#C53030", // Dark red
        },

        // Border Colors
        border: {
          light: "#E2E8F0", // Light gray borders - gray-300
          medium: "#CBD5E0", // Medium gray borders - gray-400
        },
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
        playfair: ['Playfair Display', 'serif'],
      },

      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },

      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },

      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },

      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'soft': '0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'medium': '0 8px 25px -5px rgba(0, 0, 0, 0.1)',
      },

      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-in-out',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },

      transitionDuration: {
        '300': '300ms',
      },

      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
    },
  },
  plugins: [],
}
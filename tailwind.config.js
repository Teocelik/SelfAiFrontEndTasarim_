module.exports = {
    content: [
        "./Views/**/*.cshtml",
        "./Pages/**/*.cshtml",
        "./wwwroot/**/*.html"
    ],
    theme: {
        extend: {
            colors: {
                // Primary Colors
                primary: {
                    DEFAULT: "#6366f1", // indigo-500
                    50: "#eef2ff", // indigo-50
                    100: "#e0e7ff", // indigo-100
                    200: "#c7d2fe", // indigo-200
                    300: "#a5b4fc", // indigo-300
                    400: "#818cf8", // indigo-400
                    500: "#6366f1", // indigo-500
                    600: "#4f46e5", // indigo-600
                    700: "#4338ca", // indigo-700
                    800: "#3730a3", // indigo-800
                    900: "#312e81", // indigo-900
                },
                // Secondary Colors
                secondary: {
                    DEFAULT: "#8b5cf6", // violet-500
                    50: "#f5f3ff", // violet-50
                    100: "#ede9fe", // violet-100
                    200: "#ddd6fe", // violet-200
                    300: "#c4b5fd", // violet-300
                    400: "#a78bfa", // violet-400
                    500: "#8b5cf6", // violet-500
                    600: "#7c3aed", // violet-600
                    700: "#6d28d9", // violet-700
                    800: "#5b21b6", // violet-800
                    900: "#4c1d95", // violet-900
                },
                // Accent Colors
                accent: {
                    DEFAULT: "#06b6d4", // cyan-500
                    50: "#ecfeff", // cyan-50
                    100: "#cffafe", // cyan-100
                    200: "#a5f3fc", // cyan-200
                    300: "#67e8f9", // cyan-300
                    400: "#22d3ee", // cyan-400
                    500: "#06b6d4", // cyan-500
                    600: "#0891b2", // cyan-600
                    700: "#0e7490", // cyan-700
                    800: "#155e75", // cyan-800
                    900: "#164e63", // cyan-900
                },
                // Background Colors
                background: "#1a1a1a", // neutral-900
                surface: {
                    DEFAULT: "#2a2a2a", // neutral-800
                    elevated: "#333333", // neutral-700
                },
                // Text Colors
                text: {
                    primary: "#f8fafc", // slate-50
                    secondary: "#94a3b8", // slate-400
                    muted: "#64748b", // slate-500
                },
                // Status Colors
                success: {
                    DEFAULT: "#10b981", // emerald-500
                    50: "#ecfdf5", // emerald-50
                    100: "#d1fae5", // emerald-100
                    500: "#10b981", // emerald-500
                    600: "#059669", // emerald-600
                },
                warning: {
                    DEFAULT: "#f59e0b", // amber-500
                    50: "#fffbeb", // amber-50
                    100: "#fef3c7", // amber-100
                    500: "#f59e0b", // amber-500
                    600: "#d97706", // amber-600
                },
                error: {
                    DEFAULT: "#ef4444", // red-500
                    50: "#fef2f2", // red-50
                    100: "#fee2e2", // red-100
                    500: "#ef4444", // red-500
                    600: "#dc2626", // red-600
                },
                // Border Colors
                border: {
                    DEFAULT: "rgba(255, 255, 255, 0.1)", // white-10
                    focus: "rgba(99, 102, 241, 0.5)", // primary-50
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
                inter: ['Inter', 'sans-serif'],
                jetbrains: ['JetBrains Mono', 'monospace'],
            },
            fontSize: {
                'xs': ['0.75rem', { lineHeight: '1rem' }], // 12px
                'sm': ['0.875rem', { lineHeight: '1.25rem' }], // 14px
                'base': ['1rem', { lineHeight: '1.5rem' }], // 16px
                'lg': ['1.125rem', { lineHeight: '1.75rem' }], // 18px
                'xl': ['1.25rem', { lineHeight: '1.75rem' }], // 20px
                '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
            },
            spacing: {
                'xs': '0.25rem', // 4px
                'sm': '0.5rem', // 8px
                'md': '0.75rem', // 12px
                'lg': '1rem', // 16px
                'xl': '1.5rem', // 24px
                '2xl': '2rem', // 32px
                '3xl': '3rem', // 48px
                '4xl': '4rem', // 64px
            },
            boxShadow: {
                'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                'md': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
                'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
                'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
                'floating': '0 4px 12px rgba(0, 0, 0, 0.3)',
                'glow-primary': '0 0 20px rgba(99, 102, 241, 0.3)',
                'glow-accent': '0 0 20px rgba(6, 182, 212, 0.3)',
            },
            borderRadius: {
                'sm': '0.25rem', // 4px
                'md': '0.375rem', // 6px
                'lg': '0.5rem', // 8px
                'xl': '0.75rem', // 12px
                '2xl': '1rem', // 16px
            },
            transitionDuration: {
                '150': '150ms',
                '200': '200ms',
                '300': '300ms',
            },
            transitionTimingFunction: {
                'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-subtle': 'bounce 1s ease-in-out 2',
                'fade-in': 'fadeIn 0.2s ease-out',
                'slide-up': 'slideUp 0.3s ease-out',
                'slide-down': 'slideDown 0.3s ease-out',
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
            backdropBlur: {
                'xs': '2px',
                'sm': '4px',
                'md': '8px',
                'lg': '12px',
            },
            strokeWidth: {
                '1.5': '1.5px',
                '2.5': '2.5px',
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '.text-shadow-sm': {
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
                },
                '.text-shadow-md': {
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
                },
                '.backdrop-blur-subtle': {
                    backdropFilter: 'blur(4px)',
                },
                '.glass-effect': {
                    background: 'rgba(42, 42, 42, 0.8)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                },
            }
            addUtilities(newUtilities)
        }
    ],
}


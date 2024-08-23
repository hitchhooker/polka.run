import { defineConfig, presetUno, presetIcons, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
  ],
  theme: {
    colors: {
      primary: 'hsl(222.2 47.4% 11.2%)',
      secondary: 'hsl(210 40% 96.1%)',
      accent: 'hsl(210 40% 96.1%)',
      neutral: 'hsl(0 0% 100%)',
      base: 'hsl(0 0% 100%)',
      info: 'hsl(210 40% 98%)',
      success: 'hsl(142.1 76.2% 36.3%)',
      warning: 'hsl(47.9 95.8% 53.1%)',
      error: 'hsl(0 84.2% 60.2%)',
    },
  },
  shortcuts: {
    'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-primary': 'text-white bg-primary hover:bg-primary-700',
    'input': 'rounded border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary',
  },
})

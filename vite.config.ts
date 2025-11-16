// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// import checker from 'vite-plugin-checker';
// // https://vite.dev/config/
// export default defineConfig({
//    base: '/', 
//   plugins: [react(), tailwindcss(),
//     checker({ typescript: true })
//   ],
// })




import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import checker from 'vite-plugin-checker'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    checker({ typescript: true })
  ],
})

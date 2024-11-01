module.exports = {
  content: [
    './*.html',          // Це для файлів HTML в кореневій директорії
    './**/*.html',       // Це для файлів HTML у всіх підкаталогах
    './src/**/*.{js,jsx,ts,tsx}', // Це для JS/JSX файлів у src
  ],
  theme: {
    extend: {
      fontSize: {
        '128': '128px', 
      },
    },
  },
  plugins: [],
};

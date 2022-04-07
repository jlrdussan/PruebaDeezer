module.exports = {
  content: ['./*.html', './src/**/*.{vue,js,css}'],
  theme: {
    screens: {
      sm: '340px',
      // => @media (min-width: 660px) { ... }
      md: '660px',
      // => @media (min-width: 768px) { ... }
      lg: '960px',
      // => @media (min-width: 1024px) { ... }
      xl: '1260px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        // primary: '#1c3c84',
        // secondary: '#d0d7dd',
        
      },

      animation: {
        success: 'success 4s',
        search: 'success 3s infinite',
        circle: 'success 2s 3',
        fail: 'fail 2s ',
        ping: 'ping 2s cubic-bezier(0.9, 0.9, 0.8, 1) infinite',
        bind: 'bind 1.5s ',
        dropdown: 'dropdown 0.3s',
        barraBusqueda: 'barraBusqueda 0.4s cubic-bezier(0.9, 0.9, 0.8, 1)',
        failBusqueda: 'failBusqueda 0.4s',
        filtroOut: 'filtroOut 0.4s ',
        filtroIn: 'filtroIn 1s',
        expandRight: 'expandRight 2s infinite',
        heart: 'heart 1.5s infinite cubic-bezier(0.215, 0.61, 0.355, 1)',
        heartInp: 'heart 1s 1 cubic-bezier(0.215, 0.61, 0.355, 1)',
        spinner: 'spinner 1s linear',
        scroll: 'scroll 1s',
        scrollOut: 'scrollOut 1s'
      }
    }
  },
  plugins: []
};

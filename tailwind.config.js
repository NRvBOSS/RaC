module.exports = {
    theme: {
      extend: {
        keyframes: {
          typing: {
            '0%': { width: '0ch' }, // Mətnin genişliyi 0 simvol
            '100%': { width: '22ch' } // Mətnin simvol sayı qədər açılır
          },
          blink: {
            '50%': { 'border-color': 'transparent' }
          }
        },
        animation: {
          typing: 'typing 3s steps(22, end) forwards',
          blink: 'blink 0.7s infinite'
        }
      }
    }
  }
  
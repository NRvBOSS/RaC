/** @type {import('tailwindcss').Config} */
export const theme = {
    extend: {
        keyframes: {
            typing: {
                "0%": {
                    width: "0%",
                    opacity: "0"
                },
                "10%": {
                    opacity: "1"
                },
                "100%": {
                    width: "100%"
                }
            },
            blink: {
                "50%": {
                    borderColor: "transparent"
                },
                "100%": {
                    borderColor: "white"
                }
            }
        },
        animation: {
            typing: "typing 2s steps(20, end) infinite alternate",
            blink: "blink .7s infinite"
        }
    },
};
export const plugins = [];

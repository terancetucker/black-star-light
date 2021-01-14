import Vue from 'vue'
import { generateName } from '@/utils/name-generator'
export default Vue.extend({
    name: 'PalettePicker',
    data: () => ({
        palettes: [
            {
                name: 'Velvet',
                colors: ['EE4540', 'C72C41', '801336', '510A32', '2D142C']
            },
            {
                name: 'Sunset',
                colors: ['8FB9A8', 'FEFAD4', 'FCD0BA', 'F1828D', '765D69']
            }
        ],
        snackbar: false,
        snackbarColor: 'primary',
        timeout: 2000
    }),
    methods: {
        toHex(r, g, b) {
            return [r, g, b]
                .reduce((acc, curr) => {
                    let hex = Number(curr).toString(16)
                    acc.push(hex.length < 2 ? (hex = '0' + hex) : hex)
                    return acc
                }, [])
                .join('')
        },
        async getPalette() {
            const { result } = await fetch('api/palette-picker')
                .then(result => result.json())
                .catch(console.log)
            const colors = result.map(colors => {
                const [r, g, b] = colors
                return this.toHex(r, g, b)
            })
            this.palettes.unshift({
                name: generateName(),
                colors
            })
        },
        savePalette(color) {
            navigator.clipboard.writeText(`#${color}`)
            this.snackbarColor = `#${color}`
            this.snackbar = true
        }
    },
    head() {
        return {
            title: 'Color Picker and Theme Viewer',
            meta: [
                {
                    hid: 'color picker and theme viewer',
                    name: 'Color Picker and Theme Viewer',
                    content:
                        'A color picker and theme viewer to get an ready-to-use visualization on some nice colors to use into your UI'
                },
                {
                    'http-equiv': 'Content-Security-Policy',
                    content: 'upgrade-insecure-requests'
                }
            ]
        }
    }
})
import { extendTheme } from '@chakra-ui/react'
import components from './components'

export default extendTheme({
	colors: {
		brand: {
			lighter: '#E1009A',
			light: '#FF44CB',
			default: '#FF00B8',
			dark: '#E1009A',
		},
		gray: {
			50: "#F7F7F7",
			100: "#EDEDED",
			200: "#E2E2E2",
			300: "#CBCBCB",
			400: "#A0A0A0",
			500: "#717171",
			600: "#4A4A4A",
			700: "#2D2D2D",
			800: "#1A1A1A",
			900: "#171717",
		},
	},
	fonts: {
		heading: `DMSans, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
		body: `DMSans, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
		inter: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
		mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
	},
	styles: {
		global: {
			html: {
				background: 'black',
			},
			'@keyframes fade-in-and-out': {
				'0%': {
					opacity: 0,
				},
				'10%': {
					opacity: 10,
				},
				'20%': {
					opacity: 20,
				},
				'50%': {
					opacity: 100,
				},
				'80%': {
					opacity: 20,
				},
				'90%': {
					opacity: 10,
				},
				'100%': {
					opacity: 0,
				},
			},
			'@keyframes glacier': {
				'0%': {
					transform: `translateX(0)`,
				},
				// '50%': {
				// 	transform: `translateX(-50%)`,
				// },
				'100%': {
					transform: `translateX(-50%)`,
				},
			},
			'::selection': {
				background: 'brand.light', /* WebKit/Blink Browsers */
			},
			'::-moz-selection': {
				background: 'brand.light', /* Gecko Browsers */
			}
		},
	},
	components,
})

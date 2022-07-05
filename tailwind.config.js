const plugin = require('tailwindcss/plugin');

function half(value) {
	return value.replace(/\d+(.\d+)?/, number => number / 2);
}

module.exports = {
	content: ['index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		container: {
			center: true
		},
		extend: {}
	},
	plugins: [
		plugin(({ addUtilities, e, theme, variants }) => {
			Object.entries(theme('gap')).forEach(([key, value]) =>
				addUtilities(
					{
						[`.flex-gap-${e(key)}`]: {
							marginTop: `-${half(value)}`,
							marginLeft: `-${half(value)}`,
							'& > *': {
								marginTop: half(value),
								marginLeft: half(value)
							}
						}
					},
					variants('gap')
				)
			);
		})
	]
};

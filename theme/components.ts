export default {
	Button: {
		variants: {
			brand: {
				bg: 'brand.default',
				color: 'white',
				borderWidth: '1px',
				borderColor: 'brand.default',
				_hover: {
					bg: 'white',
					color: 'brand.default',
				},
			},
			secondary: {
				bg: 'secondary.default',
				color: 'white',
				borderWidth: '1px',
				borderColor: 'secondary.default',
				_hover: {
					bg: 'white',
					color: 'secondary.default',
				},
			},
		},
	},
	Input: {
		variants: {
			outline: {
				field: {
					_focus: {
						borderColor: 'secondary.default',
						boxShadow: `none`,
					},
					_hover: {
						borderColor: 'secondary.default',
					},
				},
			},
		},
	},
	Textarea: {
		variants: {
			outline: {
				_focus: {
					borderColor: 'secondary.default',
					boxShadow: `none`,
				},
				_hover: {
					borderColor: 'secondary.default',
				},
			},
		},
	},
	Modal: {
		baseStyle: {
			footer: {
				mt: 4,
				borderTopWidth: '1px',
				borderTopColor: 'gray.100'
			},
		},
	},
	Tabs: {
		baseStyle: {
			tabpanel: {

			},
		},
		variants: {
			vertical: {
				tab: {
					textAlign: 'left',
					paddingX: 0,
					paddingTop: 0,
					paddingBottom: 6,
					fontSize: 'lg',
					fontWeight: 'bold',
					color: 'gray.300',
					_selected: {
						color: 'black',
					},
					_hover: {
						color: 'black',
					},
					_focus: {
						border: 'none',
						boxShadow: 'none',
						color: 'black',
					},
				},
				tablist: {
					alignItems: 'flex-start',
				},
				tabpanel: {
					padding: 0,
				},
				tabpanels: {
					padding: 0,
				},
			},
		},
	},
}

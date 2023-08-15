import MainButton from "./MainButton";

export default {
	title: 'Button/MainButton',
	component: MainButton,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

export const Small = {
	args: {
		children: 'Button',
		size: "small"
	},
};

export const Middle = {
	args: {
		children: 'Button',
		size: "middle"
	},
};

// export const Warning = {
// 	args: {
// 		primary: true,
// 		label: 'Delete now',
// 		backgroundColor: 'red',
// 	}
// };
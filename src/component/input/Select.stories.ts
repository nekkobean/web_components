import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import  { Select }  from './Select'; 
const meta = {
    component: Select,
    args: {
        label: 'Country',
        error: false,
        helperText: 'Please select one of the options.',
        options: [
            { key: 0, name: '', value: 'Select a Country'},
            { key: 1, name: 'option1', value: 'Germany' },
            { key: 2, name: 'option2', value: 'China' },
            { key: 3, name: 'option3', value: 'Iran' }
        ]
    }
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};
export const Required: Story = {
    args: {
        required: true, 
        helperText: "please select one of the options"
    },
};  
export const Disabled: Story = {
    args: {
        disabled: true
    },
};
export const WithSelectedOption: Story = {
    args: {
        disabled: true,
        value: 'option3'
    },
};

import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import  { Select }  from './Select'; 
const meta = {
    title: 'Components/Select',
    component: Select,
    args: {
        label: 'Country',
        error: false,
        helperText: 'Please select one of the options.',
        options: [
            {value: '', label: 'Select a Country'},
            { value: 'option1', label: 'Germany' },
            { value: 'option2', label: 'China' },
            { value: 'option3', label: 'Iran' }
        ]
    }
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};
export const Required: Story = {
    args: {
        required: true, 
        helperText: "\n"
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

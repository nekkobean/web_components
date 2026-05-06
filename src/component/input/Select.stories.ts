import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import  { Select }  from './Select'; 
const meta = {
    title: 'Components/Select',
    component: Select,
    args: {
        label: 'Choose an option',
        options: [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' }
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

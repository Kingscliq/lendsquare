import { Button, DropdownMenu } from '@radix-ui/themes';
import React from 'react';

interface DropDownProps {
  placeholder: string;
  items: Array<string>;
}
const Dropdown: React.FC<DropDownProps> = ({ placeholder, items }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="ghost">
          {placeholder}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.39229 12.0516C9.72823 12.425 10.2751 12.4219 10.6079 12.0516L13.4829 8.857C13.8188 8.48434 13.6852 8.182 13.1845 8.182H6.81567C6.31489 8.182 6.18363 8.48746 6.51723 8.857L9.39229 12.0516Z"
              fill="#213F7D"
            />
          </svg>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        {items.map(item => (
          <DropdownMenu.Item>{item}</DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Dropdown;

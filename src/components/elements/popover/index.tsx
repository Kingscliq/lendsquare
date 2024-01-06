import { Button, DropdownMenu } from '@radix-ui/themes';
import React, { ReactNode } from 'react';

interface EllipsisProps {
  children: ReactNode;
}

const Ellipsis: React.FC<EllipsisProps> = ({ children }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clipPath="url(#clip0_5530_2401)">
              <path
                d="M10.0002 6.1111C10.9224 6.1111 11.6668 5.36666 11.6668 4.44444C11.6668 3.52222 10.9224 2.77777 10.0002 2.77777C9.07794 2.77777 8.3335 3.52222 8.3335 4.44444C8.3335 5.36666 9.07794 6.1111 10.0002 6.1111ZM10.0002 8.33333C9.07794 8.33333 8.3335 9.07777 8.3335 9.99999C8.3335 10.9222 9.07794 11.6667 10.0002 11.6667C10.9224 11.6667 11.6668 10.9222 11.6668 9.99999C11.6668 9.07777 10.9224 8.33333 10.0002 8.33333ZM10.0002 13.8889C9.07794 13.8889 8.3335 14.6333 8.3335 15.5555C8.3335 16.4778 9.07794 17.2222 10.0002 17.2222C10.9224 17.2222 11.6668 16.4778 11.6668 15.5555C11.6668 14.6333 10.9224 13.8889 10.0002 13.8889Z"
                fill="#545F7D"
              />
            </g>
            <defs>
              <clipPath id="clip0_5530_2401">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>{children}</DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Ellipsis;

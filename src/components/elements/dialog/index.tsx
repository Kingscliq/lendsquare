import { AlertDialog, Flex } from '@radix-ui/themes';
import React, { ReactNode } from 'react';
import Button, { OutlineButton } from '../button';

interface DialogProps {
  trigger: ReactNode;
  title: string;
  description: string;
  actionText: string;
  submitFn: () => void;
}
const Dialog: React.FC<DialogProps> = ({
  trigger,
  title,
  description,
  actionText,
  submitFn,
}) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>{trigger}</AlertDialog.Trigger>
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>{title}</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure? {description}
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            {/* <Button variant="soft" color="gray">
              Cancel
            </Button> */}
            <OutlineButton variant="default" />
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button label={actionText} />
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default Dialog;

import { AlertDialog } from '@radix-ui/themes';
import React, { ReactNode } from 'react';
import styles from './dialogue.module.scss';
import OutlineButton from '../button/outline-button';
import { Button } from '../button';

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
        <AlertDialog.Title>
          <h2 className={styles.alert__title}>{title}</h2>
        </AlertDialog.Title>
        <AlertDialog.Description size="2">
          <p className={styles.alert__description}>
            Are you sure? {description}
          </p>
        </AlertDialog.Description>
        <section className={styles.action__container}>
          <div></div>
          <div className={styles.action__btn}>
            <AlertDialog.Cancel>
              <OutlineButton variant="default" label="Cancel" />
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button
                label={actionText}
                className={
                  title.toLowerCase().split(' ').includes('blacklist')
                    ? styles.btn__danger
                    : ''
                }
                onClick={submitFn}
              />
            </AlertDialog.Action>
          </div>
        </section>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default Dialog;

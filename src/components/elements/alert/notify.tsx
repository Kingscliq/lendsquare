'use client';

import { ToastContent, ToastOptions, toast } from 'react-toastify';

import { errorIcon, successIcon } from '@assets/icons';

// Notifications props
interface NotifProps extends ToastOptions<object> {
  content?: ToastContent<unknown>;
  message?: string;
  subtitle?: string;
}

// Success notifications trigger
const success = ({ content, message, subtitle, ...options }: NotifProps) =>
  toast.success(message, {
    icon: (
      <img
        src={successIcon}
        alt="Success"
        style={{ height: '28px', width: '28px' }}
      />
    ),
    ...options,
  });

// Error notifications trigger
const error = ({ content, message, subtitle, ...options }: NotifProps) =>
  toast.error(message, {
    icon: (
      <img
        src={errorIcon}
        alt="Error"
        style={{ height: '28px', width: '28px' }}
      />
    ),
    ...options,
  });

// Dismiss all notifications
const dismissAll = () => toast.dismiss();

export { success, error, dismissAll };

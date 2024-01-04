import React from 'react';

interface EmptyStateProps {
  label: string;
}
const EmptyState: React.FC<EmptyStateProps> = ({ label }) => {
  return (
    // <Card className="rounded-xl ">
    <section className="flex flex-col items-center justify-center h-80 relative ">
      <div className="text-tifi-gray-500 font-medium text-2xl text-center p-8 bg-neutral-black-500 w-full rounded-2xl">
        {label}
      </div>
    </section>
    // </Card>
  );
};

export default EmptyState;

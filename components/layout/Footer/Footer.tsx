import React, { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="py-4">
      <div className="container">
        <p className="text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} - Next js starter
        </p>
      </div>
    </footer>
  );
};

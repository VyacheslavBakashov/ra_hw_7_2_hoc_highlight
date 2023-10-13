import { FC, ReactNode } from 'react';

type PropsTypes = {
  children: ReactNode;
};

export const New: FC<PropsTypes> = ({ children }) => {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {children}
    </div>
  );
};

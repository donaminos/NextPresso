import type { ReactNode } from "react";

type Props = {
  title?: string;
  children: ReactNode;
};
export const Alert = ({ title, children }: Props) => {
  return (
    <div
      className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative"
      role="alert"
    >
      {title ? <strong className="font-bold">{title}</strong> : null}
      <br />
      <span className="block sm:inline">{children}</span>
    </div>
  );
};

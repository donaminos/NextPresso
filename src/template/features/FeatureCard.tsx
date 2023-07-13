import type { ReactElement } from "react";

type Props = {
  name: string;
  description: string;
};
export const FeatureCard = ({ name, description }: Props): ReactElement => {
  return (
    <div className="p-6 shadow-lg rounded-md transition duration-200 transform hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">{name}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

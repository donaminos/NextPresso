import { promises } from "fs";
import path from "path";

import { FeatureCard } from "./FeatureCard";

const file = path.join(process.cwd(), "./data/features.json");

export const FeaturesSection = async () => {
  const fileContent = await promises.readFile(file, "utf8");
  const features = JSON.parse(fileContent);

  return (
    <section className="py-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {features.map((feature) => {
          return <FeatureCard {...feature} key={feature.name} />;
        })}
      </div>
    </section>
  );
};

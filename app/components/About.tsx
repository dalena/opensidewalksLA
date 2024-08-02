import Link from "next/link";
import { Section } from "./Section";
import { InfoBox } from "./InfoBox";

export const About = () => {
  return (
    <Section sectionTitle="About" anchor="about">
      <p className="pb-6">
        Open Sidewalks is a small group of neighbors who started organizing
        around the issue of access to public streets after hearing about an
        elderly disabled man who had to walk 0.5mi around the gates in Country
        Club Park to catch his bus. We have collected over 250 signatures in
        support of opening the gates.
      </p>
      <h3 className="py-8 font-adwts text-4xl font-bold tracking-widest">
        Policy Recommendation
      </h3>
      <InfoBox>
        <ul className="list-disc p-4">
          <li className="py-2">
            Immediately restore ADA-compliant pedestrian access to all four
            gated streets by removing the part of the gate that blocks the
            sidewalk.
          </li>
          <li className="py-2">
            Begin a neighborhood dialogue to discuss the controversial issue of
            restoring car access in addition to pedestrian access.
          </li>
          <li className="py-2">
            Explore alternative traffic-calming measures that can improve
            pedestrian safety without symbolically excluding half of the
            neighborhood.
          </li>
        </ul>
      </InfoBox>
    </Section>
  );
};

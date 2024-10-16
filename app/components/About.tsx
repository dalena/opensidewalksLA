import Link from "next/link";
import { Section } from "./Section";
import { InfoBox } from "./InfoBox";

export const About = () => {
  return (
    <Section sectionTitle="About" anchor="about">
      <p className="pb-6">
        Open Sidewalks LA is a volunteer group of neighbors organizing around the issue of public access to public streets. We are working to remove four unpermitted gates on Van Ness, Wilton, Gramercy, and St Andrews streets along Pico Boulevard. These gates privilege wealthy homeowners and create problems for working-class tenants in the neighborhood. The gates also hinder accessibility for seniors and disabled people, limit emergency services and public health sanitation, and block students on their commute to local schools. We have collected nearly 2,000 signatures from residents both north and south of the enclosure in support of removing the gates.
      </p>
      <h3 className="py-8 text-3xl md:text-4xl">What We Want</h3>
      <InfoBox>
        Because the gates are unpermitted, privately-owned property in the public right of way which unfairly burden the elderly, children, and people with disabilities…
        <ul className="list-disc p-4">
          <li className="py-2">
            <strong>First, the gates must be removed</strong> to completely restore vehicle and pedestrian access across all four streets.
          </li>
          <li className="py-2">
            <strong>Then, the neighborhood can come together to decide what comes next</strong>, whether it&rsquo;s street improvements, community amenities, or something else. 
          </li>
          <li className="py-2">
          ALL residents, both north and south of Pico, must have an equal voice and opportunity for democratic participation in these decisions.
          </li>
        </ul>
      </InfoBox>
    </Section>
  );
};

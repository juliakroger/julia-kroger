import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SectionWrapper from "@/components/hoc/SectionWrapper";
import { experiences } from "@/constants/experiences";
import "react-vertical-timeline-component/style.min.css";
import SectionTitle from "./SectionTitle";

const Experience = () => {
  return (
    <>
      <SectionTitle
        title="What I have done so far"
        subTitle="Work Experience."
      />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              contentStyle={{
                background: "#1d1836",
                borderRadius: "2px",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #1d1836" }}
              date={experience.date}
              iconStyle={{ background: experience.iconBg }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[100%] h-[100%] object-contain rounded-full"
                  />
                </div>
              }
            >
              <div>
                <h3 className="text-white text-[24px] font-bold">
                  {experience.title}
                </h3>
                <p
                  className="text-secondary text-[16px] font-semibold"
                  style={{ margin: 0 }}
                >
                  {experience.company_name}
                </p>
              </div>

              <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-white-100 text-[14px] pl-1 tracking-wider"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

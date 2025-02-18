import { IconBookmark, IconClockHour3 } from "@tabler/icons-react";
import { Divider, Text } from "@mantine/core";
import { Link } from "react-router-dom";

interface JobCardProps {
  company: string;
  jobTitle: string;
  applicants: string;
  experience: string;
  jobType: string;
  location: string;
  description: string;
  package: string;
  postedDaysAgo: number;
}

const JobCard = ({
  company,
  jobTitle,
  applicants,
  experience,
  jobType,
  location,
  description,
  package: salary,
  postedDaysAgo,
}: JobCardProps) => {
  return (
    <Link
      to="/jobs"
      className="block bg-mine-shaft-900 p-6 rounded-xl hover:shadow-lg hover:shadow-clairt-400/20 transition-shadow duration-300"
    >
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <div className="p-2.5 bg-mine-shaft-800 rounded-lg shrink-0">
            <img
              className="h-8 w-8 object-contain"
              src={`/Icons/${company}.png`}
              alt={company}
            />
          </div>
          <div>
            <h3 className="font-semibold text-mine-shaft-100">{jobTitle}</h3>
            <p className="text-sm text-mine-shaft-300">
              {company} &#x2022; {applicants}
            </p>
          </div>
        </div>
        <button
          className="text-mine-shaft-300 hover:text-clairt-400 transition-colors"
          aria-label="Bookmark job"
        >
          <IconBookmark stroke={1.5} />
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {[experience, jobType, location].map((tag, index) => (
          <span
            key={index}
            className="py-1 px-3 bg-mine-shaft-800 text-clairt-400 rounded-lg text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      <Text
        className="text-sm text-mine-shaft-300 leading-relaxed mt-4"
        lineClamp={2}
      >
        {description}
      </Text>

      <Divider size="xs" color="mine-shaft.7" className="my-4" />

      <div className="flex justify-between items-center">
        <div className="font-semibold text-mine-shaft-200">
          ₹{salary} LPA
        </div>
        <div className="flex items-center gap-1.5 text-xs text-mine-shaft-400">
          <IconClockHour3 className="h-4 w-4" stroke={1.5} />
          {postedDaysAgo} Days ago
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
import {
  IconBookmark,
  IconBookmarkFilled,
  IconCalendarMonth,
  IconClockHour3,
} from "@tabler/icons-react";
import { Button, Divider, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const Card = (props: any) => {
  return (
    <Link
      to="/jobs"
      className="bg-mine-shaft-900 p-4 w-full sm:w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_] !shadow-clairt-400"
    >
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img className="h-7" src={`/Icons/${props.company}.png`} alt="" />
          </div>
          <div>
            <div className="font-semibold">{props.jobTitle}</div>
            <div className="text-sm text-mine-shaft-300">
              {props.company} &#x2022; {props.applicants}
            </div>
          </div>
        </div>
        {props.saved ? (
          <IconBookmarkFilled className="text-clairt-400 hover:cursor-pointer" />
        ) : (
          <IconBookmark className="text-mine-shaft-300 hover:cursor-pointer" />
        )}
      </div>
      <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-clairt-400 [&>div]:rounded-lg text-xs">
        <div>{props.experience}</div>
        <div>{props.jobType}</div>
        <div>{props.location}</div>
      </div>
      <Text
        className="!text-xs !text-mine-shaft-300 text-justify"
        lineClamp={2}
      >
        {props.description}
      </Text>
      <Divider size="xs" color="mine-shaft.7" />
      <div className="flex justify-between">
        <div className="font-semibold text-mine-shaft-200">
          &#8377;{props.package}
        </div>
        <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
          <IconClockHour3 className="h-5 w-5" stroke={1.5} />{" "}
          {props.applied || props.interviewing ? "Applied" : props.offered ? "Interviewed" : "Posted"}{" "}
          {props.postedDaysAgo} Days ago
        </div>
      </div>
      {
        props.offered || props.interviewing &&
        <Divider size="xs" color="mine-shaft.7" />
      }
      {
        props.offered &&
        <div className="flex gap-2">
          <Button color="clairt.4" variant="outline" fullWidth>
            Accept
          </Button>
          <Button color="clairt.4" variant="light" fullWidth>
            Reject
          </Button>
        </div>
      }
      {
        props.interviewing &&
        <div className="flex gap-1 text-sm items-center">
        <IconCalendarMonth className="text-clairt-400 w-5 h-5" stroke={1.5} /> Sun, 25 August &bull; <span className="text-mine-shaft-400">10:00 AM</span>
      </div>
      }
    </Link>
  );
};

export default Card;

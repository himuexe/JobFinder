import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { card, desc } from "../../data/JobDescData";
import { skills } from "../../data/JobDescData";
import DOMPurify from "dompurify";

const JobDesc = (props:any) => {
  const data = DOMPurify.sanitize(desc);
  return (
    <div className="">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-3 bg-mine-shaft-800 rounded-xl">
            <img className="h-14" src={`/Icons/Google.png`} alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-semibold text-2xl">Software Engineer</div>
            <div className="text-lg text-mine-shaft-300">
              Google &bull; 3 days ago &bull; 48 applicants
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Link to="/apply-job">
            <Button color="clairt.4" size="sm" variant="light">
              {props.edit ? "Edit" : "Apply"}
            </Button>
          </Link>

          {props.edit?<Button color="red.5" size="sm" variant="outline">
              Delete
            </Button>: <IconBookmark className="text-clairt-400 hover:cursor-pointer" />}
        </div>
      </div>
      <Divider my="xl" />
      <div className="flex justify-between">
        {card.map((item: any, index: any) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <ActionIcon
              className="!h-12 !w-12"
              variant="light"
              color="clairt.4"
              radius="xl"
            >
              <item.icon className="h-4/5 w-4/5" stroke={1.5} />
            </ActionIcon>
            <div className="text-sm text-mine-shaft-300">{item.name}</div>
            <div className="font-semibold">{item.value}</div>
          </div>
        ))}
      </div>
      <Divider my="xl" />
      <div className="">
        <div className="text-xl font-semibold  mb-5">Required Skills</div>
        <div className="flex flex-wrap gap-2">
          {skills.map((item: any, index: any) => (
            <ActionIcon
              key={index}
              className="!h-fit !font-medium !text-sm !w-fit"
              variant="light"
              color="clairt.4"
              radius="xl"
              p="xs"
            >
              {item}
            </ActionIcon>
          ))}
        </div>
      </div>
      <Divider my="xl" />
      <div
        dangerouslySetInnerHTML={{ __html: data }}
        className="[&_h4]:text-xl [&_*]:text-mine-shaft-300 [&_li]:mb-1 [&_li]:marker:text-clairt-400 [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify"
      ></div>
      <Divider my="xl" />
      <div className="">
        <div className="text-xl font-semibold  mb-5">About Company</div>
        <div className="flex justify-between mb-3">
          <div className="flex gap-2 items-center">
            <div className="p-3 bg-mine-shaft-800 rounded-xl">
              <img className="h-8" src={`/Icons/Google.png`} alt="" />
            </div>
            <div className="flex flex-col ">
              <div className="font-medium text-lg">Google</div>
              <div className=" text-mine-shaft-300">
                10k+ employees
              </div>
            </div>
          </div>
      
            <Link to="/company">
              <Button color="clairt.4"  variant="light">
                Company Page
              </Button>
            </Link>

          </div>
          <div className="text-mine-shaft-300 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, cupiditate enim architecto sit magnam vitae fugit sunt omnis natus illum adipisci pariatur asperiores aspernatur dolores? Quia voluptatum recusandae, ab commodi nostrum nihil expedita saepe mollitia animi officiis dolore libero iure!</div>
        </div>
      </div>
  );
};

export default JobDesc;

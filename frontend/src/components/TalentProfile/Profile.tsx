import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";

const Profile = (props: any) => {
  return (
    <div className="w-full">
      <div className="relative">
        <img className="rounded-t-2xl w-full" src="/Banner.jpg" alt="" />
        <img
          className="rounded-full w-32 h-32 md:w-48 md:h-48 -bottom-0.5 absolute left-3 border-mine-shaft-950 border-8"
          src="https://avatars.githubusercontent.com/u/1"
          alt=""
        />
      </div>
      <div className="px-3 mt-16">
        <div className="text-2xl md:text-3xl font-semibold flex justify-between">
          {props.name}
          <Button color="clairt.4" variant="light">Message</Button>
        </div>
        <div className="text-xl flex gap-1 items-center">
          <IconBriefcase className="h-5 w-5" stroke={1.5} /> {props.role} &bull; {props.company}
        </div>
        <div className="flex gap-1 text-lg text-mine-shaft-300 items-center">
          <IconMapPin className="h-5 w-5" stroke={1.5} />{props.location}
        </div>
      </div>
      <Divider my="xl" />
      <div>
        <div className="text-2xl font-semibold mb-3">About</div>
        <div className="text-sm text-mine-shaft-300 text-justify">{props.about}</div>
      </div>
      <Divider my="xl" />
      <div>
        <div className="text-2xl font-semibold mb-3">Skills</div>
        <div className="flex flex-wrap gap-2">
          {props.skills.map((skill: any, index: any) => (
            <div key={index} className="bg-clairt-900 text-sm font-medium rounded-3xl text-clairt-400 px-3 py-1">
              {skill}
            </div>
          ))}
        </div>
      </div>
      <Divider my="xl" />
      <div>
        <div className="text-2xl font-semibold mb-5">Experience</div>
        <div className="flex flex-col gap-8">
          {props.experience.map((exp: any, index: any) => (
            <ExpCard key={index} {...exp} />
          ))}
        </div>
      </div>
      <Divider my="xl" />
      <div>
        <div className="text-2xl font-semibold mb-5">Certifications</div>
        <div className="flex flex-col gap-8">
          {props.certifications.map((exp: any, index: any) => (
            <CertiCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
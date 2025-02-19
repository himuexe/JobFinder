import { ActionIcon, Divider, TagsInput, Textarea } from "@mantine/core";
import {
  IconBriefcase,
  IconDeviceFloppy,
  IconMapPin,
  IconPencil,
  IconPlus,
} from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";
import { useState } from "react";
import SelectInput from "./SelectInput";
import fields from "../../data/Profile";
import ExpInput from "./ExpInput";
import Certiinput from "./Certiinput";

const Profile = (props: any) => {
  const [skills, setSkills] = useState(props.skills);
  const [about, setAbout] = useState(props.about);
  const select = fields;
  const [edit, setEdit] = useState([false, false, false, false, false]);
  const [addExp , setAddExp] = useState(false);
  const [addCerti , setAddCerti] = useState(false);
  const handelEdit = (index: any) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };
  return (
    <div className="w-full">
      <div className="relative">
        <img
          className="rounded-t-2xl w-full h-48 object-cover"
          src="/Banner.jpg"
          alt=""
        />
        <img
          className="rounded-full w-32 h-32 md:w-48 md:h-48 -bottom-16 absolute left-6 border-mine-shaft-950 border-8"
          src="https://avatars.githubusercontent.com/u/1"
          alt=""
        />
      </div>
      <div className="px-6 mt-20">
        <div className="text-2xl md:text-3xl font-semibold flex justify-between items-center">
          {props.name}
          <ActionIcon
            onClick={() => handelEdit(0)}
            size={"lg"}
            color="clairt.4"
            variant="subtle"
          >
            {edit[0] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
        </div>
        {edit[0] ? (
          <>
            {" "}
            <div className="flex gap-10 [&>*]:w-1/2">
              <SelectInput {...select[0]} />
              <SelectInput {...select[1]} />
            </div>
            <SelectInput {...select[2]} />
          </>
        ) : (
          <>
            {" "}
            <div className="text-xl flex gap-1 items-center mt-2">
              <IconBriefcase className="h-5 w-5" stroke={1.5} /> {props.role}{" "}
              &bull; {props.company}
            </div>
            <div className="flex gap-1 text-lg text-mine-shaft-300 items-center mt-1">
              <IconMapPin className="h-5 w-5" stroke={1.5} /> {props.location}
            </div>
          </>
        )}
      </div>
      <Divider my="xl" />
      <div className="px-6">
        <div className="text-2xl font-semibold mb-3 flex justify-between">
          About{" "}
          <ActionIcon
            onClick={() => handelEdit(1)}
            size={"lg"}
            color="clairt.4"
            variant="subtle"
          >
            {edit[1] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
        </div>
        {edit[1] ? (
          <Textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            placeholder="Write something about yourself"
            autosize
            minRows={3}
            maxRows={4}
          />
        ) : (
          <div className="text-sm text-mine-shaft-300 text-justify">
            {about}
          </div>
        )}
      </div>
      <Divider my="xl" />
      <div className="px-6">
        <div className="text-2xl font-semibold mb-3 flex justify-between">
          Skills{" "}
          <ActionIcon
            onClick={() => handelEdit(2)}
            size={"lg"}
            color="clairt.4"
            variant="subtle"
          >
            {edit[2] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
        </div>
        {edit[2] ? (
          <TagsInput
            value={skills}
            onChange={setSkills}
            placeholder="Add Skill"
            splitChars={[",", " ", "|"]}
          />
        ) : (
          <div className="flex flex-wrap gap-2">
            {props.skills.map((skill: any, index: any) => (
              <div
                key={index}
                className="bg-clairt-900 text-sm font-medium rounded-3xl text-clairt-400 px-3 py-1"
              >
                {skill}
              </div>
            ))}
          </div>
        )}
      </div>
      <Divider my="xl" />
      <div className="px-6">
        <div className="text-2xl font-semibold mb-5 flex justify-between">
          Experience{" "}
          <div className="flex gap-2">
          <ActionIcon
            onClick={() => setAddExp(true)}
            size={"lg"}
            color="clairt.4"
            variant="subtle"
          >
              <IconPlus className="h-4/5 w-4/5" />
          </ActionIcon>
          <ActionIcon
            onClick={() => handelEdit(3)}
            size={"lg"}
            color="clairt.4"
            variant="subtle"
          >
            {edit[3] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {props.experience.map((exp: any, index: any) => (
            <ExpCard key={index} {...exp} edit={edit[3]} />
          ))
          }
          {addExp && <ExpInput add setEdit={setAddExp} />}
        </div>
      </div>
      <Divider my="xl" />
      <div className="px-6">
        <div className="text-2xl font-semibold mb-5 flex justify-between">
          Certifications{" "}
          <div className="flex gap-2">
          <ActionIcon
            onClick={() => setAddCerti(true)}
            size={"lg"}
            color="clairt.4"
            variant="subtle"
          >
              <IconPlus className="h-4/5 w-4/5" />
          </ActionIcon>
          <ActionIcon
            onClick={() => handelEdit(4)}
            size={"lg"}
            color="clairt.4"
            variant="subtle"
          >
            {edit[4] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {props.certifications.map((cert: any, index: any) => (
            <CertiCard key={index} {...cert} edit={edit[4]} />
          ))}
          {
           addCerti && <Certiinput setEdit={setAddCerti} />
          }
        </div>
      </div>
    </div>
  );
};

export default Profile;

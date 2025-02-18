import {
  Button,
  Divider,
  FileInput,
  NumberInput,
  Textarea,
  TextInput,
  Notification,
  rem,
  LoadingOverlay,
} from "@mantine/core";
import { IconCheck, IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApplyJobComp = () => {
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [sec, setSec] = useState(5);
  const navigate = useNavigate();

  const handlePreview = () => {
    setPreview(!preview);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = () => {
    setSubmit(true);
    let x = 5;
    const interval = setInterval(() => {
      x--;
      setSec(x);
      if (x === 0) {
        clearInterval(interval);
        navigate("/find-jobs");
      }
    }, 1000);
  };

  return (
    <>
      <div className="w-full md:w-3/4 mx-auto p-4 md:p-6">
        <LoadingOverlay
          visible={submit}
          zIndex={1000}
          overlayProps={{ radius: "xl", blur: "md" }}
          loaderProps={{ size: "xl", color: "blue", type: "dots" }}
        />
        <div className="flex justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-mine-shaft-800 rounded-xl">
              <img className="h-14" src={`/Icons/Google.png`} alt="Google Logo" />
            </div>
            <div className="flex flex-col">
              <div className="text-lg md:text-xl font-semibold">
                Software Engineer
              </div>
              <div className="text-sm md:text-base text-mine-shaft-300">
                Google • 3 days ago • 48 applicants
              </div>
            </div>
          </div>
        </div>
        <Divider my="xs" />
        <div className="text-lg md:text-xl font-semibold mb-6">Submit your application</div>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextInput
              label="Full Name"
              withAsterisk
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
              placeholder="Your full name as per your official documents"
            />
            <TextInput
              label="Email"
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
              withAsterisk
              placeholder="Your email address"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NumberInput
              label="Phone Number"
              withAsterisk
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
              hideControls
              clampBehavior="strict"
              min={0}
              max={9999999999}
              placeholder="Your phone number"
            />
            <TextInput
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
              label="Website"
              withAsterisk
              placeholder="Enter Url"
            />
          </div>
          <FileInput
            withAsterisk
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
            leftSection={<IconPaperclip />}
            label="CV"
            placeholder="Attach your CV"
          />
          <Textarea
            withAsterisk
            placeholder="Your cover letter"
            label="Cover Letter"
            autosize
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
            minRows={4}
          />
          {!preview && (
            <Button onClick={handlePreview} color="clairt.4" variant="light" className="w-full">
              Preview
            </Button>
          )}
          {preview && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Button
                onClick={handlePreview}
                color="clairt.4"
                variant="outline"
                className="w-full"
              >
                Edit
              </Button>
              <Button
                onClick={handleSubmit}
                color="clairt.4"
                variant="light"
                className="w-full"
              >
                Submit
              </Button>
            </div>
          )}
        </div>
      </div>
      {submit && (
        <Notification
          icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />}
          className={`!border-clairt-400 !fixed z-1001 top-4 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out ${submit ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}`}
          withBorder
          title="Application Submitted"
          mt="md"
          withCloseButton={false}
        >
          Redirecting to find jobs in {sec} seconds
        </Notification>
      )}
    </>
  );
};

export default ApplyJobComp;
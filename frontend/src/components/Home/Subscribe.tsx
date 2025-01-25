import { Button, TextInput } from "@mantine/core";

const Subscribe = () => {
  return (
    <div className="mt-20 flex flex-col lg:flex-row items-center bg-mine-shaft-900 mx-4 sm:mx-8 lg:mx-20 py-6 lg:py-3 rounded-xl justify-around gap-6 lg:gap-0">
      {/* Heading Section */}
      <div className="text-3xl lg:w-2/5 md:text-4xl text-center font-semibold text-mine-shaft-100 px-4 lg:px-0">
        Never want to miss a{" "}
        <span className="text-clairt-400">job news?</span>
      </div>

      {/* Email Input and Button Section */}
      <div className="flex w-full lg:w-auto gap-4 rounded-xl bg-mine-shaft-700 px-3 py-2 items-center mx-4 lg:mx-0">
        <TextInput
          className="w-full lg:w-auto [&_input]:!text-mine-shaft-100 font-semibold"
          variant="unstyled"
          placeholder="Enter your email"
          size="xl"
        />
        <Button
          className="!rounded-lg whitespace-nowrap !w-[50%]" 
          size="md"
          variant="filled"
          fullWidth
          color="clairt.4"
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default Subscribe;
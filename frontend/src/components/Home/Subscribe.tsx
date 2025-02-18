import { Button, TextInput } from "@mantine/core";

const Subscribe = () => {
  return (
    <section className="container mx-auto px-4 md:px-6">
      <div className="bg-mine-shaft-900 rounded-xl p-8 md:p-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-mine-shaft-100 text-center lg:text-left lg:max-w-md">
            Never want to miss a{" "}
            <span className="text-clairt-400">job news?</span>
          </h2>

          <div className="flex w-full lg:w-auto gap-4 bg-mine-shaft-700 rounded-xl p-3">
            <TextInput
              className="flex-1 [&_input]:!text-mine-shaft-100"
              variant="unstyled"
              placeholder="Enter your email"
              size="lg"
            />
            <Button
              className="!rounded-lg !px-8"
              size="lg"
              variant="filled"
              color="clairt.4"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
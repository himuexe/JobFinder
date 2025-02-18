import {
    Anchor,
    Button,
    Checkbox,
    PasswordInput,
    TextInput,
    rem,
  } from "@mantine/core";
  import { IconAt, IconLock } from "@tabler/icons-react";
  import { Link } from "react-router-dom";
  
  const SignUp = () => {
    return (
      <div className="w-full max-w-md flex flex-col justify-center gap-4">
        <div className="text-2xl font-semibold text-center">Create Account</div>
        <TextInput
          withAsterisk
          label="Name"
          placeholder="Your Name"
          className="w-full"
        />
        <TextInput
          withAsterisk
          leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
          label="Email"
          placeholder="Your Email"
          className="w-full"
        />
        <PasswordInput
          withAsterisk
          leftSection={<IconLock style={{ width: rem(16), height: rem(16) }} />}
          label="Password"
          placeholder="Password"
          className="w-full"
        />
        <PasswordInput
          withAsterisk
          leftSection={<IconLock style={{ width: rem(16), height: rem(16) }} />}
          label="Confirm Password"
          placeholder="Confirm Password"
          className="w-full"
        />
        <Checkbox
          autoContrast
          label={
            <>
              I accept <Anchor>Terms and Conditions</Anchor>
            </>
          }
        />
        <Button autoContrast variant="filled" className="w-full mt-4">
          Sign Up
        </Button>
        <div className="text-center mt-4">
          Have an account?{" "}
          <Link className="text-clairt-400 hover:underline" to="/login">
            Login
          </Link>
        </div>
      </div>
    );
  };
  
  export default SignUp;
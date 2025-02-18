import { Button, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full max-w-md flex flex-col justify-center gap-4">
      <div className="text-2xl font-semibold text-center">Login</div>
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
      <Button autoContrast variant="filled" className="w-full mt-4">
        Login
      </Button>
      <div className="text-center mt-4">
        Don't have an account?{" "}
        <Link className="text-clairt-400 hover:underline" to="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
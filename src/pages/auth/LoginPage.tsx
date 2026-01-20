import { Button, TextInput, PasswordInput } from "@mantine/core";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import logo from "../../assets/clinikpe.svg";
import { loginSchema, type LoginFormValues } from "./validation";
import { useLogin } from "./hooks/useLogin";
export default function LoginPage() {
  const { login, isLoading } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: LoginFormValues) => {
    console.log(data);
    login(data);
  };

  return (
    <div className="min-h-full app-frame px-2  flex flex-col justify-center ">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img src={logo} alt="ClinicPe" className="h-14" />
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <TextInput
            label="Email"
            placeholder="Enter your email"
            error={errors.identifier?.message}
            {...register("identifier")}
          />

          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            error={errors.password?.message}
            {...register("password")}
          />

          <Button
            className="bg-primary"
            type="submit"
            fullWidth
            loading={isLoading}
            disabled={isLoading}
          >
            {isLoading ? "Logging in…" : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
}

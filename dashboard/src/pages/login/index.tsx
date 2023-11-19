import { AuthPage, ThemedTitle } from "@refinedev/antd";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      title={<ThemedTitle collapsed={false} text="أعجم" icon="" />}
      formProps={{
        initialValues: { email: "demo@summa.ltd", password: "demodemo" },
      }}
    />
  );
};

import { ChangeFormTypeProps, FormType } from "@/types";

export const changeFormType = ({
   formType,
   setFormType,
   setError,
}: ChangeFormTypeProps) => {
   formType === FormType.Signup
      ? setFormType(FormType.Login)
      : setFormType(FormType.Signup);
   setError("");
};

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { type FormInputProps } from "@/utils";

const FormInput = ({ label, name, type, defaultValue }: FormInputProps) => {
  return (
    <div className="mb-2">
      <Label className="capitalize" htmlFor={name}>
        {label || name}
      </Label>
      <Input id={name} name={name} type={type} defaultValue={defaultValue} />
    </div>
  );
};

export default FormInput;

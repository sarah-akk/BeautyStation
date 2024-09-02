import { ChangeEvent, useState } from "react";

interface CheckboxProps {
  name: string;
  label: string;
  id: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ name, label, id, onChange }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div>
      <label
        htmlFor={id}
        className="flex cursor-pointer select-none items-center gap-3"
      >
        <div className="relative">
          <input
            type="checkbox"
            id={id}
            name={name}
            className="sr-only"
            onChange={(event) => {
              setIsChecked(!isChecked);
              onChange(event);
            }}
          />
          <div
            className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
              isChecked && "border-primary bg-gray"
            }`}
          >
            <span
              className={`h-2.5 w-2.5 rounded-sm ${isChecked && "bg-primary"}`}
            ></span>
          </div>
        </div>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;

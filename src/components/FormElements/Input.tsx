import { ChangeEventHandler } from "react";

interface InputProps {
  type: string;
  placeholder?: string;
  name: string;
  label?: string;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({
  type,
  placeholder,
  name,
  label,
  onChange,
  className,
}: InputProps) => {
  return (
    <div className={`w-full`}>
      {label && <label className="mb-3 block text-black">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
      />
    </div>
  );
};

export default Input;

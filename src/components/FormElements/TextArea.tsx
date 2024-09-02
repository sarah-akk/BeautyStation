import { ChangeEventHandler } from "react";

interface TextAreaProps {
  label: string;
  name: string;
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

const TextArea = ({ label, name, placeholder, onChange }: TextAreaProps) => {
  return (
    <div className="w-full">
      <label className="mb-3 block text-black">{label}</label>
      <textarea
        rows={6}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
        style={{ resize: "none" }}
      />
    </div>
  );
};

export default TextArea;

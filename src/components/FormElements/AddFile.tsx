import { IoMdCloudUpload } from "react-icons/io";

interface AddFileProps {
  id?: string;
  name: string;
  label: string;
  placeholder: string;
}

const AddFile = ({ id, name, label, placeholder }: AddFileProps) => {
  return (
    <div>
      <label className="mb-3 block text-black">{label}</label>
      <div
        onClick={() => document.getElementById(id || "file")?.click()}
        className="flex justify-between py-2.5 px-5 items-center bg-white rounded-lg border border-gray-200 cursor-pointer"
      >
        <input id={id || "file"} name={name} type="file" className="hidden" />
        <p className="text-gray-400">{placeholder}</p>
        <IoMdCloudUpload size={30} color="#ddd" />
      </div>
    </div>
  );
};

export default AddFile;

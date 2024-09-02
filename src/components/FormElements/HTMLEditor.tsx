import JoditEditor from "jodit-react";

interface HTMLEditorProps {
  title: string;
  value: string;
  error?: string;
  hideTitle?: boolean;
  onChange?: (value: string) => void;
}

const HTMLEditor = ({
  title,
  value,
  onChange,
  error,
  hideTitle,
}: HTMLEditorProps) => {
  return (
    <div>
      <h1
        className={`${
          hideTitle ? "hidden" : ""
        } px-3 font-semibold text-start mx-4 mb-2`}
      >
        {title}
      </h1>
      <JoditEditor value={value} onChange={onChange} />
      {error && <div className="text-red-500 font-semibold">{error}</div>}
    </div>
  );
};
export default HTMLEditor;

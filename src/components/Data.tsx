import { IconType } from "react-icons";
import { BsFiletypePdf } from "react-icons/bs";
import { Link } from "react-router-dom";

interface DataProps {
  title: string;
  text?: string;
  link?: string;
  icon?: IconType;
  iconColor?: string;
}

const Data = ({ title, text, link, icon: Icon, iconColor }: DataProps) => {
  return (
    <div className="flex gap-2 items-center">
      <h2 className="font-bold text-lg text-gray-700">{title}:</h2>
      {link ? (
        <Link
          to={link}
          className="font-semibold flex justify-between bg-slate-100 gap-5 rounded-lg px-5 py-2"
        >
          File name <BsFiletypePdf size={30} color="red" />
        </Link>
      ) : (
        <p className="font-semibold flex items-center gap-1">
          {text} {Icon && <Icon size={20} color={iconColor} />}
        </p>
      )}
    </div>
  );
};

export default Data;

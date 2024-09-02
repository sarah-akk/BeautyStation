import { ReactNode } from "react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";
// import { clickZoomInImage, fileURL } from "../../Tools/APIs";

interface Identifiable {
  id: string | number;
  page?: string;
}

export interface TableOperation {
  name: string;
  icon: IconType;
  link?: boolean;
  onClick?: (id: string | number) => void;
}

export interface TableButtonLink {
  name: string;
  link: string;
  color?: string;
}

interface TableProps<T extends Identifiable> {
  tableHeads: string[];
  tableBody?: T[];
  keys: (keyof T)[];
  operations?: TableOperation[];
  page?: string;
  links?: TableButtonLink[];
}

const Table = <T extends Identifiable>({
  tableHeads,
  tableBody,
  keys,
  operations,
  page,
  links,
}: TableProps<T>) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1 ">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full  mx-auto" style={{ direction: "rtl" }}>
          <thead>
            <tr className="bg-slate-200">
              {tableHeads.map((e, index) => (
                <th
                  key={index}
                  className=" py-4 px-4 font-medium text-black xl:px-11"
                >
                  {e}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableBody?.map((item, rowIndex) => (
              <tr key={rowIndex}>
                {keys.map((key, colIndex) => (
                  <td
                    key={colIndex}
                    className="border-b border-[#eee] py-5 pr-4 pl-9 xl:pl-11"
                  >
                    <div className="flex justify-center items-center text-center">
                      {key === "image" ? (
                        <img
                          // onClick={clickZoomInImage}
                          src={item[key] as string}
                          className="rounded-full w-12 h-12 cursor-pointer"
                          alt="Item"
                        />
                      ) : (item[key] as string) === "غير مثبت" ||
                        (item[key] as string) === "مرفوض" ? (
                        <p className="text-white bg-red-700 p-1 rounded ">
                          {item[key] as string}
                        </p>
                      ) : (item[key] as string) === "مكتمل" ||
                        (item[key] as string) === "مثبت" ? (
                        <p className="text-white bg-green-500 p-1 rounded ">
                          {item[key] as string}
                        </p>
                      ) : (item[key] as string) === "معلق" ||
                        (item[key] as string) === "جاري التنفيذ" ? (
                        <p className="text-white bg-yellow-500 p-1 rounded ">
                          {item[key] as string}
                        </p>
                      ) : (
                        <p className="text-black text-sm ">
                          {item[key] as string}
                        </p>
                      )}
                    </div>
                  </td>
                ))}
                <td className="border-b border-[#eee] py-5 px-4 ">
                  <div className="flex items-center justify-around">
                    {operations?.map((operation) => (
                      <IconButton
                        key={operation.name}
                        onClick={operation.onClick}
                        id={item.id}
                        link={`${
                          operation.link && operation.name === "edit"
                            ? `${
                                page
                                  ? page + "/" + item.id + "/"
                                  : item.id + "/"
                              }edit`
                            : operation.link && operation.name === "show"
                            ? page
                              ? `${page}/${item.id}`
                              : `${item.id}`
                            : ""
                        }`}
                      >
                        <operation.icon
                          size={20}
                          color="#9b007e"
                          className="cursor-pointer hover:text-primary"
                        />
                      </IconButton>
                    ))}
                  </div>
                </td>
                {links && (
                  <td className="border-b border-[#eee] py-5 px-4 ">
                    <div className="flex items-center justify-around">
                      {links?.map((l) => (
                        <Link
                          to={item.id + "/" + l.link}
                          className={`text-white font-semibold rounded-lg px-4 py-1 text-lg`}
                          style={{ backgroundColor: "#a8048a" }}
                        >
                          {l.name}
                        </Link>
                      ))}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

interface IconButtonProps {
  children: ReactNode;
  link: string;
  id: string | number;
  onClick?: (id: string | number) => void;
}

const IconButton = ({ children, link, onClick, id }: IconButtonProps) => {
  const handleClick = () => {
    if (onClick) onClick(id);
  };

  return link ? (
    <Link to={link} className="p-2 rounded-full hover:bg-slate-200">
      {children}
    </Link>
  ) : (
    <button
      onClick={handleClick}
      className="p-2 rounded-full hover:bg-slate-200"
    >
      {children}
    </button>
  );
};

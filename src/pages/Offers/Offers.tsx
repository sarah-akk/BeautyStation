import { FaEye, FaRegTrashAlt, FaSearch } from "react-icons/fa";
import Table, { TableOperation } from "../../components/Table/Table";
import { useState } from "react";
import PopUpDelete from "../../components/PopUpDelete";

interface Offer {
  id: number | string;
  name: string;
  userName: string;
}

const offers: Offer[] = [
  {
    id: 1,
    name: "اسم الخدمة",
    userName: "مقدم الخدمة",
  },
  {
    id: 2,
    name: "اسم الخدمة",
    userName: "مقدم الخدمة",
  },
  {
    id: 3,
    name: "اسم الخدمة",
    userName: "مقدم الخدمة",
  },
];

const Offers = () => {
  const [showPopUpDelete, setShowPopUpDelete] = useState<
    [string | number, boolean]
  >(["", false]);

  const operations: TableOperation[] = [
    {
      name: "delete",
      icon: FaRegTrashAlt,
      link: false,
      onClick(id) {
        setShowPopUpDelete([id, true]);
      },
    },
    {
      name: "show",
      icon: FaEye,
      link: true,
    },
  ];

  return (
    <div className="container mx-auto p-4" style={{ direction: "rtl" }}>
      {showPopUpDelete[1] && (
        <PopUpDelete
          id={showPopUpDelete[0]}
          setVisible={setShowPopUpDelete}
          name="الخدمة"
        />
      )}
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-medium">الخدمات</h2>
      </div>
      <div className="relative mb-4 flex flex-row items-center">
        <FaSearch className="absolute right-52 text-gray-500" />
        <input
          type="text"
          className="w-1/5 p-2 pr-10 border rounded focus:outline-none focus:ring focus:border-blue-300"
          placeholder="فلتر حسب الاسم"
        />
      </div>
      <Table<Offer>
        tableHeads={["اسم الخدمة", "مقدم الخدمة", "العمليات"]}
        tableBody={offers}
        keys={["name", "userName"]}
        operations={operations}
      />
    </div>
  );
};

export default Offers;

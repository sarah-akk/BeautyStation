import { FaEye, FaRegTrashAlt, FaSearch } from "react-icons/fa";
import Table, {
  TableButtonLink,
  TableOperation,
} from "../../components/Table/Table";
import { useState } from "react";
import PopUpDelete from "../../components/PopUpDelete";

interface ServiceProvider {
  id: number | string;
  name: string;
  WorkHours: string[];
  address: string;
}

const serviceProviders: ServiceProvider[] = [
  {
    id: 1,
    name: "جون دو",
    WorkHours: ["9:00 ص - 5:00 م", "الإثنين - الجمعة"],
    address: "شارع محمد عبد المجيد , المدينة المنورة",
  },
  {
    id: 2,
    name: "جين سميث",
    WorkHours: ["10:00 ص - 6:00 م", "الإثنين - السبت"],
    address: "شارع محمد عبد المجيد , المدينة المنورة",
  },
  {
    id: 3,
    name: "إميلي جونسون",
    WorkHours: ["8:00 ص - 4:00 م", "الثلاثاء - الأحد"],
    address: "شارع محمد عبد المجيد , المدينة المنورة",
  },
  {
    id: 4,
    name: "مايكل براون",
    WorkHours: ["7:00 ص - 3:00 م", "الإثنين - الجمعة"],
    address: "شارع محمد عبد المجيد , المدينة المنورة",
  },
  {
    id: 5,
    name: "سارة ويلسون",
    WorkHours: ["9:00 ص - 5:00 م", "الأربعاء - الأحد"],
    address: "شارع محمد عبد المجيد , المدينة المنورة",
  },
];

const ServiceProviders = () => {
  const [showPopUpDelete, setShowPopUpDelete] = useState<
    [string | number, boolean]
  >(["", false]);

  const operations: TableOperation[] = [
    {
      name: "show",
      icon: FaEye,
      link: true,
    },

    {
      name: "delete",
      icon: FaRegTrashAlt,
      link: false,
      onClick(id) {
        setShowPopUpDelete([id, true]);
      },
    },
  ];

  const links: TableButtonLink[] = [
    {
      link: "offers",
      name: "الخدمات",
    },
  ];

  return (
    <div className="container mx-auto p-4" style={{ direction: "rtl" }}>
      {showPopUpDelete[1] && (
        <PopUpDelete
          id={showPopUpDelete[0]}
          setVisible={setShowPopUpDelete}
          name="مقدم الخدمة"
        />
      )}
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-medium">مقدمين الخدمات</h2>
      </div>
      <div className="relative mb-4 flex flex-row items-center">
        <FaSearch className="absolute right-52 text-gray-500" />
        <input
          type="text"
          className="w-1/5 p-2 pr-10 border rounded focus:outline-none focus:ring focus:border-blue-300"
          placeholder="فلتر حسب الاسم"
        />
      </div>
      <Table<ServiceProvider>
        tableHeads={[
          "مقدم الخدمة",
          "العنوان",
          "اوقات الدوام",
          "العمليات",
          "الخدمات",
        ]}
        tableBody={serviceProviders}
        keys={["name", "address", "WorkHours"]}
        operations={operations}
        links={links}
      />
    </div>
  );
};

export default ServiceProviders;

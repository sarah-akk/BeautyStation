import React, { useState } from "react";
import { FaSearch, FaTrash } from "react-icons/fa";
import Table, {
  TableButtonLink,
  TableOperation,
} from "../../components/Table/Table";
import PopUpDelete from "../../components/PopUpDelete";

interface User {
  id: number;
  name: string;
  phone: string;
  email: string;
  accountType: string;
}

const Users: React.FC = () => {
  const operations: TableOperation[] = [
    {
      name: "delete",
      icon: FaTrash,
      onClick(id) {
        setShowPopUpDelete([id, true]);
      },
    },
  ];

  const links: TableButtonLink[] = [
    {
      name: "المدفوعات",
      link: "userpayments",
    },
    {
      name: "الخدمات",
      link: "useroffers",
    },
  ];

  const [filter, setFilter] = useState<string>("");
  const [users] = useState<User[]>([
    {
      id: 1,
      name: "فاطمة الزهراء",
      accountType: "مشتري",
      phone: "٠٩٨-٧٦٥-٤٣٢١",
      email: "fatima@example.com",
    },

    {
      id: 2,
      name: "ليلى العلي",
      accountType: "مقدم",
      phone: "٠٥٥-١٢٣-٤٥٦٨",
      email: "layla@example.com",
    },
    {
      id: 3,
      name: "سعاد عبدالله",
      accountType: "مقدم",
      phone: "٠٥٥-١٢٣-٤٥٦٩",
      email: "suad@example.com",
    },
    {
      id: 4,
      name: "فاطمة الزهراء",
      accountType: " مقدم و مشتري",
      phone: "٠٩٨-٧٦٥-٤٣٢١",
      email: "fatima@example.com",
    },

    {
      id: 5,
      name: "ليلى العلي",
      accountType: "مقدم",
      phone: "٠٥٥-١٢٣-٤٥٦٨",
      email: "layla@example.com",
    },
    {
      id: 6,
      name: "سعاد عبدالله",
      accountType: "مقدم",
      phone: "٠٥٥-١٢٣-٤٥٦٩",
      email: "suad@example.com",
    },
  ]);

  const [showPopUpDelete, setShowPopUpDelete] = useState<
    [string | number, boolean]
  >(["", false]);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(filter.toLowerCase()) ||
      user.phone.includes(filter)
  );

  return (
    <div className="container mx-auto p-4 rtl" style={{ direction: "rtl" }}>
      {showPopUpDelete[1] && (
        <PopUpDelete
          id={showPopUpDelete[0]}
          setVisible={setShowPopUpDelete}
          name="مستخدم"
        />
      )}
      <h1 className="text-2xl font-semibold mb-4">قائمة المستخدمين</h1>
      <div className="relative mb-4 flex flex-row items-center">
        <FaSearch className="absolute right-52 text-gray-500" />
        <input
          type="text"
          className="w-1/5 p-2 pl-10 border rounded focus:outline-none focus:ring focus:border-blue-300"
          placeholder="فلتر حسب الاسم او الرقم"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <Table<User>
        tableHeads={[
          "الاسم",
          "نوع الحساب",
          "رقم الهاتف",
          "البريد الالكتروني",
          "العمليات",
          "معلومات اضافية",
        ]}
        tableBody={filteredUsers}
        keys={["name", "accountType", "phone", "email"]}
        operations={operations}
        links={links}
        page="users"
      />
    </div>
  );
};

export default Users;

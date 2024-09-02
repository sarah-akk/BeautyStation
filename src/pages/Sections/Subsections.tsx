// src/pages/Subsections.tsx
import React, { useState } from "react";
import { FaEdit, FaTrash, FaSearch, FaPlus } from "react-icons/fa";
import Table, {
  TableButtonLink,
  TableOperation,
} from "../../components/Table/Table";
import PopUpDelete from "../../components/PopUpDelete";
import subsection from "../../assets/subsection.png";

interface Subsection {
  id: number;
  name: string;
  image: string;
}

const Subsections: React.FC = () => {
  const [showPopUpDelete, setShowPopUpDelete] = useState<
    [string | number, boolean]
  >(["", false]);
  const [subsections, setSubsections] = useState<Subsection[]>([
    {
      id: 1,
      name: "مكياج كامل لعروسة",
      image: subsection,
    },
    {
      id: 2,
      name: "مكياج بسيط ",
      image: subsection,
    },
  ]);

  const operations: TableOperation[] = [
    {
      name: "edit",
      icon: FaEdit,
      onClick: () => setShowModal(true),
    },
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
      link: "offers",
      name: "الخدمات",
    },
  ];

  const [showModal, setShowModal] = useState<boolean>(false);
  const [newSubsection, setNewSubsection] = useState<Partial<Subsection>>({});
  const [editingSectionId, setEditingSectionId] = useState<number | string>(0);

  const openModal = (sectionId: string | number) => {
    setEditingSectionId(sectionId);
    setShowModal(true);
  };

  const closeModal = () => {
    setNewSubsection({});
    setShowModal(false);
  };

  const handleAddSection = () => {
    const newId = subsections.length
      ? subsections[subsections.length - 1].id + 1
      : 1;
    setSubsections([
      ...subsections,
      {
        id: newId,
        name: newSubsection.name!,
        image: newSubsection.image!,
      },
    ]);
    closeModal();
  };

  const handleEditSection = () => {
    if (editingSectionId === null) return;
    setSubsections(
      subsections.map((section) =>
        section.id === editingSectionId
          ? {
              ...section,
              name: newSubsection.name!,
              image: newSubsection.image!,
            }
          : section
      )
    );
    closeModal();
  };

  return (
    <div style={{ direction: "rtl" }} className="container mx-auto p-4">
      {showPopUpDelete[1] && (
        <PopUpDelete
          id={showPopUpDelete[0]}
          setVisible={setShowPopUpDelete}
          name="القسم الفرعي"
        />
      )}
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-semibold mb-4">الاقسام الفرعية </h1>
        <button
          style={{ backgroundColor: "#9b007e" }}
          onClick={() => openModal(0)}
          className=" text-white px-4 py-2 rounded mb-4 inline-block flex flex-row items-center"
        >
          <FaPlus className="ml-2" /> اضافة قسم فرعي
        </button>
      </div>
      <div className="relative mb-4 flex flex-row items-center">
        <FaSearch className="absolute right-52 text-gray-500" />
        <input
          type="text"
          className="w-1/5 p-2 pr-10 border rounded focus:outline-none focus:ring focus:border-blue-300"
          placeholder="فلتر حسب الاسم"
        />
      </div>

      <Table<Subsection>
        tableHeads={["الاسم", "الصورة", "العمليات", "الخدمات"]}
        tableBody={subsections}
        keys={["name", "image"]}
        operations={operations}
        links={links}
      />
      {showModal && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
          style={{ direction: "rtl" }}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">
              {editingSectionId ? "تعديل قسم" : "اضافة قسم"}
            </h2>
            <input
              type="text"
              className="w-full p-2 border rounded mb-4"
              placeholder="اسم القسم"
              value={newSubsection.name || ""}
              onChange={(e) =>
                setNewSubsection({ ...newSubsection, name: e.target.value })
              }
            />
            <input
              type="file"
              className="w-full p-2 border rounded mb-4"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  const file = e.target.files[0];
                  setNewSubsection({
                    ...newSubsection,
                    image: URL.createObjectURL(file),
                  });
                }
              }}
            />
            <div className="flex justify-between space-x-4">
              <button
                className="bg-pink-500 text-white px-4 py-2 rounded"
                onClick={
                  editingSectionId ? handleEditSection : handleAddSection
                }
              >
                {editingSectionId ? "حفظ التغييرات" : "اضافة "}
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                onClick={closeModal}
              >
                الغاء
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subsections;

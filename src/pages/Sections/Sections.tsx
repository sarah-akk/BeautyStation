import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus, FaSearch } from "react-icons/fa";
import institution from "../../assets/institution.png";

import Table, {
  TableButtonLink,
  TableOperation,
} from "../../components/Table/Table";
import PopUpDelete from "../../components/PopUpDelete";

interface Section {
  id: number;
  name: string;
  image: string;
}

const Sections: React.FC = () => {
  const [sections, setSections] = useState<Section[]>([
    { id: 1, name: "حلاقة الشعر", image: institution },
    { id: 2, name: "تلوين الشعر", image: institution },
    { id: 3, name: "غسيل الشعر", image: institution },
    { id: 4, name: "مكياج", image: institution },
  ]);

  const [showPopUpDelete, setShowPopUpDelete] = useState<
    [string | number, boolean]
  >(["", false]);

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
      name: "الاقسام الفرعية",
      link: "subsections",
    },
  ];

  const [showModal, setShowModal] = useState<boolean>(false);
  const [newSection, setNewSection] = useState<Partial<Section>>({});
  const [editingSectionId, setEditingSectionId] = useState<number | string>(0);

  const openModal = (sectionId: string | number) => {
    setEditingSectionId(sectionId);
    setShowModal(true);
  };

  const closeModal = () => {
    setNewSection({});
    setShowModal(false);
  };

  const handleAddSection = () => {
    const newId = sections.length ? sections[sections.length - 1].id + 1 : 1;
    setSections([
      ...sections,
      {
        id: newId,
        name: newSection.name!,
        image: newSection.image!,
      },
    ]);
    closeModal();
  };

  const handleEditSection = () => {
    if (editingSectionId === null) return;
    setSections(
      sections.map((section) =>
        section.id === editingSectionId
          ? { ...section, name: newSection.name!, image: newSection.image! }
          : section
      )
    );
    closeModal();
  };

  return (
    <div className="container mx-auto p-4" style={{ direction: "rtl" }}>
      {showPopUpDelete[1] && (
        <PopUpDelete
          id={showPopUpDelete[0]}
          setVisible={setShowPopUpDelete}
          name="القسم"
        />
      )}
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-semibold mb-4">الاقسام</h1>
        <button
          style={{ backgroundColor: "#9b007e" }}
          className="flex items-center hover:bg-purple-950 text-white px-4 py-2 rounded mb-4"
          onClick={() => openModal(0)}
        >
          <FaPlus className="ml-2" /> اضافة قسم
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

      <Table
        tableHeads={["الاسم", "الصورة", "العمليات", "معلومات"]}
        tableBody={sections}
        keys={["name", "image"]}
        operations={operations}
        links={links}
        page="sections"
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
              value={newSection.name || ""}
              onChange={(e) =>
                setNewSection({ ...newSection, name: e.target.value })
              }
            />
            <input
              type="file"
              className="w-full p-2 border rounded mb-4"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  const file = e.target.files[0];
                  setNewSection({
                    ...newSection,
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

export default Sections;

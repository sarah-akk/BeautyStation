import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus, FaSearch } from "react-icons/fa";
import Table, {
  TableButtonLink,
  TableOperation,
} from "../../components/Table/Table";
import PopUpDelete from "../../components/PopUpDelete";

interface Filter {
  id: number;
  name: string;
}

const Filters: React.FC = () => {
  const operations: TableOperation[] = [
    {
      name: "edit",
      icon: FaEdit,
      onClick: () => setIsModalOpen(true),
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
      name: "options",
      link: "options",
    },
  ];

  const [showPopUpDelete, setShowPopUpDelete] = useState<
    [string | number, boolean]
  >(["", false]);

  const [filters, setFilters] = useState<Filter[]>([
    { id: 1, name: "Special Discount" },
    { id: 2, name: "Free Shipping" },
    { id: 3, name: "Buy One Get One Free" },
    { id: 4, name: "Seasonal Offer" },
    { id: 5, name: "Limited Time Discount" },
    { id: 6, name: "Clearance Sale" },
    { id: 7, name: "New Arrivals" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newFilter, setNewFilter] = useState<{ name: string }>({ name: "" });
  const [editingFilterId, setEditingFilterId] = useState<number | null>(null);

  const openModal = (filterId?: number) => {
    setEditingFilterId(filterId ?? null);
    if (filterId !== undefined) {
      const filter = filters.find((f) => f.id === filterId);
      if (filter) setNewFilter({ name: filter.name });
    } else {
      setNewFilter({ name: "" });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setNewFilter({ name: "" });
    setIsModalOpen(false);
  };

  const addFilter = () => {
    const newId = filters.length ? filters[filters.length - 1].id + 1 : 1;
    setFilters([...filters, { id: newId, name: newFilter.name }]);
    closeModal();
  };

  const editFilter = () => {
    if (editingFilterId === null) return;
    setFilters(
      filters.map((filter) =>
        filter.id === editingFilterId
          ? { ...filter, name: newFilter.name }
          : filter
      )
    );
    closeModal();
  };

  return (
    <div className="container mx-auto p-4">
      {showPopUpDelete[1] && (
        <PopUpDelete
          id={showPopUpDelete[0]}
          setVisible={setShowPopUpDelete}
          name="filter"
        />
      )}
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-medium">Filters</h2>
        <button
          onClick={() => openModal()}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center"
        >
          <FaPlus className="mr-2" /> Add New Filter
        </button>
      </div>
      <div className="relative mb-4 flex flex-row">
        <input
          type="text"
          className="w-1/5 p-2 pl-10 border rounded focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Filter by name or phone..."
        />
        <FaSearch className="absolute left-3 top-3 text-gray-500" />
      </div>

      <Table
        tableHeads={["Name", "Actions", "options"]}
        tableBody={filters}
        keys={["name"]}
        operations={operations}
        page="filters"
        links={links}
      />

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-medium mb-4">
              {editingFilterId ? "Edit Filter" : "Add New Filter"}
            </h2>
            <input
              type="text"
              className="w-full p-2 border rounded mb-4"
              placeholder="Filter Name"
              value={newFilter.name}
              onChange={(e) => setNewFilter({ name: e.target.value })}
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={editingFilterId ? editFilter : addFilter}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                {editingFilterId ? "Save Changes" : "Add Filter"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;

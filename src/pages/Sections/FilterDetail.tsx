import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaEdit, FaSearch, FaTrash } from "react-icons/fa";

interface Filter {
  id: number;
  name: string;
  options: { name: string; imageUrl: string }[];
}

const FilterDetail: React.FC = () => {
  const { id, filterId } = useParams();
  const navigate = useNavigate();

  const [options, setOptions] = useState<Filter["options"]>([]);
  const [newOption, setNewOption] = useState({ name: "", imageUrl: "" });
  const [editingOption, setEditingOption] = useState<string | null>(null);
  const [editingValue, setEditingValue] = useState({ name: "", imageUrl: "" });

  useEffect(() => {
    const fetchedFilter: Filter = {
      id: parseInt(filterId || "0", 10),
      name: "Sample Filter",
      options: [
        { name: "Option 1", imageUrl: "https://via.placeholder.com/50" },
        { name: "Option 2", imageUrl: "https://via.placeholder.com/50" },
      ],
    };

    setOptions(fetchedFilter.options);
  }, [filterId]);

  const saveFilter = () => {
    navigate(`/home/sections/${id}/filters`);
  };

  const addOption = () => {
    if (newOption.name.trim() === "" || newOption.imageUrl.trim() === "")
      return;
    setOptions([...options, newOption]);
    setNewOption({ name: "", imageUrl: "" });
  };

  const removeOption = (optionName: string) => {
    setOptions(options.filter((option) => option.name !== optionName));
  };

  const startEditing = (optionName: string) => {
    const option = options.find((option) => option.name === optionName);
    if (option) {
      setEditingOption(optionName);
      setEditingValue(option);
    }
  };

  const saveEditing = () => {
    if (editingOption) {
      setOptions(
        options.map((option) =>
          option.name === editingOption ? editingValue : option
        )
      );
      setEditingOption(null);
      setEditingValue({ name: "", imageUrl: "" });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <h3 className="text-md font-medium mb-2">Filter Options</h3>
        <div className="overflow-x-auto">
          <div className="relative mb-4 flex flex-row">
            <input
              type="text"
              className="w-1/5 p-2 pl-10 border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Filter by name or phone..."
            />
            <FaSearch className="absolute left-3 top-3 text-gray-500" />
          </div>

          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
            <thead>
              <tr className="text-left">
                <th className="py-2 px-4 border-b">Option Name</th>
                <th className="py-2 px-4 border-b">Image</th>
                <th className="py-2 px-4 border-b text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {options.map((option, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">
                    {editingOption === option.name ? (
                      <input
                        type="text"
                        className="w-full p-2 border rounded"
                        value={editingValue.name}
                        onChange={(e) =>
                          setEditingValue({
                            ...editingValue,
                            name: e.target.value,
                          })
                        }
                      />
                    ) : (
                      option.name
                    )}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {editingOption === option.name ? (
                      <input
                        type="text"
                        className="w-full p-2 border rounded"
                        value={editingValue.imageUrl}
                        onChange={(e) =>
                          setEditingValue({
                            ...editingValue,
                            imageUrl: e.target.value,
                          })
                        }
                        placeholder="Image URL"
                      />
                    ) : (
                      <img
                        src={option.imageUrl}
                        alt={option.name}
                        className="h-10 w-10 object-cover"
                      />
                    )}
                  </td>
                  <td className="py-2 px-4 border-b text-right">
                    {editingOption === option.name ? (
                      <button
                        onClick={saveEditing}
                        className="text-blue-500 hover:text-blue-700 mr-4"
                      >
                        Save
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => startEditing(option.name)}
                          className="text-gray-500 hover:text-blue-500 mr-4"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => removeOption(option.name)}
                          className="text-gray-500 hover:text-red-500"
                        >
                          <FaTrash />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
              {options.length === 0 && (
                <tr>
                  <td colSpan={3} className="text-center py-4">
                    No options found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border rounded mb-2"
          value={newOption.name}
          onChange={(e) => setNewOption({ ...newOption, name: e.target.value })}
          placeholder="New Option Name"
        />
        <input
          type="file"
          className="w-full p-2 border rounded mb-2"
          value={newOption.imageUrl}
          onChange={(e) =>
            setNewOption({ ...newOption, imageUrl: e.target.value })
          }
          placeholder="New Option Image URL"
        />
        <button
          onClick={addOption}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Add Option
        </button>
      </div>

      <div className="flex justify-end space-x-2">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-300 rounded-lg"
        >
          Cancel
        </button>
        <button
          onClick={saveFilter}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Save Filter
        </button>
      </div>
    </div>
  );
};

export default FilterDetail;

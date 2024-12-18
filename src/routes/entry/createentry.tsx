import { useState } from "react";
import {
  FaBuilding,
  FaEdit,
  FaMoneyBillWave,
  FaProjectDiagram,
  FaTags,
  FaUserTie,
} from "react-icons/fa";
import { departments, expenseTypes, categories } from "../../utils/FormDropdown";

interface FormData {
  department: string;
  expenseType: string;
  category: string;
  amount: number;
  projectCode: string;
  approver: string;
  costCenter?: string;
  description?: string;
}
interface ErrorType {
  department?: string;
  expenseType?: string;
  category?: string;
  amount?: number;
  projectCode?: string;
  approver?: string;
  costCenter?: string;
  description?: string;
  [key: string]: string | number | undefined;
}

const CreateEntry = () => {
  const [formData, setFormData] = useState<FormData>({
    department: "",
    expenseType: "",
    category: "",
    amount: 0,
    projectCode: "",
    approver: "",
    costCenter: "",
    description: "",
  });
  const [errors, setErrors] = useState<ErrorType>({
    department: "",
    expenseType: "",
    category: "",
    amount: 0,
    projectCode: "",
    approver: "",
    costCenter: "",
  });
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  // const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log("Submitted");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const resetForm = () => {
    setFormData({
      expenseType: "",
      amount: 0,
      category: "",
      description: "",
      department: "",
      projectCode: "",
      approver: "",
      costCenter: "",
    });
    setErrors({});
  };

  return (
    <div className="m-5 p-4 h-full rounded-lg bg-white">
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Corporate Budget Request
            </h2>
            <p className="text-gray-600">
              Submit corporate expense requests for approval and budget
              allocation
            </p>
          </div>

          {showSuccess && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center justify-center">
              <span className="font-semibold">
                Budget request submitted successfully for approval!
              </span>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="department"
              >
                Department
              </label>
              <div className="relative">
                <FaBuilding className="absolute left-3 top-3 text-gray-400" />
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.department ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select department</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
              {errors.department && (
                <p className="text-red-500 text-sm mt-1">{errors.department}</p>
              )}
            </div>

            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="expenseType"
              >
                Expense Type
              </label>
              <div className="relative">
                <FaEdit className="absolute left-3 top-3 text-gray-400" />
                <select
                  id="expenseType"
                  name="expenseType"
                  value={formData.expenseType}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.expenseType ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select expense type</option>
                  {expenseTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              {errors.expenseType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.expenseType}
                </p>
              )}
            </div>

            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="amount"
              >
                Budget Amount
              </label>
              <div className="relative">
                <FaMoneyBillWave className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.amount ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter budget amount"
                />
              </div>
              {errors.amount && (
                <p className="text-red-500 text-sm mt-1">{errors.amount}</p>
              )}
            </div>

            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="category"
              >
                Budget Category
              </label>
              <div className="relative">
                <FaTags className="absolute left-3 top-3 text-gray-400" />
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.category ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">{errors.category}</p>
              )}
            </div>

            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="projectCode"
              >
                Project Code
              </label>
              <div className="relative">
                <FaProjectDiagram className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  id="projectCode"
                  name="projectCode"
                  value={formData.projectCode}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.projectCode ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter project code"
                />
              </div>
              {errors.projectCode && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.projectCode}
                </p>
              )}
            </div>

            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="approver"
              >
                Budget Approver
              </label>
              <div className="relative">
                <FaUserTie className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  id="approver"
                  name="approver"
                  value={formData.approver}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.approver ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter approver name"
                />
              </div>
              {errors.approver && (
                <p className="text-red-500 text-sm mt-1">{errors.approver}</p>
              )}
            </div>

            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="costCenter"
              >
                Cost Center
              </label>
              <div className="relative">
                <FaBuilding className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  id="costCenter"
                  name="costCenter"
                  value={formData.costCenter}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.costCenter ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter cost center code"
                />
              </div>
              {errors.costCenter && (
                <p className="text-red-500 text-sm mt-1">{errors.costCenter}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="description"
              >
                Budget Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Provide detailed description of budget request"
              ></textarea>
            </div>

            <div className="md:col-span-2 flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-semibold"
              >
                Submit Budget Request
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200 font-semibold"
              >
                Reset Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEntry;

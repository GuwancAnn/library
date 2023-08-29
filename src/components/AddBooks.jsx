import React from "react";
import DropDownSelect from "./DropDownSelect";
import DropDownMultiSelect from "./DropdownMultiSelect";
import DropDownNameSelect from "./DropDownNameSelect";
import DatePickerPrint from "./DatePicker";
import AddNameModal from "./AddNameModal";
import AddLessonModal from "./AddLessonModal";
import AddDepartmentModal from "./AddDepartmentModal";

export default function AddBooks() {
  return (
    <form>
      <div className=" lg:container mx-auto space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Awtoryn ady we Familiyasy
              </label>
              <div className="mt-2 flex ">
                <DropDownNameSelect></DropDownNameSelect>
                <AddNameModal></AddNameModal>
              </div>{" "}
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Kitabyn ady
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className=" h-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:border border-blue-500 border-opacity-75 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Cap edilen senesi
              </label>
              <div className="mt-2">
                <DatePickerPrint></DatePickerPrint>
              </div>
            </div>

            <div className="sm:col-span-2  sm:col-start-1">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Dersler
              </label>
              <div className="mt-2 flex">
                <DropDownMultiSelect></DropDownMultiSelect>
                <AddLessonModal></AddLessonModal>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Kafedra
              </label>
              <div className="mt-2 flex">
                <DropDownSelect></DropDownSelect>
                <AddDepartmentModal></AddDepartmentModal>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nesiryaty
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className=" h-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

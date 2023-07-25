import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PencilIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { selectUserInfo, updateUserAsync } from "./userSlice";
import { useForm } from "react-hook-form";
import EditAddressForm from "../../helpers/forms/EditAddressForm";
import AddAddressForm from "../../helpers/forms/AddAddressForm";

const UserProfile = () => {
  const user = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  const [selectedEditIndex, setSelectedEditIndex] = useState(-1);
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);


  const handleEditForm = (index) => {
    setSelectedEditIndex(index);
  };
  const handleEdit = (editedAddress, index) => {
    const newUser = { ...user, addresses: [...user.addresses] }; //For shallow copy issue
    newUser.addresses.splice(index, 1, editedAddress);
    dispatch(updateUserAsync(newUser));
    setSelectedEditIndex(-1);
  };
  const handleRemove = (e, index) => {
    const newUser = { ...user, addresses: [...user.addresses] }; //For shallow copy issue
    newUser.addresses.splice(index, 1);
    dispatch(updateUserAsync(newUser));
  };
  const handleAddAddress = (newAddress) => {
    const newUser = { ...user, addresses: [...user.addresses, newAddress] };
    dispatch(updateUserAsync(newUser));
    setShowAddAddressForm(false);
  };
  return (
    <div>
      <div className="mx-auto mt-12 bg-white max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <h1 className="text-2xl my-4 font-semibold tracking-tight text-gray-900">
            Name: {user.name ? user.name : "New User"}
          </h1>
          <h3 className="text-xl my-5 font-bold tracking-tight text-red-900">
            {"Email:   "}{user.email}
          </h3>
        </div> */}

        <div className=" border-gray-200 rounded-md px-4 py-6 sm:px-6">
          <p className="mt-0.5 text-lg text-gray-500 mb-2">Your Address :</p>
          <div>
            {!showAddAddressForm && (
              <button
                onClick={(e) => {
                  setShowAddAddressForm(true);
                  setSelectedEditIndex(-1);
                }}
                type="submit"
                className=" rounded-md my-5 bg-green-600 px-3 py-2 text-sm font-semibold  text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add New Address
              </button>
            )}
            {showAddAddressForm && (
              <AddAddressForm
                handleAddAddress={handleAddAddress}
                setShowAddAddressForm={setShowAddAddressForm}
              />
            )}
          </div>
          {selectedEditIndex !== -1 && (
            <EditAddressForm
              handleEdit={handleEdit}
              selectedEditIndex={selectedEditIndex}
              setSelectedEditIndex={setSelectedEditIndex}
            />
          )}
          {user.addresses.map((address, index) => (
            <div>
              <div className="flex justify-between px-6 py-4 my-6 bg-indigo-100 rounded-lg">
                <div className=" border-b-2 ">
                  {/* <p className="font-bold text-lg text-gray-500 mb-2">Deliver to:</p> */}
                  <p className="font-bold text-lg">{address.name}</p>
                  <div>
                    <span className="mr-2">At- {address.street},</span>
                    <span>City- {address.city}</span>
                  </div>
                  <div>
                    <span className="mr-2">State- {address.region},</span>
                    <span>Pincode- {address.pin}</span>
                  </div>
                  <p>Phone: {address.phone}</p>
                </div>
                <div className="flex flex-col justify-around">
                  <PencilSquareIcon
                    className="h-5 w-5 text-green-500 cursor-pointer"
                    onClick={(e) => handleEditForm(index)}
                  />
                  <TrashIcon
                    class="h-5 w-5 text-red-500 cursor-pointer"
                    onClick={(e) => handleRemove(e, index)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

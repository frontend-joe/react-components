import { useState } from "react";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import { Dropdown4 } from "./Dropdown4";
import "./Dropdown4Example.css";

const items = ["instagram", "twitter", "github"];

export const Dropdown4Example = () => {
  const handleItemClick = (item) =>
    toast.success(`Followed on ${item}`, {
      position: "bottom-center",
      autoClose: true,
      closeButton: false,
    });

  return (
    <>
      <ToastContainer />
      <section className="page dropdown-4-page">
        <div>
          <Dropdown4
            buttonText="Follow Us"
            items={items}
            onItemClick={handleItemClick}
          />
        </div>
      </section>
    </>
  );
};

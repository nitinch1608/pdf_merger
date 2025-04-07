"use client";
import React, { useState } from "react";

const page = () => {
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];

    if (file && file.type !== "application/pdf") {
      alert("Only PDF files are allowed!");
      e.target.value = "";
      return;
    }
  };

  return (
    <>
      <form
        action="http://localhost:5500/upload"
        method="post"
        encType="multipart/form-data"
      >
        <input
          className="border-2 border-black"
          type="file"
          accept="appliation/pdf"
          multiple
          name="photos"
          onChange={(e) => handleFileChange(e)}
        />
        <button
          className="border-2 border-green-500 rounded-2xl cursor-pointer p-2 hover:border-blue-500"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default page;

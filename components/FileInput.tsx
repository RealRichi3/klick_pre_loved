"use client"
import React from "react"

interface FileInputProps {
  accept?: string
  multiple?: boolean
  value?: string
  setValue?: React.Dispatch<React.SetStateAction<string>>
}

export const FileInput: React.FC<FileInputProps> = ({ accept, value }) => {
  const [file, setFile] = React.useState<File | null>(null)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      setFile(files[0])
    }
  }
  return (
    <div className="relative">
      <label
        htmlFor="file"
        className="cursor-pointer text-center rounded-lg py-10 px-4 w-full block md:w-[45%]"
        style={{ border: "1px dashed #0485E8" }}
      >
        <p className="text-[#0485E8] font-semibold px-4 py-2 bg-primary/20 mx-auto w-[40%] rounded-lg">
          Upload Image
        </p>
        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          onChange={onChange}
          accept={accept}
        />
      </label>
      <p className="text-secondary">
        <i>{file?.name}</i>
      </p>
    </div>
  )
}

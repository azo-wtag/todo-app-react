import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "components/base/input/input";
import Image from "components/base/image";
import {
  FORM_VALIDATION_MODE_ONCHANGE,
  SEARCH_ICON_ALT_TAG,
  SEARCH_ICON_PATH,
  TITLE_FIELD_NAME_ATTRIBUTE,
} from "utils/const";
import { taskSchema } from "utils/schema";

function SearchField() {
  const searchTaskByTitle = (task) => {
    console.log(task);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: FORM_VALIDATION_MODE_ONCHANGE,
    resolver: yupResolver(taskSchema),
  });

  return (
    <form
      className="flex items-center"
      onSubmit={handleSubmit(searchTaskByTitle)}
    >
      <InputField
        register={register(TITLE_FIELD_NAME_ATTRIBUTE)}
        error={errors.title}
      />
      <Image src={SEARCH_ICON_PATH} alt={SEARCH_ICON_ALT_TAG} />
    </form>
  );
}

export default SearchField;

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import debounce from "lodash.debounce";
import { useDispatch, useSelector } from "react-redux";
import InputField from "components/base/input/input";
import Image from "components/base/image";
import {
  FORM_VALIDATION_MODE_ONCHANGE,
  SEARCH_ICON_ALT_TAG,
  SEARCH_ICON_PATH,
  TITLE_FIELD_NAME_ATTRIBUTE,
} from "utils/const";
import { searchTaskSchema } from "utils/schema";
import { setSearchKey } from "store/actions/filter";

function SearchField() {
  const dispatch = useDispatch();

  const searchTaskByTitle = debounce((task) => {
    dispatch(setSearchKey(task.title));
  }, 500);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    mode: FORM_VALIDATION_MODE_ONCHANGE,
    resolver: yupResolver(searchTaskSchema),
  });

  useEffect(() => {
    const subscription = watch(handleSubmit(searchTaskByTitle));
    return () => subscription.unsubscribe();
  }, [watch]);

  const searchedKey = useSelector((state) => state.filter.searchKey);
  useEffect(() => {
    if (!searchedKey) setValue(TITLE_FIELD_NAME_ATTRIBUTE, "");
  }, [searchedKey]);

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

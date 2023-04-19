import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import debounce from "lodash.debounce";
import { useDispatch, useSelector } from "react-redux";
import InputField from "components/base/input/input";
import Image from "components/base/image";
import {
  ALT_SEARCH_ICON_TAG,
  FORM_VALIDATION_MODE_ONCHANGE,
  PATH_SEARCH_ICON,
  TITLE_FIELD_NAME_ATTRIBUTE,
} from "utils/const";
import { searchTaskSchema } from "utils/schema";
import { setSearchKey, toggleIsFiltering } from "store/actions/filter";

function SearchField() {
  const dispatch = useDispatch();

  const debouncedSearchTask = debounce((title) => {
    dispatch(setSearchKey(title));
    dispatch(toggleIsFiltering(false));
  }, 500);

  const searchTaskByTitle = (task) => {
    dispatch(toggleIsFiltering(true));
    debouncedSearchTask(task.title);
  };

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

  const searchdKey = useSelector((state) => state.filter.searchKey);
  useEffect(() => {
    if (searchdKey === "") setValue(TITLE_FIELD_NAME_ATTRIBUTE, "");
  }, [searchdKey]);

  useEffect(() => {
    setValue(TITLE_FIELD_NAME_ATTRIBUTE, "");

    const subscription = watch(handleSubmit(searchTaskByTitle));
    return () => subscription.unsubscribe();
  }, []);

  return (
    <form
      className="flex items-center"
      onSubmit={handleSubmit(searchTaskByTitle)}
    >
      <InputField
        register={register(TITLE_FIELD_NAME_ATTRIBUTE)}
        error={errors.title}
      />
      <Image src={PATH_SEARCH_ICON} alt={ALT_SEARCH_ICON_TAG} />
    </form>
  );
}

export default SearchField;

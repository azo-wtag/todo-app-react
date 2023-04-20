import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import InputField from "components/base/input/input";
import Image from "components/base/image";
import Button from "components/base/button";
import {
  ALT_SEARCH_ICON_TAG,
  FORM_VALIDATION_MODE_ONCHANGE,
  PATH_SEARCH_ICON,
  TITLE_FIELD_NAME_ATTRIBUTE,
} from "utils/const";
import { searchTaskSchema } from "utils/schema";
import { setSearchKey, toggleIsFiltering } from "store/actions/filter";
import { debounce } from "utils/helper";
import styles from "components/base/search-field/index.module.scss";

function SearchField() {
  const dispatch = useDispatch();
  const [isSearchFieldVisible, setIsSearchFieldVisible] = useState(false);

  const debouncedSearchTask = debounce((title) => {
    console.log("searche called", title);
    dispatch(setSearchKey(title));
    dispatch(toggleIsFiltering(false));
  }, 800);

  const searchTaskByTitle = (task) => {
    dispatch(toggleIsFiltering(true));
    debouncedSearchTask(task.title);
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm({
    mode: FORM_VALIDATION_MODE_ONCHANGE,
    resolver: yupResolver(searchTaskSchema),
  });

  const searchKey = useSelector((state) => state.filter.searchKey);
  useEffect(() => {
    if (searchKey === "") setValue(TITLE_FIELD_NAME_ATTRIBUTE, "");
  }, [searchKey]);

  useEffect(() => {
    setValue(TITLE_FIELD_NAME_ATTRIBUTE, "");
    const subscription = watch(handleSubmit(searchTaskByTitle));
    return () => subscription.unsubscribe();
  }, []);

  const handleSearchButtonClick = () => {
    if (isSearchFieldVisible) dispatch(setSearchKey(""));
    setIsSearchFieldVisible(!isSearchFieldVisible);
  };

  useEffect(() => {
    if (isSearchFieldVisible) setFocus(TITLE_FIELD_NAME_ATTRIBUTE);
  }, [isSearchFieldVisible]);

  const searchBoxClassNames = classnames(styles.searchField, "fw-500", {
    [styles.visibleSearchField]: isSearchFieldVisible,
  });

  return (
    <form
      className={`flex items-center justify-end ${styles.formContainer}`}
      onSubmit={handleSubmit(searchTaskByTitle)}
    >
      {isSearchFieldVisible && (
        <InputField
          register={register(TITLE_FIELD_NAME_ATTRIBUTE)}
          error={errors.title}
          classNames={searchBoxClassNames}
        />
      )}

      <Button onClick={handleSearchButtonClick} className="bg-white">
        <Image src={PATH_SEARCH_ICON} alt={ALT_SEARCH_ICON_TAG} />
      </Button>
    </form>
  );
}

export default SearchField;

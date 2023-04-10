import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import classnames from "classnames";
import debounce from "lodash.debounce";
import { useDispatch, useSelector } from "react-redux";
import InputField from "components/base/input/input";
import Image from "components/base/image";
import Button from "components/base/button";
import {
  FORM_VALIDATION_MODE_ONCHANGE,
  SEARCH_ICON_ALT_TAG,
  SEARCH_ICON_PATH,
  TITLE_FIELD_NAME_ATTRIBUTE,
} from "utils/const";
import { searchTaskSchema } from "utils/schema";
import { setSearchKey } from "store/actions/filter";
import styles from "components/base/search-field/index.module.scss";

function SearchField() {
  const dispatch = useDispatch();
  const [isSearchFieldVisible, setIsSearchFieldVisible] = useState(false);

  const searchTaskByTitle = debounce((task) => {
    dispatch(setSearchKey(task.title));
  }, 500);

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

  useEffect(() => {
    const subscription = watch(handleSubmit(searchTaskByTitle));
    return () => subscription.unsubscribe();
  }, [watch]);

  const searchedKey = useSelector((state) => state.filter.searchKey);
  useEffect(() => {
    if (!searchedKey) setValue(TITLE_FIELD_NAME_ATTRIBUTE, "");
  }, [searchedKey]);

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

      <Button onButtonClick={handleSearchButtonClick} className="bg-white">
        <Image src={SEARCH_ICON_PATH} alt={SEARCH_ICON_ALT_TAG} />
      </Button>
    </form>
  );
}

export default SearchField;

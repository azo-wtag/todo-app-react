import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
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
import styles from "components/base/search-field/index.module.scss";

function SearchField() {
  const dispatch = useDispatch();

  const searchTaskByTitle = debounce((task) => {
    dispatch(setSearchKey(task.title));
  }, 500);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: FORM_VALIDATION_MODE_ONCHANGE,
    resolver: yupResolver(searchTaskSchema),
  });

  useEffect(() => {
    const subscription = watch(handleSubmit(searchTaskByTitle));
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <form
      className={`flex items-center ${styles.formContainer}`}
      onSubmit={handleSubmit(searchTaskByTitle)}
    >
      <InputField
        register={register(TITLE_FIELD_NAME_ATTRIBUTE)}
        error={errors.title}
        classNames={styles.searchField}
      />
      <Image src={SEARCH_ICON_PATH} alt={SEARCH_ICON_ALT_TAG} />
    </form>
  );
}

export default SearchField;

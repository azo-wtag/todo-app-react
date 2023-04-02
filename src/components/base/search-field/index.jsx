import React from "react";
import InputField from "components/base/input/input";
import Image from "components/base/image";
import { SEARCH_ICON_ALT_TAG, SEARCH_ICON_PATH } from "utils/const";

function SearchField() {
  return (
    <div className="flex items-center">
      <InputField />
      <Image src={SEARCH_ICON_PATH} alt={SEARCH_ICON_ALT_TAG} />
    </div>
  );
}

export default SearchField;

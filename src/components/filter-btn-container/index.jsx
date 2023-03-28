import React from "react";

import Button from "components/base/button";

function FilterBtnContainer() {
  return (
    <div>
      <Button>All</Button>
      <Button>Incomplete</Button>
      <Button>Complete</Button>
    </div>
  );
}

export default FilterBtnContainer;

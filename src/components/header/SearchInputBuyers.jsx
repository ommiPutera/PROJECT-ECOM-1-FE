import React, { useState } from "react";
import {
  FormControl,
  InputBase,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const SearchInputBuyers = () => {
  const [searchProduct, setSearchProduct] = useState("");

  const onSearchSubmit = () => {
    console.log("submit");
  };

  const onInputChange = (e) => {
    setSearchProduct(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSearchSubmit} autoComplete="off">
        <FormControl
          style={{
            width: "95%",
          }}
        >
          <InputBase
            style={{
              backgroundColor: "rgb(247, 247, 247)",
              borderRadius: 6,
              outline: "none",
              padding: 8.3,
              paddingLeft: 20,
              fontSize: "15px",
            }}
            value={searchProduct}
            onChange={onInputChange}
            type="text"
            placeholder="Search"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  // onClick={}
                >
                  <SearchIcon
                    style={{ color: "rgb(80, 80, 80)", fontSize: "20px" }}
                    // onClick={}
                  />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </form>
    </div>
  );
};
export default SearchInputBuyers;

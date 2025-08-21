import "./SearchBar.css"
import React from "react";

type SearchBarProps ={
    value : string | undefined
    onClick: React.MouseEventHandler<HTMLInputElement>;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchBar : React.FC<SearchBarProps> = ({
	value,
	onChange,
	onClick
}) => {

  return (

    <>

        <div className="search">
            <div className="search-form">
                <input type="text" placeholder="e.g https://www.youtube.com/watch?v=JC90NBGC_bA"  value={value}  onChange={onChange}/>
                <input type="submit" value="Submit" onClick={onClick}/>
            </div>
        
        </div>
    </>


  );
}

export default SearchBar;
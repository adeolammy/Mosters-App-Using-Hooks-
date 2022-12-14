import './search-box.style.css'

const SearchBox = ({className, placeholder, onChangeHandler})=> {

        return (   
            <div>
                <input 
                    type="search" 
                    className={className} 
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                />
            </div>   
        );
    }


export default SearchBox;
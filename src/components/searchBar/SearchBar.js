import { useState } from 'react';
import { Searchbar, SearchForm, SearchFormButton, SearchFormInput } from './SearchBar.module.css';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';

const SearchBar = ({ onClick }) => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleInput = e => {
        setSearchQuery(e.target.value);
    };

    const handleClick = e => {
        e.preventDefault();

        if (searchQuery === '') {
            toast.error('Ooops...No results:(');
            return;
        }
        onClick(searchQuery);
    };

    return (
        <>
            <header className={Searchbar}>
                <form onSubmit={handleClick} className={SearchForm}>
                    <button type="submit" className={SearchFormButton}>
                        <ImSearch />
                    </button>
                    <input
                        className={SearchFormInput}
                        type="text"
                        autoComplete="off"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleInput}
                    ></input>
                </form>
            </header>
        </>

    );
}

export default SearchBar;
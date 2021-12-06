import React from 'react'
import { temperature } from '../context/MyContect'
import Link from 'next/link'

function SearchForm(props: any) {
    const { getSearch }: any = React.useContext(temperature);

    const [searchValue, setSearchValue] = React.useState("");
    
    return (
        <div className='search-form'>
            <div className="btn-close btn-close-white ms-auto" aria-label="Close" onClick={() => getSearch(true)}>
            </div>
            <div>
                <div className="input-group pt-4">
                    <input type="text"
                        className="form-control"
                        placeholder="Search Location"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <Link href='/city/[id]' as={`/city/${searchValue}`}>
                        <a className="btn btn-primary ms-2 btn-md" type="submit" >Search</a>
                    </Link>

                </div>
            </div>
            <ul className="form-value pt-5 mb-0 ps-0">
                <li>
                    <Link href='/city/[id]' as={`/city/london`}>
                        <a>
                            London
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/city/[id]' as={`/city/barcelona`}>
                        <a>
                            Barcelona
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/city/[id]' as={`/city/Long Beach`}>
                        <a>
                            Long Beach
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SearchForm

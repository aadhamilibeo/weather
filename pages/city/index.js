import React, { useState } from 'react'
import Link from 'next/link'
import Default from '../../layout/Default';

export default function index() {
    const [searchValue, setSearchValue] = useState("");
    return (
        <Default>
            <div className="container pt-5">
                <div className="text-center">
                    <h1>Please Enter Valid Country</h1>
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
                </div>
            </div>
        </Default>
    )
}

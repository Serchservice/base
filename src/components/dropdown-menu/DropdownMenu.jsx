import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import "./dropdown-menu.css";

function DropdownMenu({
    placeHolder = '',
    list = [{
        "category": "",
        "image": "",
        "key": ""
    }],
    isSearchable = false
}) {
    const [ open, setOpen ] = useState(false);
    const [ text, setText ] = useState(placeHolder);
    const [ index, setIndex ] = useState(-1);
    const [ search, setSearch ] = useState('');
    const dropdownRef = useRef(null);

    const handleOpenList = () => {
        setOpen(!open);
    }

    const handleSelect = (item = {
        "category": "",
        "image": "",
        "key": ""
    }) => {
        setText(item.category);
        setSearch("");
        // onSelected(item);
        setOpen(false);
    }

    const handleHover = (key) => {
        setIndex(key);
    }

    const hoverStyle = {
        backgroundColor: "#030001",
        color: "#fff",
        borderRadius: "0",
        fontSize: "14px",
        fontWeight: "500"
    }

    const filteredList = isSearchable ? list.filter((item) => {
        return item.category.toLowerCase().includes(search.toLowerCase());
    }) : list;

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="dropdown-menu" ref={dropdownRef}>
            <div onClick={handleOpenList} className="dropdown-toggle">
                {text}
                <div className={`dropdown-icon ${open ? 'rotate-180' : ''}`}>
                    <Icon icon="lucide:chevron-down" width="18" height="18" />
                </div>
            </div>
            {
                open && (
                    <div className="dropdown-list">
                        {isSearchable && (
                            <input
                                type="text"
                                placeholder="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="dropdown-input"
                            />
                        )}
                        {filteredList.map((item, key) => (
                            <a
                                key={key}
                                href={ `/${ item.key }` }
                                onMouseEnter={() => handleHover(key)}
                                onClick={() => handleSelect(item)}
                                className="dropdown-item"
                                style={index === key ? hoverStyle : { fontSize: "14px", fontWeight: "500" }}
                            >{ item.category }</a>
                        ))}
                    </div>
                )
            }
        </div>
    );
}

export default DropdownMenu;
import React from 'react';

interface FilterBarProps {
    onFilterChange: (type: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
    return (
        <select 
            className="filter-bar"
            onChange={(e) => onFilterChange(e.target.value)}
            defaultValue="all"
        >
            <option value="all">All Types</option>
            <option value="normal">Normal</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="electric">Electric</option>
            <option value="grass">Grass</option>
            <option value="ice">Ice</option>
            <option value="fighting">Fighting</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="flying">Flying</option>
            <option value="psychic">Psychic</option>
            <option value="bug">Bug</option>
            <option value="rock">Rock</option>
            <option value="ghost">Ghost</option>
            <option value="dragon">Dragon</option>
        </select>
    );
};

export default FilterBar;
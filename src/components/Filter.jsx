import PropTypes from 'prop-types'

function Filter({elements, attribute, outCallback}) {

    function filter(event){
        let target = event.target;
        let filteredElements = elements?.filter((element) => element[attribute] === target.value);
        outCallback(filteredElements);
    }

    return(
        <div>
            <label>Tipo</label>
            <select onChange={filter}>
                <option key="all" value="all">All</option>
                {
                    getDistinctValues(elements?.map((element) => element[attribute]))
                        .map((attr) => 
                            <option key={attr} value={attr}>{attr}</option>
                        )
                }
            </select>
        </div>
    )
}

function getDistinctValues(values){
    return Array.from(new Set(values));
}

Filter.propTypes = {
    elements: PropTypes.array,
    outCallback: PropTypes.func
}

export default Filter;
import PropTypes from 'prop-types'

function Filter({elements, attribute, outCallback}) {

    function filter(event){
        let target = event.target;
        let filteredElements = elements?.filter((element) => element[attribute] === target.value);
        outCallback(filteredElements);
    }

    return(
        <div className='p-4'>
            <div className='relative w-1/5 h-10'>
                <label 
                    className='flex w-full h-full select-none pointer-events-none absolute left-0 font-normal 
                    !overflow-visible truncate peer-placeholder-shown:text-gray-500 leading-tight peer-focus:leading-tight 
                    peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500 transition-all -top-1.5 
                    peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:block before:box-border before:w-2.5 
                    before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md 
                    before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none 
                    before:transition-all peer-disabled:before:border-transparent after:block after:flex-grow after:box-border after:w-2.5 
                    after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t 
                    peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent
                    peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-gray-900 before:border-gray-200 peer-focus:before:!border-gray-900 after:border-gray-200 peer-focus:after:!border-gray-900'>
                    Tipo</label>
                <select onChange={filter} 
                    className='border-t-transparent focus:border-t-transparent peer w-full h-full bg-black text-white 
                    font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-gray-50 disabled:border-0 transition-all 
                    placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 border focus:border-2 
                    text-sm px-3 py-2.5 rounded-[7px] border-gray-200 focus:border-white ring-0 focus:ring-0 active:ring-0 hover:ring-0'>
                    <option key="all" value="all">Todos</option>
                    {
                        getDistinctValues(elements?.map((element) => element[attribute]))
                            .map((attr) => 
                                <option key={attr} value={attr}>{attr}</option>
                            )
                    }
                </select>
            </div>
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
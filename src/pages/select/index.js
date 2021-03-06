import React from 'react'
import SelectAsync from 'react-select-async-paginate'
import { components } from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import loadOptions from "./loadOption";

const DropdownIndicator = props => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <FontAwesomeIcon icon={faSearch} />
      </components.DropdownIndicator>
    )
  );
};

const NoDataMessage = props => {
  return (
    <div>Tidak Ada</div>
  )
};


const colourOptions = []

const Select = () => {
  const [value, onChange] = React.useState(null);

  const shouldLoadMore = (scrollHeight, clientHeight, scrollTop) => {
    const bottomBorder = (scrollHeight - clientHeight) / 2;

    return bottomBorder < scrollTop;
  };

  const [text, setText] = React.useState(null)

  const onGenerate = () => {
    const result = text.split('\n')
    console.log(result)
  }

  return (
    <div>
      <SelectAsync
        placeholder={"Search..."}
        value={value}
        components={{DropdownIndicator}}
        loadOptions={loadOptions}
        debounceTimeout={500}
        onChange={onChange}
        shouldLoadMore={shouldLoadMore}
        noOptionsMessage={() => NoDataMessage() }
        isMulti
      />

      <textarea wrap="hard" rows={5} name="team" onChange={(text) => setText(text.target.value)}></textarea>
      <button onClick={onGenerate}>Generate</button>
    </div>
  )
}

export default Select
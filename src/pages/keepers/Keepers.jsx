import React, { useContext } from 'react'
import { keeperContext } from '../../context/keeperContext';

const Keepers = () => {

  const {storedKeeper} = useContext(keeperContext);
  console.log(storedKeeper, "keeperContext");

  return (
    <div>
      keeper details
    </div>
  )
}

export default Keepers

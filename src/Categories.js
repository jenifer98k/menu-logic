import React from 'react'

const Categories = ({filterItems}) => {
  return (
    <div>
     <button type="button" class="btn btn-outline-primary btn-sm m-2" onClick={()=>filterItems('all')}>All</button>
<button type="button" class="btn btn-outline-secondary btn-sm m-2" onClick={()=>filterItems('breakfast')}>BreakFast</button>
<button type="button" class="btn btn-outline-success btn-sm  m-2" onClick={()=>filterItems('lunch')}>Lunch</button>
<button type="button" class="btn btn-outline-danger btn-sm  m-2" onClick={()=>filterItems('juice')}>Juice</button>
<button type="button" class="btn btn-outline-warning btn-sm  m-2" onClick={()=>filterItems('dinner')}>Dinner</button> 
    </div>
  )
}

export default Categories

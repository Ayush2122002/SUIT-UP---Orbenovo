import React from 'react'
import "./Round3.css";
function Round3() {
  return (
    <div className="container_round3">
      <div className="heading">
        <h1>SUIT-UP</h1>
      </div>
      <div className="round3_heading"> Round 2 - Target Customers </div>
      <div> <p>Your percent outreach in the market is ____________ %</p></div>
      <div><p>Amount In Hand = ___________________</p></div>

      <div className="table_target_customer">
        <div className="col1_sno">
          <div>CITY TYPE</div>
          <div className='sno_entry'>1</div>
          <div className='sno_entry'>2</div>
          <div className='sno_entry'>3</div>
          <div className='sno_entry'>4</div>
          <div className='sno_entry'>5</div>
          <div className='sno_entry'>6</div>
          

        </div>
        <div className="col2_city">
        <div>PREFFERED CITY</div>
          <div className='city'><input type="text" className='city_input' /></div>
          <div className='city'><input type="text" className='city_input' /></div>
          <div className='city'><input type="text" className='city_input' /></div>
          <div className='city'><input type="text" className='city_input' /></div>
          <div className='city'><input type="text" className='city_input' /></div>
          <div className='city'><input type="text" className='city_input' /></div>
        </div>
      </div>
    </div>
  )
}

export default Round3
import React from 'react'
import "./Round4.css";
function Round4() {
  return (
    <div className='container_round4'>
      <div className="heading">
          <h1>SUIT-UP</h1>
      </div>
      <div className="round4_heading">Round 4 - Brand Ambassador</div>
      <div><p>Your percent outreach in the market is ____________ %</p></div>
    <div><p>Amount Remaining =  ___________________</p></div>

    <div className="ambassador_table">
        <div className="col1_sno">
            <div className="ambassador_code">Ambassador Code</div>
            <div className="ambassador_code"><input type="text" className='code_input' /></div>
            
        </div>
        <div className="col2_ambasodor_name">
            <div className="ambassador_name">Ambassador Name</div>
            <div className="ambassador_name"><input type="text" className='name_input' /></div>
            

        </div>
    </div>
    <div className="footer_round4">
    <div className='footer_round4-1'><p>    Base Price of the Ambassador:</p></div>
    <div className='footer_round4-1'><p>     Price Auctioned for:</p>
    </div>
    </div>
    </div>
  )
}

export default Round4

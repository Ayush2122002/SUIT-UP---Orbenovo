import React from 'react'
import "./Round3a.css";
function Round3a() {
  return (
    <div className="container_round3a">
        <div className="heading">
            <h1>SUIT-UP</h1>
        </div>
        <div className="round3a_heading"> Round 3a - Asset Management</div>
    <div><p>Your percent outreach in the market is ____________ %</p></div>
    <div><p>Amount Remaining = ___________________</p></div>

    <div><p>Purchasing Assets:</p></div>
    <div><p>Each Asset will cost you 1 Million. </p></div>
    <div className="asset_table">
        <div className="col1_sno">
            <div>#</div>
            <div className="sno_entry">1</div>
            <div className="sno_entry">2</div>
            <div className="sno_entry">3</div>
            <div className="sno_entry">4</div>
            <div className="sno_entry">5</div>
            <div className="sno_entry">6</div>
            
        </div>
        <div className="col2_asset">
            <div className="asset">Asset</div>
            <div className="asset">Servers and Data Storage</div>
            <div className="asset">Warehouse</div>
            <div className="asset">Logistics and Services</div>
            <div className="asset">Manufacturing Units</div>
            <div className="asset">R&D(includes licenses and patents)</div>
            <div className="asset">Customer Service and Feedback</div>
        </div>
        <div className="col3_choice">
            <div className="input_choice">Preffered
            choice</div>
            <div className="input_choice">
                <input type="text" className='choice_input' />
            </div>
            <div className="input_choice">
                <input type="text" className='choice_input' />
            </div>
            <div className="input_choice">
                <input type="text" className='choice_input' />
            </div>
            <div className="input_choice">
                <input type="text" className='choice_input' />
            </div>
            <div className="input_choice">
                <input type="text" className='choice_input' />
            </div>
            <div className="input_choice">
                <input type="text" className='choice_input' />
            </div>
        </div>
        
    </div>
    <div><p>Total amount spent in this round:</p></div>
        <div><p>Note: You can spend a maximum of 3 Million in this round.</p></div>
    </div>
  )
}

export default Round3a
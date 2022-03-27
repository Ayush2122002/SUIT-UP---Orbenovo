import React from 'react'
import "./Round2.css";
function Round2() {
  return (
    <div className='container_round2'>
        <div className="heading">
            <h1>SUIT-UP</h1>
        </div>
        <div className="team_details">
            <div className="team_info">SECTOR - __________</div>
            <div className="team_info">COMPANY CODE - ____</div>
            <div className="team_info">COMPANY NAME - ____</div>
          <p>*******************************************************</p>  
        </div>
        <div className="round1_heading">Round 1 - Investor's Round</div>
<div className="investor_round_table">
    <div className="invest_col1">
        <div className="matrix_A_category">*</div>
        <div className="matrix_A_category">Banks</div>
        <div className="matrix_A_category">Angel Investor</div>
        <div className="matrix_A_category">NBFCs</div>
    </div>
    <div className="invest_col2">
        <div className="matrix_A">4 Million</div>
        <div className="matrix_A_input">
            <div className="info_user"> 10% interest rate</div>
            <div className="user_input"><input  className="input_user"type="text" /></div>
        </div>
        <div className="matrix_A_input">
            <div className="info_user"> 10% equity rate</div>
            <div className="user_input"><input  className="input_user"type="text" /></div>
        </div>
        <div className="matrix_A_input">
            <div className="info_user"> 5% interest rate + 5% equity rate</div>
            <div className="user_input"><input  className="input_user"type="text" /></div>
        </div>
        
    </div>
    <div className="invest_col3">
        <div className="matrix_A">6 Million</div>
        <div className="matrix_A_input">
            <div className="info_user"> 12.5% interest rate</div>
            <div className="user_input"><input  className="input_user"type="text" /></div>
        </div>
        <div className="matrix_A_input">
            <div className="info_user"> 15% equity rate</div>
            <div className="user_input"><input  className="input_user"type="text" /></div>
        </div>
        <div className="matrix_A_input">
            <div className="info_user"> 6.25% interest rate + 6.25% equity rate</div>
            <div className="user_input"><input  className="input_user"type="text" /></div>
        </div>
        
    </div>
    <div className="invest_col4">
        <div className="matrix_A">10 Million</div>
        <div className="matrix_A_input">
            <div className="info_user"> 15% interest rate</div>
            <div className="user_input"><input  className="input_user"type="text" /></div>
        </div>
        <div className="matrix_A_input">
            <div className="info_user"> 15% equity rate</div>
            <div className="user_input"><input  className="input_user"type="text" /></div>
        </div>
        <div className="matrix_A_input">
            <div className="info_user"> 7.5% interest rate + 7.5% equity rate</div>
            <div className="user_input"><input  className="input_user"type="text" /></div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Round2
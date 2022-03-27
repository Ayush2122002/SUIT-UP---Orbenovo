import React from 'react'
import "./Report.css";
function Report() {
  return (
    <div className="container_report">
        <div className="heading">
            <h1>SUIT-UP</h1>
        </div>
        <div className="report_heading">Report Sheet</div>

        <div className="report_content">Company Name : ___________</div>
        <div className="report_content">Compony Code : ___________</div>
        <div className="report_content">Net Worth : ___________</div>
        <div className="report_content">Final Outreach : ___________</div>
        <div className="rank"> Rank amongst competitors (1/ 2/ 3)</div>
    <div className="positon">Position in the Game:  ______________________</div>
<div className="footer_report1">Thank You for participating in </div>
<div className="footer_report2">SUIT UP </div>

    </div>
  )
}

export default Report
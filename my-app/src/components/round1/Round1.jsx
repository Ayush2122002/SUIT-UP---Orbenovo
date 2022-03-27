import React from "react";
import "./Round1.css";
function Round1() {
  return (
    <div className="container_round1">
      <div className="heading">
        {" "}
        <h1>SUIT-UP</h1>
      </div>
      <div className="round_heading1">Round 3a - Hiring Employees</div>
      <div className="table_round1">
        <div className="column1_round1">
          <div className="round1_1">#</div>
          <div className="round1_1">Experrience Professional</div>
          <div className="round1_1"> Professionals</div>
          <div className="round1_1">Amature</div>
        </div>
        <div className="column2_round1">
          <div className="round1_1">IT</div>
          <div className="round1_1">
            <input className="round1_input" type="text" />
          </div>
          <div className="round1_1">
            <input className="round1_input" type="text" />
          </div>
          <div className="round1_1">
            <input className="round1_input" type="text" />
          </div>
        </div>
        <div className="column3_round1">
          <div className="round1_1">Marketing</div>
          <div className="round1_1">
            <input className="round1_input" type="text" />
          </div>
          <div className="round1_1">
            <input className="round1_input" type="text" />
          </div>
          <div className="round1_1">
            <input className="round1_input" type="text" />
          </div>
        </div>
        <div className="column4_round1">
          <div className="round1_1">R&D and Manufacturing</div>
          <div className="round1_1">
            <input className="round1_input" type="text" />
          </div>
          <div className="round1_1">
            <input className="round1_input" type="text" />
          </div>
          <div className="round1_1">
            <input className="round1_input" type="text" />
          </div>
        </div>
        <div className="column5_round1">
          <div className="round1_1">Logistics</div>
          <div className="round1_1">
            <input className="round1_input" type="text" />
          </div>
          <div className="round1_1">
            <input className="round1_input" type="text" />
          </div>
          <div className="round1_1">
            <input className="round1_input" type="text" />
          </div>
        </div>
      </div>
      <p>Total amount spent :</p>
      <p>Total amount remaining :</p>
      <div className="table2_round1">
        <table className="Cost_structure_table">
          <tr className="row_round1">
            <td className="table_component"></td>
            <td className="table_component">Price</td>
            <td className="table_component">Equity</td>
          </tr>
          <tr className="row_round1">
          <td className="table_component">Experienced Professionals</td>
          <td className="table_component">125k</td>
          <td className="table_component">0.75%</td>
          </tr>
          <tr className="row_round1">
          <td className="table_component">Professionals</td>
          <td className="table_component">75k</td>
          <td className="table_component">0.25</td>
          </tr>
          <tr className="row_round1">
          <td className="table_component">Amateurs</td>
          <td className="table_component">25</td>
          <td className="table_component">0</td>
          </tr>
        </table>
      </div>
      <p>NOTE : You can spend a maximum of 3 Million in this round.</p>
    </div>
  );
}

export default Round1;

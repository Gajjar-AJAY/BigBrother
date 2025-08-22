import React from "react";
import { SquarePen, Trash2 } from "lucide-react";
function CustomerList() {
  return (
    <div className="content-section active">
      <h2 className="page-title">Customer List</h2>

      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Company Name</th>
              <th>Client Name</th>
              <th>Mobile No</th>
              <th>GST</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>TechSoft Pvt Ltd</td>
              <td>John Doe</td>
              <td>+91 9876543210</td>
              <td>GST12345</td>
              <td>
                <div class="action-icons">
                  <SquarePen />
                  <Trash2 />
                </div>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Innova Corp</td>
              <td>Jane Smith</td>
              <td>+91 9123456780</td>
              <td>GST67890</td>
              <td>
                <div class="action-icons">
                  <SquarePen />
                  <Trash2 />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerList;

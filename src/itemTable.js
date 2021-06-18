import React from "react";
import MoreDetail from "./moreDetail";

function Usertable(props) {
  return (
    <tbody>
      <tr>
        <th class="col-sm-3">141 Capital INC</th>
        <td
          class="col-sm-3"
          style={{
            color: "blue",
            fontWeight: "bold",
            backgroundColor: "lightblue"
          }}
        >
          <li>ONCP</li>
        </td>
        <td class="col-sm-3">$145.4k</td>
        <td class="col-sm-3">
          <button class="btn btn-primary">View</button>
        </td>
        <td class="col-sm-3">$0.001 USD</td>
        <td class="col-sm-3">
          {" "}
          <MoreDetail item={props.item.data} />
        </td>
      </tr>
      <tr>
        <th class="col-sm-3">Cardlytics Inc</th>
        <td
          class="col-sm-3"
          style={{
            color: "blue",
            fontWeight: "bold",
            backgroundColor: "lightblue"
          }}
        >
          <li>CDLX</li>
        </td>
        <td class="col-sm-3">$1.8B</td>
        <td class="col-sm-3">
          <button class="btn btn-primary">Save Data</button>
        </td>
        <td class="col-sm-3">$66 USD</td>
        <td class="col-sm-3">
          {" "}
          <MoreDetail item={props.item.data} />
        </td>
      </tr>
      <tr>
        <th class="col-sm-3">Brightcove Inc</th>
        <td
          class="col-sm-3"
          style={{
            color: "blue",
            fontWeight: "bold",
            backgroundColor: "lightblue"
          }}
        >
          <li>BCOV</li>
        </td>
        <td class="col-sm-3">$394M</td>
        <td class="col-sm-3">
          <button class="btn btn-primary">Save Data</button>
        </td>
        <td class="col-sm-3">$10 USD</td>
        <td class="col-sm-3">
          {" "}
          <MoreDetail item={props.item.data} />
        </td>
      </tr>
    </tbody>
  );
}

export default Usertable;

const Cancellation=()=>{
  return <div>

<div>Cancellation policy</div>
<table
  style={{
    borderRadius: "10px",
    overflow: "hidden",
    border: "1px solid lightgrey",
  }}
>
  <thead>
    <tr>
      <th
        style={{
          padding: "10px 20px",
          borderBottom: "1px solid lightgrey",
          borderRight: "1px solid lightgrey",   
          backgroundColor:"#ced1eaff"
        }}
      >
        Time before travel
      </th>

      <th
        style={{
          padding: "10px 20px",
          borderBottom: "1px solid lightgrey",
          backgroundColor:"#ced1eaff",
        }}
      >
        Deduction
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td
        style={{
          padding: "8px 20px",
          borderBottom: "1px solid lightgrey",
          borderRight: "1px solid lightgrey",   
          backgroundColor:"#f7e7df",
        }}
      >
        Before 27th Dec 06:00 PM
      </td>

      <td style={{backgroundColor:"#f7e7df", padding: "8px 20px", borderBottom: "1px solid lightgrey" }}>
        ₹91 / 118 (28%)
      </td>
    </tr>

    <tr>
      <td
        style={{
          padding: "8px 20px",
          borderBottom: "1px solid lightgrey",
          borderRight: "1px solid lightgrey",   
        }}
      >
        From 27th Dec 06:00 PM Until 27th Dec 10:00 PM
      </td>

      <td style={{ padding: "8px 20px", borderBottom: "1px solid lightgrey" }}>
        ₹181 / 235 (56%)
      </td>
    </tr>

    <tr>
      <td
        style={{
          padding: "8px 20px",
          borderRight: "1px solid lightgrey",   
        }}
      >
        From 27th Dec 10:00 PM Until 28th Dec 06:00 AM
      </td>

      <td style={{ padding: "8px 20px" }}>
        ₹363 / 470 (112%)
      </td>
    </tr>
  </tbody>
</table>


<div style={{fontSize:"small",color:"grey",gap:"10px"}}>
* Cancellation charges are computed on a per seat basis. Above cancellation fare is calculated based <br/>on seat fare of ₹ 324 <br/>
* Cancellation charges are calculated based on service start date + time at :28-12-2025 06:30<br/>
* Ticket cannot be cancelled after scheduled bus departure time from the first boarding point<br/>
* Note: Cancellation charges mentioned above are excluding GST<br/>
* For group bookings cancellation of individual seats is not allowed.<br/>
</div>

  </div>
}
export default Cancellation;
const DateChangePolicy=()=>{
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
        Date change charges
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td
        style={{
          padding: "8px 20px",
          borderRight: "1px solid lightgrey",   
          
        }}
      >
        Before 27th Dec 06:00 PM
      </td>

      <td style={{ padding: "8px 20px",  }}>
        FREE
      </td>
    </tr>

  </tbody>
</table>






 </div>
}
export default DateChangePolicy;
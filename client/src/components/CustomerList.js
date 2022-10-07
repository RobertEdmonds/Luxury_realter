import React, { useEffect, useState } from "react";
import "../styles/CustomerList.css";

function CustomerList() {
  const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    fetch("/customers")
      .then((resp) => resp.json())
      .then((person) => setCustomerList(person));
  }, []);

  function handleComplete(sched) {
    fetch(`/schedules/${sched.id}`, {
      method: "DELETE",
    }).then((resp) => {
      if (resp.ok) {
        handleScheduleComplete(sched);
      }
    });
  }

  function handleScheduleComplete(schedule) {
    console.log(schedule)
    const updatedItem = customerList.map(cust => {
        if(cust.id === schedule.customer_id){
            const updateSched = cust.schedules.filter(sched => sched.id !== schedule.id)
            cust.schedules = updateSched
            return cust
        }else{
            return cust
        }
    })
    setCustomerList(updatedItem);
  }

  const displayCustomer = customerList.map((cust) => {
    return (
      <div key={cust.id} className="custColumn">
        <h4 className="custRow">{cust.id}</h4>
        <h4 className="custRow">{cust.full_name}</h4>
        <h4 className="custRow">{cust.email}</h4>
        <h4 className="custRow">{cust.phone_number}</h4>
        <h4 className="custRow">Appointments</h4>
        <div style={{ width: "29rem" }}>
          <ul>
            {cust.schedules.map((sched) => {
              return (
                <>
                  <li>
                    <p>Address: {sched.house.address}</p> {sched.day} {sched.time}pm
                    <button
                      style={{ marginLeft: ".1rem" }}
                      onClick={() => handleComplete(sched)}
                    >
                      Complete
                    </button>
                  </li>
                </>
              );
            })}
          </ul>
          {/* <ul style={{ float: "right", paddingLeft: "0rem" }}>
            {cust.houses.map((house) => {
              return <li>{house.address}</li>;
            })}
          </ul> */}
        </div>
      </div>
    );
  });

  const setRem = customerList.length * 10;

  return (
    <div style={{ marginTop: "6.2rem", minHeight: `${setRem.toString()}rem` }}>
      {displayCustomer}
    </div>
  );
}

export default CustomerList;

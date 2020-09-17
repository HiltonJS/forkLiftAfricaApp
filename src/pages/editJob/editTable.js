import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editJob, getUsers } from "../../redux/data/dataActions";

const EditJob = ({ match }) => {
  const jobs = useSelector((state) => state.data.jobs);

  const _id = match.params._id;
  const job = jobs.filter((job) => {
    return job._id === _id;
  });

  const jobObject = job[0];
  console.log(jobObject["client"]);
  const dispatch = useDispatch();
  const [users, setUsers] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Choose an Option");
  const [selectedOptions, setSelectedOptions] = useState("Choose an Option");
  const loading = useSelector((state) => state.data.loading);
  const newUsers = useSelector((state) => state.data.users);

  console.log(loading);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const [client, setclient] = useState(jobObject["client"]);
  const [phone, setphone] = useState(jobObject["phone"]);
  const [problem, setproblem] = useState(jobObject["problem"]);
  const [assigned, setassigned] = useState(jobObject["assigned"]);
  const [assignedEmail, setassignedEmail] = useState(
    jobObject["assignedEmail"]
  );
  const [status, setstatus] = useState(jobObject["status"]);
  const [hours, setHours] = useState(jobObject["hours"]);
  const [make, setMake] = useState("make");
  const [descriptionOfWork, setDescriptionOfWork] = useState(
    jobObject["descriptionOfWork"]
  );
  const [parts, setParts] = useState(jobObject["parts"]);
  const [consumables, setConsumables] = useState(jobObject["consumables"]);
  const [labourHrs, setLabourHrs] = useState(jobObject["labourHrs"]);
  const [travel, setTravel] = useState(jobObject["travel"]);
  const [subTotal, setSubtotal] = useState(jobObject["subTotal"]);
  const [vat, setVat] = useState(jobObject["vat"]);
  const [total, setTotal] = useState(jobObject["total"]);
  const [otherComments, setOtherComments] = useState(
    jobObject["otherComments"]
  );
  const [type, setType] = useState(jobObject["type"]);
  const [created_at, setCreated_At] = useState(Date.now());

  const handleSubmit = (event) => {
    event.preventDefault();
    const record = {
      _id,
      client,
      phone,
      problem,
      assigned,
      assignedEmail,
      status,
      hours,
      make,
      descriptionOfWork,
      parts,
      consumables,
      labourHrs,
      travel,
      subTotal,
      vat,
      total,
      otherComments,
      type,
      created_at,
    };

    dispatch(editJob(record));
    console.log(record);
  };
  return (
    <div>
      <div className="container pt-4">
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Client</label>
              <input
                type="text"
                name="client"
                onChange={(event) => setclient(event.target.value)}
                class="form-control"
                id="inputclient"
                placeholder={client}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Phone</label>
              <input
                type="text"
                name="phone"
                class="form-control"
                id="inputphone"
                onChange={(event) => setphone(event.target.value)}
                placeholder={phone}
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="exampleFormControlSelect1">Techician</label>
              <select
                class="form-control"
                onChange={(event) => setassigned(event.target.value)}
                id="exampleFormControlSelect1"
              >
                {loading ? (
                  <option>Nothing</option>
                ) : (
                  newUsers.map((user) => (
                    <option value={user.name}>{user.name}</option>
                  ))
                )}
              </select>
            </div>
            <div class="form-group col-md-6">
              <label for="exampleFormControlSelect1">Techician Email</label>
              <select
                class="form-control"
                onChange={(event) => setassignedEmail(event.target.value)}
                id="exampleFormControlSelect1"
              >
                {loading ? (
                  <option>Nothing</option>
                ) : (
                  newUsers.map((user) => (
                    <option value={user.email}>{user.name}</option>
                  ))
                )}
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="exampleFormControlSelect1">Status</label>
              <select
                onChange={(event) => setstatus(event.target.value)}
                class="form-control"
                id="exampleFormControlSelect1"
              >
                <option value="none">Choose an option</option>
                <option value="Open">Open</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label for="exampleFormControlSelect1">Type</label>
              <select
                onChange={(event) => setType(event.target.value)}
                class="form-control"
                id="exampleFormControlSelect1"
              >
                <option value="none">Choose an option</option>
                <option value="Normal">Normal</option>
                <option value="Urgent">Urgent</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Problem</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="problem"
              onChange={(event) => setproblem(event.target.value)}
            ></textarea>
          </div>
          <button type="submit" onClick={handleSubmit} class="btn btn-success ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default EditJob;

import React from "react";
import MaterialTable from "material-table";
import { useDipatch, useSelector, useDispatch } from "react-redux";
import { getJobs } from "../../redux/data/dataActions";
export default function MaterialTableDemo({ jobs }) {
  const allJobs = [...jobs];
  const [state, setState] = React.useState({});
  const columns = [
    { title: "Client", field: "_id" },
    { title: "Phone Number", field: "phone" },
    { title: "Assigned", field: "assigned" },
    {
      title: "",
      field: "birthCity",
      lookup: { 34: "İstanbul", 63: "Şanlıurfa", 78: "St Alberts" },
    },
  ];
  const data = allJobs;

  return (
    <>
      {console.log(jobs)}
      <MaterialTable
        title="Editable Example"
        columns={columns}
        data={data}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState((prevState) => {
                    const data = [...prevState.data];

                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),

          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />
    </>
  );
}

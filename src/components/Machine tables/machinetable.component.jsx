

import React from 'react';
import {Link} from 'react-router-dom'

const MusicTable = ({ inventory }) => {
  return (
    <div>
      <h4 className="text-center  p-4 text-uppercase">Birth Certificates</h4>
      <table className="table table-hover shadow p-3 mb-5 bg-white rounded">
        <thead className="thead-dark">
          <tr>
            <th scope="col"> Make</th>
            <th scope="col"> Model</th>
            <th scope="col">Capacity</th>
            <th scope="col">Serial</th>
        
            <th scope="col"> View More</th>
          </tr>
        </thead>
        <tbody>
          {inventory=== [] ? (
            <tr>
              <th></th>
              <th></th>
              <th>Nothing to show</th>
            </tr>
          ) : (
            inventory.map((tory) => {
              return (
                <tr key={tory.serial}>
                  <th scope="row" >{tory.make}</th>
                  <td>{tory.model}</td>
                  <td>{tory.capacity}</td>
                  <td>
                    <a href={tory.serial} target="blank">
                      Download
                    </a>
                  </td>
                  <td>
                  <button className="btn btn-success btn-sm"> <Link to={{pathname:"/singleMachine",fork:tory}} > Click to view </Link> </button>  
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};
export default MusicTable;

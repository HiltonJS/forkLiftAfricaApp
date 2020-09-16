import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../../redux/data/dataActions";
import { setUser } from "../../redux/user/userActions";

const Fulfil = () => {
  const dispatch = useDispatch();

  const jobs = useSelector((state) => state.data.jobs);

  const user = useSelector((state) => state.user.user);
  console.log(jobs);
  console.log(user);

  useEffect(() => {
    dispatch(getJobs());
    // dispatch(setUser());
  }, [dispatch]);
  const techinicianJobs = jobs.filter((job) => job.assigned === user.name);
  console.log(techinicianJobs);

  return <div></div>;
};

export default Fulfil;

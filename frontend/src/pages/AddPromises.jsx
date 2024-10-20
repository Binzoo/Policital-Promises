import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddPromises() {
  const [promiseDescription, setpromiseDescription] = useState();
  const [DateMade, setDateMade] = useState();
  const [PromisingParty, setPromisingParty] = useState();
  const [PromisingIndividual, setPromisingIndividual] = useState();
  const [PromiseStatus, setPromiseStatus] = useState();
  const [Deadline, setDeadline] = useState();
  const [RegionCountry, setRegionCountry] = useState();
  const [Category, setCategory] = useState();
  const [Progress, setProgress] = useState();
  const [Notes, setNotes] = useState();

  function AddPromiseButton(event) {
    event.preventDefault();

    const config = {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InN0cmluZyIsIm5iZiI6MTcyOTQ0MTI3OCwiZXhwIjoxNzI5NTI3Njc4LCJpYXQiOjE3Mjk0NDEyNzgsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTI4NyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTI4NyJ9.Mbw6PSfcI4rdzSdgOLSXBjRHnfwHfltUXMw6aiK2PSo"}`,
      },
    };
    axios
      .post(
        "https://localhost:7119/api/Promises",
        {
          id: 0,
          promiseDescription: promiseDescription,
          dateMade: DateMade,
          promisingParty: PromisingParty,
          promisingIndividual: PromisingIndividual,
          promiseStatus: PromiseStatus,
          deadLine: Deadline,
          regionCountry: RegionCountry,
          category: Category,
          progress: parseInt(Progress, 10),
          notes: Notes,
        },
        config
      )
      .then((response) => {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 5000,
        });
      })
      .catch((error) => {
        console.log("Request failed:", error.response);
        toast.error("Error occurred!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
        });
      });
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="col-md-8 mx-auto">
        <div className="card shadow-sm">
          <div className="card-body">
            <h3 className="text-center mb-4">Add a Promise</h3>
            <form onSubmit={AddPromiseButton}>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Promise Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows="3"
                  onChange={(e) => setpromiseDescription(e.target.value)}
                  required
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="dateMade" className="form-label">
                  Date Made
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="dateMade"
                  name="dateMade"
                  //   value={promiseData.dateMade}
                  onChange={(e) => setDateMade(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="promisingParty" className="form-label">
                  Promising Party
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="promisingParty"
                  name="promisingParty"
                  //   value={promiseData.promisingParty}
                  onChange={(e) => setPromisingParty(e.target.value)}
                  placeholder="Enter the promising party"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="promisingIndividual" className="form-label">
                  Promising Individual
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="promisingIndividual"
                  name="promisingIndividual"
                  //   value={promiseData.promisingIndividual}
                  onChange={(e) => setPromisingIndividual(e.target.value)}
                  placeholder="Enter the promising individual"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="status" className="form-label">
                  Promise Status
                </label>
                <select
                  className="form-control"
                  id="status"
                  name="status"
                  //   value={promiseData.status}
                  onChange={(e) => setPromiseStatus(e.target.value)}
                  required
                >
                  <option value="">Select status</option>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="deadline" className="form-label">
                  Deadline
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="deadline"
                  name="deadline"
                  //   value={promiseData.deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="region" className="form-label">
                  Region/Country
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="region"
                  name="region"
                  //   value={promiseData.region}
                  onChange={(e) => setRegionCountry(e.target.value)}
                  placeholder="Enter the region or country"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="category"
                  name="category"
                  //   value={promiseData.category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Enter the category"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="progress" className="form-label">
                  Progress
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="progress"
                  name="progress"
                  //   value={promiseData.progress}
                  onChange={(e) => setProgress(e.target.value)}
                  placeholder="Enter progress (e.g., 50%)"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="notes" className="form-label">
                  Notes
                </label>
                <textarea
                  className="form-control"
                  id="notes"
                  name="notes"
                  rows="3"
                  //   value={promiseData.notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Additional notes"
                ></textarea>
              </div>

              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-dark">
                  Add Promise
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AddPromises;

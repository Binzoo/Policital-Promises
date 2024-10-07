function AddPromises() {
  return (
    <div className="container mt-5 mb-5">
      <div className="col-md-8 mx-auto">
        <div className="card shadow-sm">
          <div className="card-body">
            <h3 className="text-center mb-4">Add a Promise</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Promise Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows="3"
                  //   value={promiseData.description}
                  //   onChange={handleChange}
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
                  //   onChange={handleChange}
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
                  //   onChange={handleChange}
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
                  //   onChange={handleChange}
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
                  //   onChange={handleChange}
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
                  //   onChange={handleChange}
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
                  //   onChange={handleChange}
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
                  //   onChange={handleChange}
                  placeholder="Enter the category"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="progress" className="form-label">
                  Progress
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="progress"
                  name="progress"
                  //   value={promiseData.progress}
                  //   onChange={handleChange}
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
                  //   onChange={handleChange}
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
    </div>
  );
}

export default AddPromises;

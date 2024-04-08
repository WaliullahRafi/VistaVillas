import React from "react";

function Test() {
  return (
    <div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id=""
          className="input input-bordered"
        />
      </div>

      <div>
        <label htmlFor="image">Photo URL</label>
        <input type="file" name="image" id="" />
        <input type="submit" value="Submit" className="btn" />
      </div>
    </div>
  );
}

export default Test;

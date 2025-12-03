import React from "react";

function AddReview(props) {
  const { addReviews } = props;
  const submitHandler = (event) => {
    event.preventDefault();
    const newReview = {};
    Object.assign(newReview, {
      name: event.target["name"].value,
      email: event.target["email"].value,
      review: event.target["review"].value,
    });
    addReviews((review) => {
      return [...review, newReview];
    });

    localStorage.setItem("review", [newReview]);

    event.target["name"].value = "";
    event.target["email"].value = "";
    event.target["review"].value = "";
  };
  return (
    <form noValidate onSubmit={submitHandler}>
      <header className="text-center font-bold text-xl">Review</header>
      <div>
        <label htmlFor="name" className="flex items-start">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="border-2 border-solid border-black p-1 w-full"
        />
      </div>
      <div>
        <label htmlFor="email" className="flex items-start">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="border-2 border-solid border-black p-1 w-full"
        />
      </div>
      <div>
        <label htmlFor="review" className="flex items-start">
          Review
        </label>
        <textarea
          type="text"
          name="review"
          id="review"
          rows={5}
          className="border-2 border-solid border-black p-1 w-full"
        />
      </div>

      <div className="flex justify-end mt-5">
        <button
          type="submit"
          className="border-2 border-white border-solid p-1 cursor-pointer select-none rounded-sm bg-sky-500 w-50 text-white font-bold hover:text-black"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default AddReview;

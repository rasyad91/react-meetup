import Card from "../ui/Card";
import { useRef } from "react";
import css from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const newMeetupData = {
      title:enteredTitle,
      image:enteredImage,
      address:enteredAddress,
      description:enteredDescription
    };

    props.onAddNewMeetup(newMeetupData)
  }

  return (
    <Card>
      <form className={css.form} onSubmit={submitHandler}>
        <div className={css.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef}></input>
        </div>
        <div className={css.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef}></input>
        </div>
        <div className={css.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            id="address"
            ref={addressInputRef}
          ></input>
        </div>
        <div className={css.control}>
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            required
            id="description"
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={css.actions}>
          <button>Submit</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;

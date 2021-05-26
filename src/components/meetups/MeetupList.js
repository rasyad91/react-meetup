import MeetupItem from "./MeetupItem";
import css from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={css.list}>
      {props.meetups.map((m) => (
        <MeetupItem
          key={m.id}
          id={m.id}
          image={m.image}
          title={m.title}
          address={m.address}
          description={m.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;

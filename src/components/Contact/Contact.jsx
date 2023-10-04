export const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div>
      {name}: {number}
      <button
        className="ContactButton"
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

const BtnContainer = ({ currentItem, setCurrentItem, jobs }) => {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button
            key={item.id}
            onClick={() => setCurrentItem(index)}
            className={`job-btn ${index === currentItem && `active-btn`}`}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;

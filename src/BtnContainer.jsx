const BtnContainer = ({ currentItem, setCurrentItem, jobs }) => {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <div key={item.id} className="btn-container">
            <button
              onClick={() => setCurrentItem(index)}
              className={
                index === currentItem ? `job-btn active-btn` : `job-btn`
              }
            >
              {item.company}
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default BtnContainer;

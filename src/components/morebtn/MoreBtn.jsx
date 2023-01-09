import './MoreBtn.css'

const MoreBtn = ({open}) => {
  return (
    <div className={`morebtn ${open? "nomore" : ""}`}>
        <p>More Projects</p>
        <i className="fa-solid fa-plus"></i>
    </div>
  )
}

export default MoreBtn
import './Cover.css'

const Cover = ({src, alt}) => {
  return (
    <div className='cover'>
       <img src={src} alt={alt} />
    </div>
  )
}

export default Cover
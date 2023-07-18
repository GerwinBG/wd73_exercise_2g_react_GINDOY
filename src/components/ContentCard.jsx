function ContentCard (props) {
  const { name, description} = props;

  return (
    <>
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">{name}</h1>
        <p className="card-text">{description}</p>
      </div>
    </div>
    </>
  )
}

export default ContentCard
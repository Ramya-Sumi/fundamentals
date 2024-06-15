const profile = (props) => {
    const { img, name, age, designation, address, number } = props;
  
    return (
      <article className='profile'>
        <img src={img} alt={name} />
        <h2>Name: {name}</h2>
        <h3>designation: {designation}</h3>
        <h4>Age: {age} </h4>
        <h5>Location: {address} </h5>
        <span className='number'>#{number+1}</span>
      </article>
    );
  };
  
export default profile;
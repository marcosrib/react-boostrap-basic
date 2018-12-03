import React from 'react'

const ReleaseForm = ({submitHandler}) => {
  let _name, _data;
  const handleSubmit = (e) => {
    console.log('teste');
    console.log(_name);
    console.log(_data);
    submitHandler(e,{
      name: _name.value,
      data: _data.value });
    

  }
  return (

    <form onSubmit={handleSubmit} className="form-inline">
      <label className="sr-only" for="inlineFormInputName2">Name</label>
      <input type="text" ref={input => _name = input} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="relese name" />

      <label className="sr-only" for="inlineFormInputGroupUsername2">Username</label>
      <div className="input-group mb-2 mr-sm-2">
        <div className="input-group-prepend">
          <div className="input-group-text">@</div>
        </div>
        <input type="text"  ref={input => _data = input} className="form-control" id="inlineFormInputGroupUsername2" placeholder="Username" />
      </div>
      <button type="submit" class="btn btn-primary mb-2">Submit</button>
    </form>
  )

} 

export default ReleaseForm
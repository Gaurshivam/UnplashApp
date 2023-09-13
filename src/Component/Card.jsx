import React from 'react';

const Card = ({photo}) => {
  return (
    <>
       {
          photo.map((item,i)=>{
            return(
              <div key={i} style={{position:"relative",marginTop:"20px"}} >
              <img src={item.urls.regular} alt='Photounplas' style={{objectFit:"cover",margin:"10px"}} height={450} width={370}  />
              <h2 style={{position:"absolute",top:"0px",left:"20px",color:"white"}}>{item.user.name}</h2>
              <p style={{position:"absolute",top:"40px",left:"20px",color:"gold",width:"150px",fontWeight:"bolder"}}>{item.user.bio}</p>
              <h3 style={{position:"absolute",bottom:"0px",left:"20px",color:"white"}}>Likes : {item.likes}</h3>
              </div>
            )
          })
        }
    </>
  );
}

export default Card;

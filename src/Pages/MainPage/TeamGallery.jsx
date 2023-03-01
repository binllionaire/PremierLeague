import React from 'react';
 import { useEffect,useState } from "react";
 const TeamGallery = ({team}) => {
 return (
    <div class="div-center gallery">
        <div id="gallery">
    {
      team.map((team)=>{
        return(     
            <div> {team && <img src={team.img} alt={team.name} />}</div>
        )
      })
    }
    </div>
    </div>
  );
};

export default TeamGallery;
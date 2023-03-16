import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <>
    <div className="single">
      <div className="content">
        <img src="https:images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https:images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>Pedro</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Hic nam ea alias qui incidunt accusantium eligendi vitae, 
          culpa, quidem maiores distinctio aspernatur provident iste 
          dolorem quasi fugit harum quas illum.Lorem ipsum dolor, sit 
          amet consectetur adipisicing elit.Hic nam ea alias qui incidunt 
          accusantium eligendi vitae, culpa, quidem maiores distinctio 
          aspernatur provident iste dolorem quasi fugit harum quas illum.
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Hic nam ea alias qui incidunt accusantium eligendi vitae, 
          culpa, quidem maiores distinctio aspernatur provident iste 
          dolorem quasi fugit harum quas illum.Lorem ipsum dolor, sit 
          amet consectetur adipisicing elit.Hic nam ea alias qui incidunt 
          accusantium eligendi vitae, culpa, quidem maiores distinctio 
          aspernatur provident iste dolorem quasi fugit harum quas illum.
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Hic nam ea alias qui incidunt accusantium eligendi vitae, 
          culpa, quidem maiores distinctio aspernatur provident iste 
          dolorem quasi fugit harum quas illum.Lorem ipsum dolor, sit 
          amet consectetur adipisicing elit.Hic nam ea alias qui incidunt 
          accusantium eligendi vitae, culpa, quidem maiores distinctio 
          aspernatur provident iste dolorem quasi fugit harum quas illum.
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Hic nam ea alias qui incidunt accusantium eligendi vitae, 
          culpa, quidem maiores distinctio aspernatur provident iste 
          dolorem quasi fugit harum quas illum.Lorem ipsum dolor, sit 
          amet consectetur adipisicing elit.Hic nam ea alias qui incidunt 
          accusantium eligendi vitae, culpa, quidem maiores distinctio 
          aspernatur provident iste dolorem quasi fugit harum quas illum.
        </p>
      </div>
      <Menu/>
    </div>
    </>
  )
}

export default Single
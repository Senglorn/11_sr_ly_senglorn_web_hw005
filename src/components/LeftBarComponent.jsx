import React from 'react'
import category from '../images/category_icon.png';
import cube from '../images/cube.png';
import list from '../images/list.png';
import messager from '../images/messenger.png';
import success from '../images/success.png';
import security from '../images/security.png';
import users from '../images/users.png';
import lachlan from '../images/lachlan.jpg';
import raamin from '../images/raamin.jpg';
import nonamesontheway from '../images/nonamesontheway.jpg';
import plus from '../images/plus.png';


export default function LeftBarComponent() {
  return (
    <div className='sticky top-0 bg-blue-50 h-screen'> 
        <ul className='pt-10'>
          <li className='flex items-center justify-center'><img className='w-7' src={category} alt="" /></li>
        </ul>

        <ul className='mt-10'>
          <li className='flex items-center justify-center py-3'><img className='w-7' src={cube} alt="" /></li>
          <li className='flex items-center py-3 justify-center'>
            <div class="relative">
              <img class="w-7 h-7" src={list} alt=""/>
              <p class="top-0 left-5 absolute  w-2 h-2 bg-red-400 rounded-full" > </p>
            </div>
          </li>
          <li className='flex items-center py-3 justify-center'>
            <div class="relative">
            <img className='w-7' src={messager} alt="" />
              <p class="top-0 left-5 absolute  w-2 h-2 bg-red-400 rounded-full" > </p>
            </div>
          </li>
          <li className='flex items-center justify-center py-3'><img className='w-7' src={list} alt="" /></li>
        </ul>

        <ul className='my-10'>
          <li className='flex items-center justify-center py-3'><img className='w-7' src={success} alt="" /></li>
          <li className='flex items-center justify-center py-3'><img className='w-7' src={security} alt="" /></li>
          <li className='flex items-center justify-center py-3'><img className='w-7' src={users} alt="" /></li>
        </ul>

        <ul>
          <li className='flex items-center justify-center py-3'><img className='w-8 h-8 rounded-[50%]' src={lachlan} alt="" /></li>
          <li className='flex items-center justify-center py-3'><img className='w-8 h-8 rounded-[50%]' src={raamin} alt="" /></li>
          <li className='flex items-center justify-center py-3'><img className='w-8 h-8 rounded-[50%]' src={nonamesontheway} alt="" /></li>
          <li className='flex items-center justify-center py-3'><img className='w-7' src={plus} alt="" /></li>
        </ul>
    </div>
  )
}

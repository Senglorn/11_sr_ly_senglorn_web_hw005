import React from "react";
import notification from '../images/notification.png';
import commnent from '../images/comment.png';
import lachlan from '../images/lachlan.jpg';
import raamin from '../images/raamin.jpg';
import nonamesontheway from '../images/nonamesontheway.jpg';
import christina from '../images/christina.jpg';

export default function RightBarClomponent() {
  return (
    <div className="sticky top-0 h-screen">
      {/* icon block */}
      <div className="mr-10">
        <div>
            <ul class="flex justify-end flex-col px-4 mt-4 rounded-lg space-x-4 md:flex-row">
              <li className='py-3'><img className='w-7 block' src={notification} alt="" /></li>
              <li className='py-3'><img className='w-7 block' src={commnent} alt="" /></li>
              <li className='py-3'><img className='w-7 h-7 block rounded-[50%] ' src={lachlan} alt="" /></li>
          </ul>
        </div>

        <div className="mt-5 flex justify-end">
          <p className="bg-yellow-100 font-medium capitalize p-1 px-4 rounded-lg text-center">my amazing trip</p>
        </div>
        
      </div>
      
      {/* content */}
      <div className="mt-10 ml-5">
        <p className="text-2xl font-normal">I like aying down on the sand and looking at the moon.</p>
      </div>

      {/* icon buttom */}
      <div className="mt-20">
        <p className="ml-5 font-bold">26 people going to this trip</p>
          <ul class="flex justify-starrt flex-col px-4 mt-1 rounded-lg space-x-4 md:flex-row">
            <li className='py-3'><img className='w-9 h-9 block rounded-[50%] ' src={lachlan} alt="" /></li>
            <li className='py-3'><img className='w-9 h-9 block rounded-[50%] border-2 border-white' src={raamin} alt="" /></li>
            <li className='py-3'><img className='w-9 h-9 block rounded-[50%] border-2 border-red-600' src={nonamesontheway} alt="" /></li>
            <li className='py-3'><img className='w-9 h-9 block rounded-[50%] border-2 border-white' src={christina} alt="" /></li>
            <li className='py-3'><a href="#" className="w-9 h-9 text-xs text-center block border border-dotted leading-[33px] border-yellow-500 rounded-[50%] bg-red-200 text-yellow-600">23+</a></li>
          </ul>
      </div>
    </div>
  );
}

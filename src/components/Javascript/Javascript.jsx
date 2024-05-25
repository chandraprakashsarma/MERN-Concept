import React from 'react'
import myImage from '../../assets/Logo.png';
import { Link } from 'react-router-dom';


const users = [
  {
    name: 'Data Type',
    route: '/variable',
  },
    {
      name: 'Array',
      route: '/array',
    },
    {
      name: 'Map Method',
      route: '/map_function',  
    },
    {
      name: 'Filter Method',
      route: '/filter_method',  
    },
  
   {
     name: 'Spread Operator',      
     route: '/spread_operator',
   },

   {
    name: 'Compare Operator',      
    route: '/compare_operator',
  },
  {
    name: 'Destructuring',      
    route: '/destructuring',
  },
  {
    name: 'Key',      
    route: '/key',
  },
  {
    name: 'Template Literals',      
    route: '/template_literals',
  },
   
                 
                                  
  ]

  
export default function Javascript() {
    return (

        <>
        
       
        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            Javascript React Basic Concept
        </h1>

    <div className="grid grid-cols-4 gap-4 ">
    {users.map((user, index) => (
        <Link to={user.route} key={index} className=" p-2 rounded-md border border-gray-500 hover:bg-gray-200">
          {/*<img src={user.src} alt={user.alt} className="h-auto max-w-full rounded-lg" />*/}
          <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">{user.name}</h1>
          {/*<h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">{user.position}</h1>*/}
        </Link>
      ))}    

      </div>





      

        </>
        
        
    )
    

}


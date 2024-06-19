import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import AddTodo from './ReduxTodoComponent/AddTodo'
import Todos from './ReduxTodoComponent/Todos'
import Counter from './features/MultiReducers/MultiReducers'

export default function ReduxRTK() {
    return (

        <>
        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-4xl">
            Redux Basic Concept
        </h1>

        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Redux Tool Kit [RTK]
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">

        <Provider store={store} >
            <AddTodo/>
            <Todos/>
            
            
        

        </Provider>
        </div></div>

        </>
        
    )
}
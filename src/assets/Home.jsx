import React from 'react'
import 
{BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillGearFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

 function Home() {

 const data = [
    {
      name: 'Oct 2',
      Male: 4000,
      Female: 2400,
      amt: 2400,
    },
    {
      name: 'Oct 3',
      Male: 3000,
      Female: 1398,
      amt: 2210,
    },
    {
      name: 'Oct 4',
      Male: 2000,
      Female: 9800,
      amt: 2290,
    },
    {
      name: 'Oct 5',
      Male: 2780,
      Female: 3908,
      amt: 2000,
    },
    {
      name: 'Oct 6',
      Male: 1890,
      Female: 4800,
      amt: 2181,
    },
    {
      name: 'Oct 7',
      Male: 2390,
      Female: 3800,
      amt: 2500,
    },
    {
      name: 'Oct 8',
      Male: 3490,
      Female: 4300,
      amt: 2100,
    },
  ];
 


  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
          <div className='card'> 
            <div className='card-inner'> 
                    <h3>Attendance Overview</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
            <h1>300</h1>
          </div>
          <div className='card'> 
            <div className='card-inner'> 
                    <h3>Course Attendance</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
            <h1>12+</h1>
          </div>
          <div className='card'> 
            <div className='card-inner'> 
                    <h3>Student Information</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
            <h1>88</h1>
          </div>
          <div className='card'> 
            <div className='card-inner'> 
                    <h3>Reports and Analytics</h3>
                    <BsFillGearFill className='card_icon'/>
                </div>
            <h1>42</h1>
          </div>
        </div>

        <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => (value === 10000 ? 100 : value === 7500 ? 75 : value === 5000 ? 50 : value === 2500 ? 25 : value)}/>
                <Tooltip />
                <Legend />
                <Bar dataKey="Female" fill="#8884d8" />
                <Bar dataKey="Male" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => (value === 10000 ? 100 : value === 7500 ? 75 : value === 5000 ? 50 : value === 2500 ? 25 : value)}/>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Female" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Male" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </main>
  )
}

export default Home

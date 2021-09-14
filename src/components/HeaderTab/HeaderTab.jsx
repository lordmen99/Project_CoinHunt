import React from 'react';
import { useEffect, useState } from 'react';
import { Tabs, Table, Input, Button } from 'antd';
import { ArrowUpward } from '@material-ui/icons';
import Axios from 'axios'
import moment from 'moment';
import icon from '../../Images/icon.png'

import './headerTab.css'
// import Search from 'antd/lib/input/Search';
// import { data } from 'browserslist';
import { func } from 'prop-types';

const { TabPane } = Tabs;



const data = [
  {
    key: '1',
    icon: '',
    name: 'HashPanda (PANDA)',
    hours: '1.75%',
    cap: '$9,631,838',
    time: '2 months',
    vote: <Button type="primaryOutlined"><ArrowUpward style={{ fontSize: "small" }} />222059</Button>,
  },
  {
    key: '2',
    icon: '',
    name: 'BSC Army',
    hours: '5.74',
    cap: '$8,631,838',
    time: '3 months',
    vote: <Button type="primaryOutlined"><ArrowUpward style={{ fontSize: "small" }} />202059</Button>,
  },
  {
    key: '3',
    icon: '',
    name: 'BabyADA',
    hours: '2.25%',
    cap: '$0.5M',
    time: '2 months',
    vote: <Button type="primaryOutlined"><ArrowUpward style={{ fontSize: "small" }} />122059</Button>,
  },
  {
    key: '4',
    icon: '',
    name: 'Catgirl',
    hours: '7.75%',
    cap: '$3,931,838',
    time: '27d',
    vote: <Button type="primaryOutlined"><ArrowUpward style={{ fontSize: "small" }} />112059</Button>,
  },
  {
    key: '5',
    icon: '',
    name: 'Baby Shiba Inu',
    hours: '3.74%',
    cap: '$3,531,838',
    time: '1 months',
    vote: <Button type="primaryOutlined"><ArrowUpward style={{ fontSize: "small" }} />112131</Button>,
  },
  {
    key: '6',
    icon: '',
    name: 'BoxerInu (BOXER)',
    hours: '6.85%',
    cap: '$1,431,838',
    time: '1 months',
    vote: <Button type="primaryOutlined"><ArrowUpward style={{ fontSize: "small" }} />102059</Button>,
  },
  {
    key: '7',
    icon: '',
    name: 'TODAMOON (TDM)',
    hours: '7.25%',
    cap: '$1,431,838',
    time: '1 months',
    vote: <Button type="primaryOutlined"><ArrowUpward style={{ fontSize: "small" }} />98559</Button>,
  },
  {
    key: '8',
    icon: '',
    name: 'Decentralized Community',
    hours: '8.25%',
    cap: '$5,331,838',
    time: '1 months',
    vote: <Button type="primaryOutlined"><ArrowUpward style={{ fontSize: "small" }} />956059</Button>,
  },
  {
    key: '9',
    icon: '',
    name: 'Seferan (Safearn)',
    hours: '1.75%',
    cap: '$10,631,838',
    time: '2 months',
    vote: <Button type="primaryOutlined"><ArrowUpward style={{ fontSize: "small" }} />88059</Button>,
  },
  {
    key: '10',
    icon: '',
    name: 'SaveYourAssets(STA)',
    hours: '6.08%',
    cap: '$20,631,838',
    time: '3 months',
    vote: <Button type="primaryOutlined"><ArrowUpward style={{ fontSize: "small" }} />86759</Button>,
  },
  {
    key: '11',
    icon: '',
    name: 'Pepemoon (PEPE)',
    hours: '6.65%',
    cap: '$531,838',
    time: '3 months',
    vote: <Button type="primaryOutlined"><ArrowUpward style={{ fontSize: "small" }} />85459</Button>,
  },
  {
    key: '12',
    icon: '',
    name: 'TravelCake(TVL)',
    hours: '7.24%',
    cap: '$2,431,838',
    time: '2 months',
    vote: <Button type="primaryOutlined"><ArrowUpward style={{ fontSize: "small" }} />69059</Button>,
  },
];

const columns = [
  

    //   onChange={e => {
    //     const currValue = e.target.value;
    //     setSearch(currValue);
    //     const filterData = tabledata.filter(entry => {
    //       return entry.name.includes(search)
    //     })
    //     setTabledata(filterData)
    //   }} />,

    // dataIndex: 'Logo',
    // render: function (data) {
    //   return <img src={data} alt="icon" width="40px" 
    
 

  {
    title: 'Name',
    dataIndex: 'name',
  },

  {
    title: '24h',
    dataIndex: 'hours',
    render: (data) => data >= 0 ? <p style={{ color: "green" }}>{data}%</p> : <p style={{ color: "red" }}>{data}</p>,
    sorter: {
      compare: (a, b) => a.Vote - b.Vote,
      multiple: 4,
    },

  },
  {
    title: 'Market Cap',
    dataIndex: 'cap',
    sorter: {
      compare: (a, b) => a.Vote - b.Vote,
      multiple: 3,
    },

  },
  {
    title: 'Time since launch',
    dataIndex: 'time',
    sorter: {
      compare: (a, b) => a.Vote - b.Vote,
      multiple: 2,
    },
  },
  {
    title: 'Votes',
    dataIndex: 'vote',
    // render: function (data) {
    //   return <Button type="primaryOutlined">{data}</Button>
    // },
    sorter: {
      compare: (a, b) => a.Vote - b.Vote,
      multiple: 1,
    },

  },
];

const columns1 = [
  

  //   onChange={e => {
  //     const currValue = e.target.value;
  //     setSearch(currValue);
  //     const filterData = tabledata.filter(entry => {
  //       return entry.name.includes(search)
  //     })
  //     setTabledata(filterData)
  //   }} />,

  // dataIndex: 'Logo',
  // render: function (data) {
  //   return <img src={data} alt="icon" width="40px" 
  
  {
    dataIndex: 'Logo',
    render: text => <img src={text} width="20px"></img>
},

{
  title: 'Name',
  dataIndex: 'Name',
},

{
  title: '24h',
  dataIndex: 'HourChange',
  render: (data) => data >= 0 ? <p style={{ color: "green" }}>{data}%</p> : <p style={{ color: "red" }}>{data}</p>,
  sorter: {
    compare: (a, b) => a.Vote - b.Vote,
    multiple: 4,
  },

},
{
  title: 'Market Cap',
  dataIndex: 'MarketCap',
  sorter: {
    compare: (a, b) => a.Vote - b.Vote,
    multiple: 3,
  },

},
{
  title: 'Time since launch',
  dataIndex: 'LaunchDate',
  sorter: {
    compare: (a, b) => a.Vote - b.Vote,
    multiple: 2,
  },
},
{
  title: 'Votes',
  dataIndex: 'Vote',
  // render: function (data) {
  //   return <Button type="primaryOutlined">{data}</Button>
  // },
  sorter: {
    compare: (a, b) => a.Vote - b.Vote,
    multiple: 1,
  },

},
];




function HeaderTab() {

  const [tabledata, setTabledata] = useState([]);
  const [search, setSearch] = useState()


  // for (let i = 0; i < tabledata.length; i++) {

  //   var today = tabledata[i].LaunchDate;
  //    //today = moment(today, "YYYY-MM-DD"); 
  //   today = moment(today).fromNow(); 
  //   tabledata[i].LaunchDate = today;
    
    
  // }




  useEffect(() => {    
    Axios.get('https://coinhuntcoderatory.herokuapp.com/PromotedCoins')
    .then(response => {
        if (response) {
          setTabledata(response.data)
            console.log(response.data)
        } else {
            alert('Unable to get Data')
        }
    })
    .catch((error) => {
        console.log(error)
    })

  });

  return (
    <div className="headerTabs">

      <div className="tabsContainer" >

        {/* {...tabledata.filter(items => {
              if(search = ""){
                return items
              } else if(items.name.toLowerCase().includes(search.toLowerCase())){
                return items
              }
            }).map((items => {
              return dataSource={tabledata}
            }))  } */}

        <Tabs defaultActiveKey="1" type="card" >
          <TabPane tab="Promoted" key="1">
            <Table columns={columns1} dataSource={tabledata} pagination={false} />
          </TabPane>

          <TabPane tab="Audited" key="2">
            <Table columns={columns1} dataSource={tabledata} pagination={false} />
          </TabPane>

          <TabPane tab="Today" key="3">
            <Table columns={columns} dataSource={data} pagination={false} />
          </TabPane>

          <TabPane tab="All-Time" key="4">
            <Table columns={columns} dataSource={data} pagination={false} />
          </TabPane>

          <TabPane tab="Upcoming Launch" key="5">

          </TabPane>


        </Tabs>
      </div>


    </div>
  )
}

export default HeaderTab

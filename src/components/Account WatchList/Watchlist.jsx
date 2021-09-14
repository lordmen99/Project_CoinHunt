import React from 'react'
import { Tabs, Table, Input, Button } from 'antd';
import {ArrowUpward} from '@material-ui/icons';

const { TabPane } = Tabs;

const columns = [
    {
        title: <Input placeholder="Search" bordered={false} />,
        dataIndex: 'icon',
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: '24h',
        dataIndex: 'hours',

    },
    {
        title: 'Market Cap',
        dataIndex: 'cap',

    },
    {
        title: 'Time since launch',
        dataIndex: 'time',
    },
    {
        title: 'Votes',
        dataIndex: 'vote',
        sorter: {
            compare: (a, b) => a.vote - b.vote,
            multiple: 1,
        },

    },
];


const data = [
    {
        key: '1',
        icon: '',
        name: 'HashPanda (PANDA)',
        hours: '1.75%',
        cap: '$9,631.838',
        time: '2 months',
        vote: <Button type="primaryOutlined"><ArrowUpward style={{ fontSize: "small" }} />222059</Button>,
    },
    {
        key: '2',
        icon: '',
        name: 'HashPanda (PANDA)',
        hours: '1.75%',
        cap: '$9,631.838',
        time: '2 months',
        vote: <Button type="primaryOutlined"><ArrowUpward style={{ fontSize: "small" }} />222059</Button>,
    },
    {
        key: '3',
        icon: '',
        name: 'HashPanda (PANDA)',
        hours: '1.75%',
        cap: '$9,631.838',
        time: '2 months',
        vote: <Button type="primaryOutlined"><ArrowUpward style={{ fontSize: "small" }} />222059</Button>,
    },
    {
        key: '4',
        icon: '',
        name: 'HashPanda (PANDA)',
        hours: '1.75%',
        cap: '$9,631.838',
        time: '2 months',
        vote: <Button type="primaryOutlined"><ArrowUpward style={{ fontSize: "small" }} />222059</Button>,
    },
    {
        key: '5',
        icon: '',
        name: 'HashPanda (PANDA)',
        hours: '1.75%',
        cap: '$9,631.838',
        time: '2 months',
        vote: <Button type="primaryOutlined"><ArrowUpward style={{ fontSize: "small" }} />222059</Button>,
    },
    {
        key: '6',
        icon: '',
        name: 'HashPanda (PANDA)',
        hours: '1.75%',
        cap: '$9,631.838',
        time: '2 months',
        vote: <Button type="primaryOutlined"><ArrowUpward style={{ fontSize: "small" }} />222059</Button>,
    },
    {
        key: '7',
        icon: '',
        name: 'HashPanda (PANDA)',
        hours: '1.75%',
        cap: '$9,631.838',
        time: '2 months',
        vote: <Button type="primaryOutlined"><ArrowUpward style={{ fontSize: "small" }} />222059</Button>,
    },
    {
        key: '8',
        icon: '',
        name: 'HashPanda (PANDA)',
        hours: '1.75%',
        cap: '$9,631.838',
        time: '2 months',
        vote: <Button type="primaryOutlined"><ArrowUpward style={{ fontSize: "small" }} />222059</Button>,
    },
    {
        key: '9',
        icon: '',
        name: 'HashPanda (PANDA)',
        hours: '1.75%',
        cap: '$9,631.838',
        time: '2 months',
        vote: <Button type="primaryOutlined"><ArrowUpward style={{ fontSize: "small" }} />222059</Button>,
    },
];

function Watchlist() {
    return (
        <div>

            <div className="tabsContainer">

                <Tabs defaultActiveKey="1">
                    <TabPane key="1" >
                        <Table columns={columns} dataSource={data} pagination={false} />
                    </TabPane>

                    </Tabs>

                    </div>

    </div>
     )
}

export default Watchlist

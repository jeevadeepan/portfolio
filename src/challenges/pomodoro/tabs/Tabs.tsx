import React, { Component, useState } from 'react';
import './Tabs.scss';

type TabConfig = {
    name: string;
    content: string | JSX.Element
};

type TabsProps = {
    tabConfig: TabConfig[];
};

function Tabs(props: TabsProps) {
    const [tabSelected, setTabSelected] = useState(0);
    const [tabContent, setTabContent] = useState(props.tabConfig[0].content);
    const tabSelector = (index: number) => {
        setTabSelected(index);
        setTabContent(props.tabConfig[index].content);
    };

    const getTabClass = (index: number) => {
        if(index === tabSelected) {
            return 'timer-trigger selected';
        }
        return 'timer-trigger';
    };

    return (
        <div>
            <ul className="timer-selector">
                {
                    props.tabConfig.map((config, index) => (
                        <li key={`tab-${index}`} onClick={() => tabSelector(index)}><button className={getTabClass(index)}>{config.name}</button></li>)
                    )
                }
            </ul>
            <section className='tab-content'>
                {tabContent}
            </section>
        </div>
    );
}

export default Tabs;
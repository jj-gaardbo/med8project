import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';


export default class ModalTabs extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
          activeTab: "1"
        };

        this.toggle = this.toggle.bind(this);
        this.createNavItems = this.createNavItems.bind(this);
    }

    toggle(tab){
        if(this.state.activeTab !== tab){
            this.setState({activeTab: tab});
        }
    }

    createNavItems() {

        let self = this;
        let navItems = [];
        this.props.tabs.map((tab) => {
            let tabKey = Object.keys(tab)[0];
            let tabValue = Object.values(tab)[0];
            navItems.push(
                <NavItem key={tabKey}>
                    <NavLink
                        className={classnames({ active: self.state.activeTab === tabKey })}
                        onClick={() => { self.toggle(tabKey); }}
                    >
                        {tabValue}
                    </NavLink>
                </NavItem>
            )
        });
        return navItems;
    }

    render(){
        return (
            <div>
                <Nav tabs>
                    {this.createNavItems()}
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    {this.props.children}
                </TabContent>
            </div>
        );
    }

};

/*

const ModalTabs = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }


    const createNavItems = () => {

        let navItems = [];
        props.tabs.map((tab) => {
           let tabKey = Object.keys(tab);
           let tabValue = Object.values(tab);

           navItems.push(
               <NavItem key={tabKey}>
                   <NavLink
                       className={classnames({ active: activeTab === tabKey })}
                       onClick={() => { toggle(tabKey); }}
                   >
                       {tabValue}
                   </NavLink>
               </NavItem>
           )
        });
        return navItems;
    }

    return (
        <div>
            <Nav tabs>
                {createNavItems()}
            </Nav>
            <TabContent activeTab={activeTab}>
                {props.children()}
            </TabContent>
        </div>
    );
}

export default ModalTabs;
*/

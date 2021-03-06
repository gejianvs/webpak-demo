import React from 'react';
import {BrowserRouter, Switch, Route, Redirect, Link} from 'react-router-dom';
import {Button, Layout, Menu, Icon, Tabs,DatePicker} from 'antd';
import ProductsList from '../ProductList'
const {Sider, Content, Header} = Layout;
import style from './index.less'


class IndexPage extends React.Component {
    constructor(props) {
        super(props);
    }

    // state = {
    //     current: 'mail',
    // }


    componentDidMount() {
        console.log(this.props)
    }

    handleClick = (e) => {
        const {match, history} = this.props;
        this.setState({
            current: e.key,
        });
    }

    render() {
        const {url}=this.props.match

        return (
            <Layout className='layout'>

                <Sider className='sider'>
                    <Menu>
                        <Menu.Item key="products">
                            <Link to={`/productsList`}> <Icon type="mail"/>产品列表</Link>
                        </Menu.Item>
                        <Menu.Item key="detail">
                            <Link to={`/productDetail`}><Icon type="appstore"/>产品详情</Link>
                        </Menu.Item>
                        <Menu.Item key="async">
                            <Link to={`/asyncAction`}><Icon type="appstore"/>异步Action</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content>
                    <Switch>
                        <Route path={`/productsList`} component={ProductsList}/>
                    </Switch>
                    <div className='test'>test</div>
                </Content>
            </Layout>
        );
    }
}


export default IndexPage;



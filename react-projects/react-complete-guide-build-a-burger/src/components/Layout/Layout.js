import React, {Component} from 'react';
import Aux from '/Users/patrickrademacher/REACT/Udemy/Projects/react-complete-guide-build-a-burger/src/hoc/Aux';
import classes from '/Users/patrickrademacher/REACT/Udemy/Projects/react-complete-guide-build-a-burger/src/components/Layout/Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerMenuButton = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render (){
        return (
    <Aux>
        <Toolbar menuButtonClicked={this.sideDrawerMenuButton}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
        <main className={classes.Content}>
            {this.props.children}
        </main>
    </Aux>
);
        }
    }

export default Layout;
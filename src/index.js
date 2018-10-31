import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
/*******************************************/
import Init from './components/init';
import GraficCoin from './components/grafic_by_coin';
import NavBar from './components/nav_bar';
import GraficIndex from './components/grafic_index';
import NewsPost from './components/news_posts';
import WpPost from './components/wpPostId';
//import InsertPostWp from './components/wp_Insert_Post';

/*******************************************/

const reduxDevTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

const createStoreWhitMiddleware = applyMiddleware(thunk)(createStore)
ReactDOM.render(
    <Provider store={createStoreWhitMiddleware(rootReducer,reduxDevTools)}>
        <BrowserRouter>
            <div>
                <NavBar />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Init} />
                        <Route path="/grafic/:id" component={GraficCoin} />
                        <Route path="/grafic/" component={GraficIndex} />
                        <Route path="/news/:id" component={WpPost} />
                        <Route path="/news/" component={NewsPost} />
                        {/* <Route path="/newpost/" component={InsertPostWp} /> */}
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();


/*
const myMiddleware = (store) => (next) => (action) => {
    if (action.type === 'ACTION_FETCH_COIN' || action.type === 'ACTION_CLICK_SORT') {
        next(action);
        if (localStorage['coin'] !== JSON.stringify(store.getState())) {
            localStorage['coin'] = JSON.stringify(store.getState());
          }         
    }
   // return next(action);
}

let retrievedState;
try {
  retrievedState = localStorage.getItem('coin');
  if (retrievedState === null){
    retrievedState = {};
  }
  retrievedState = JSON.parse(retrievedState);
} catch (err){
  retrievedState = {};
}
*/
import React from 'react';
import loadable from "@loadable/component";
import Loading from "./Loading.jsx";

const A = loadable(() => import(/* webpackChunkName: "A" */ "./A.jsx"), {
  fallback: <Loading name="A" />,
  ssr: true,
});

const B = loadable(() => import(/* webpackChunkName: "B" */ "./B.jsx"), {
  fallback: <Loading name="B" />,
  ssr: true,
});

const C = loadable(() => import(/* webpackChunkName: "C" */ "./C.jsx"), {
  fallback: <Loading name="C" />,
  ssr: false,
});

const D = loadable(() => import(/* webpackChunkName: "D" */ "./D.jsx"), {
  fallback: <Loading name="D" />,
  ssr: false,
});

const E = loadable(() => import(/* webpackChunkName: "E" */ "./E.jsx"), {
  fallback: <Loading name="E" />,
  ssr: false,
});

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.loadComponent = this.loadComponent.bind(this);
    this.state = {
      showE: false
    };
  }

  loadComponent(name) {
    console.log(`loadComponent(${name})`);
    this.setState({
      ...this.state,
      showE: true
    });

  }

  render() {
    console.log('render');
    return (
      <div>
        <h1>Hello, World!</h1>
        <A />
        <B />
        <C />
        <D />
        { this.state.showE ? 
          (<E />) : <button onClick={() => this.loadComponent("E")}>Load component E</button>}
        
      </div>
    );
  }
}
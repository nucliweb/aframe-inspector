import React from 'react';

import NumberWidget from './NumberWidget';

export default class Vec2Widget extends React.Component {
  static propTypes = {
    componentname: React.PropTypes.string,
    entity: React.PropTypes.object,
    onChange: React.PropTypes.func,
    value: React.PropTypes.object.isRequired
  };

  constructor (props) {
    super(props);
    this.state = {
      x: props.value.x,
      y: props.value.y
    };
  }

  onChange = (name, value) => {
    this.setState({[name]: value}, () => {
      if (this.props.onChange) {
        this.props.onChange(name, this.state);
      }
    });
  }

  componentWillReceiveProps (nextProps) {
    this.setState(nextProps.value);
  }

  render () {
    const widgetProps = {
      componentname: this.props.componentname,
      entity: this.props.entity,
      onChange: this.onChange
    };

    return (
      <div className='vec2'>
        <NumberWidget name='x' value={this.state.x} {...widgetProps}/>
        <NumberWidget name='y' value={this.state.y} {...widgetProps}/>
      </div>
    );
  }
}

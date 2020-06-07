import React from 'react';
import JsBarcode from 'jsbarcode';

interface Props {
  renderAs?: string;
  value: string;
  options?: Options;
}

interface Options {
  format?: string;
  width?: number;
  height?: number;
  displayValue?: boolean;
  text?: string;
  fontOptions?: string;
  font?: string;
  textAlign?: string;
  textPosition?: string;
  textMargin?: number;
  fontSize?: number;
  background?: string;
  lineColor?: string;
  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  flat?: boolean;
}

export default class Barcode extends React.Component<Props> {
  inputRef = React.createRef<any>();

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.update();
  }
  
  // shouldComponentUpdate(nextProps: any) {
  //   return Object.keys(Barcode.propTypes as Barcode).some((k) => this.props[k] !== nextProps[k]);
  // }

  componentDidUpdate() {
    this.update();
  }

  update() {
    const { value, options } = this.props
    try {
      if (this.inputRef) {
        const ref = this.inputRef as any;
        JsBarcode(ref.current, value, options);
      }
    } catch (e) {
      window.console.error(e);
    }
  }

  render() {
    const { renderAs } = this.props;
    if (renderAs === 'canvas') {
      return <svg ref={this.inputRef} />;
    } else if (renderAs === 'canvas') {
      return <canvas ref={this.inputRef} />;
    } else {
      return <img ref={this.inputRef} />;
    }
  }
}

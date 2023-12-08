// ColorPicker.js
import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import './ColorPicker.css';

const ColorPicker = ({ initialColor, onChange, onSwatchClick }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState(initialColor || { r: 0, g: 0, b: 0, a: 1 }); // Set default to black

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
    if (onSwatchClick) {
      onSwatchClick();
    }
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (newColor) => {
    setColor(newColor.rgb);
    onChange(newColor);
  };

  return (
    <div className="ColorPicker" onClick={handleClick}>
      <div className="colorButton">
        <div className="swatch" style={{ background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})` }} />
      </div>
      {displayColorPicker ? (
        <div className="popover">
          <div className="cover" onClick={handleClose} />
          <SketchPicker color={color} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;

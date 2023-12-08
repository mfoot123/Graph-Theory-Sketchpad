import React, { useState } from 'react';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';

/* source: https://casesandberg.github.io/react-color/ */

const ColorPicker = ({ initialColor, onChange, onSwatchClick, width }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState(initialColor || { r: '241', g: '112', b: '19', a: '1' });

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

  const styles = reactCSS({
    'default': {
      colorSwatch: {
        width: '36px',
        height: '14px',
        borderRadius: '2px',
        background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  });

  return (
    <div>
      <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.colorSwatch} />
      </div>
      {displayColorPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <SketchPicker color={color} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;

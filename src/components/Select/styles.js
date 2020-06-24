// TODO: 247, 148, 28 ===> $primary

const customStyles = {
  option: (provided, state) => {
    const focusedControlStyles = {
      label: 'option',
      backgroundColor: '#b9b9b9',
      cursor: 'default',
      display: 'block',
      fontSize: 'inherit',
      color: 'inherit',
      textColor: '#123054',
      fontWeight: '600',
      padding: '8px 12px',
      width: '100%',
      userSelect: 'none',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      active: { backgroundColor: '#b9b9b9' },
      boxSizing: 'border-box',
    };
    const selectedControlStyles = {
      label: 'option',
      backgroundColor: '#b9b9b9',
      color: 'inherit',
      cursor: 'default',
      display: 'block',
      fontSize: 'inherit',
      textColor: '#123054',
      fontWeight: '600',
      padding: '8px 12px',
      width: '100%',
      userSelect: 'none',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      active: { backgroundColor: '#b9b9b9' },
      boxSizing: 'border-box',
    };

    if (state.isSelected) return selectedControlStyles;
    if (state.isFocused) return focusedControlStyles;

    return provided;
  },
  control: (provided, state) => {
    const focusedControlStyles = {
      label: 'control',
      alignItems: 'center',
      backgroundColor: 'hsl(0, 0%, 100%)',
      borderColor: '#b9b9b9',
      borderRadius: 4,
      borderStyle: 'solid',
      borderWidth: 1,
      boxShadow: '0 0 10px #b9b9b9',
      cursor: 'default',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      minHeight: 47,
      outline: '0 !important',
      position: 'relative',
      transition: 'all 100ms',
      color: 'inherit',
      fontWeight: '600',
      '&:hover': {
        borderColor: '#b9b9b9',
      },
      boxSizing: 'border-box',
    };

    return state.isFocused
      ? focusedControlStyles
      : { ...provided, minHeight: 47 };
  },
};

export default customStyles;
